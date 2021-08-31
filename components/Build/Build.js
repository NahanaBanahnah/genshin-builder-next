import React, { useState, useContext, useEffect, useRef } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import { GlobalStateContext } from '../../context/GlobalContextProvider'

import Characters from '../../data/characters'

import Artifacts from '../Artifacts/Artifacts'
import Stats from '../Stats/Stats'
import Weapons from '../Weapons/Weapons'
import Ascend from '../Ascend/Ascend'

const Build = ({
	id,
	element,
	artifactArray,
	build,
	name,
	weapon,
	sand,
	glass,
	crown,
	subStats,
}) => {
	const { ARTIFACT_STATE, CHARACTER_STATE, STAT_STATE } =
		useContext(GlobalStateContext)

	// ========== Set Up Windowing
	const REF = useRef(null)
	const [IS_VISIBLE, setIsVisible] = useState(true)

	// ========== Image Loading
	const IMG = `/img/characters/${id}.webp`
	const [IMG_LOADED, setLoaded] = useState(false)
	const IMG_CLASS = IMG_LOADED ? 'show' : 'hide'

	// ====== Set the class and set up filtering
	const CLASS = ['main', element]
	const [FILTERED, setFilter] = useState(false)

	// ====== CB for windowing
	const VIS_CALLBACK = entries => {
		const [ENTRY] = entries
		if (ENTRY.intersectionRatio <= 0.5) {
			setIsVisible(false)
		} else {
			setIsVisible(true)
		}
	}

	// ====== Observe windowing
	useEffect(() => {
		const CURRENT = REF.current
		const OPTIONS = {
			root: null,
			rootMargin: '64px',
			threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
		}
		const OBSERVER = new IntersectionObserver(VIS_CALLBACK, OPTIONS)
		if (CURRENT) OBSERVER.observe(CURRENT)

		return () => {
			if (CURRENT) OBSERVER.unobserve(CURRENT)
		}
	})

	// ====== Should we filter?!?
	useEffect(() => {
		const STAT_OBJ = {
			crown,
			sand,
			glass,
		}

		let artifactIsSet = true
		let characterIsSet = true
		let statIsSet = true

		if (ARTIFACT_STATE) {
			artifactIsSet = artifactArray.find(e => e.id === ARTIFACT_STATE)
		}

		if (CHARACTER_STATE) {
			characterIsSet = CHARACTER_STATE === id
		}

		if (STAT_STATE) {
			statIsSet = STAT_OBJ[STAT_STATE.type].find(
				e => e === STAT_STATE.stat
			)
		}

		setFilter(!artifactIsSet || !characterIsSet || !statIsSet)
	}, [
		ARTIFACT_STATE,
		CHARACTER_STATE,
		STAT_STATE,
		artifactArray,
		id,
		crown,
		glass,
		sand,
	])

	// If its in view load html into container
	const HTML = IS_VISIBLE ? (
		<div className="holder" style={{ animation: `fadeIn 1s` }}>
			<div className="build" style={{ animation: `fadeIn 1s` }}>
				<h1>{build}</h1>
			</div>
			<div className="character" style={{ animation: `fadeIn 1s` }}>
				<div className="bg">
					<Image
						className={IMG_CLASS}
						src={IMG}
						layout="fill"
						objectFit="cover"
						alt={id}
						quality={75}
						objectPosition="top"
						placeholder="blur"
						blurDataURL={`/_next/image?url=${IMG}&w=32&q=10`}
						onLoad={() => setLoaded(true)}
					/>
				</div>
			</div>
			<Weapons weapons={weapon} />
			<Artifacts artifact={artifactArray} />
			<Stats artifact="sand" stats={sand} />
			<Stats artifact="glass" stats={glass} />
			<Stats artifact="crown" stats={crown} />
			<Stats stat="Sub Stats" stats={subStats} />
			<div className="characterName">
				<h2>{name}</h2>
			</div>
			<div className="ascend">
				<Ascend ascend={Characters[id].ascend} />
			</div>
		</div>
	) : null

	// no need to have the container for filtered results
	return FILTERED ? null : (
		<div className={CLASS.join(' ')} ref={REF}>
			{HTML}
		</div>
	)
}

Build.propTypes = {
	id: PropTypes.string.isRequired,
	element: PropTypes.string.isRequired,
	artifactArray: PropTypes.instanceOf(Array).isRequired,
	name: PropTypes.string.isRequired,
	build: PropTypes.string.isRequired,
	weapon: PropTypes.instanceOf(Array).isRequired,
	sand: PropTypes.instanceOf(Array).isRequired,
	glass: PropTypes.instanceOf(Array).isRequired,
	crown: PropTypes.instanceOf(Array).isRequired,
	subStats: PropTypes.instanceOf(Array).isRequired,
}

export default Build
