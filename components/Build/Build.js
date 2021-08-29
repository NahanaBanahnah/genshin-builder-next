import React, { useState, useContext, useEffect, useRef } from 'react'
import Image from 'next/image'

import { GlobalStateContext } from '../../context/GlobalContextProvider'

import Characters from '../../data/characters'

import Artifacts from '../Artifacts/Artifacts'
import Stats from '../Stats/Stats'
import Weapons from '../Weapons/Weapons'
import Ascend from '../Ascend/Ascend'

const Build = props => {
	const STATE = useContext(GlobalStateContext)

	// ========== Set Up Windowing
	const REF = useRef(null)
	const [IS_VISIBLE, setIsVisible] = useState(true)

	// ========== Image Loading
	const IMG = `/img/characters/${props.id}.webp`
	const [IMG_LOADED, setLoaded] = useState(false)
	let imgClass = IMG_LOADED ? 'show' : 'hide'

	// ====== Set the class and set up filtering
	const CLASS = ['main', props.element]
	const [FILTERED, setFilter] = useState(false)

	//CB for windowing
	const VIS_CALLBACK = entries => {
		const [ENTRY] = entries
		if (ENTRY.intersectionRatio <= 0.5) {
			setIsVisible(false)
		} else {
			setIsVisible(true)
		}
	}

	//Observe windowing
	useEffect(() => {
		const OPTIONS = {
			root: null,
			rootMargin: '64px',
			threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
		}
		const OBSERVER = new IntersectionObserver(VIS_CALLBACK, OPTIONS)
		if (REF.current) OBSERVER.observe(REF.current)

		return () => {
			if (REF.current) OBSERVER.unobserve(REF.current)
		}
	})

	//Should we filter?!?
	useEffect(() => {
		let artifact = true
		let character = true
		let stat = true

		if (STATE.artifact) {
			artifact = props.artifact.find(e => e.id === STATE.artifact)
		}

		if (STATE.character) {
			character = STATE.character === props.id ? true : false
		}

		if (STATE.stat) {
			stat = props[STATE.stat.type].find(e => e === STATE.stat.stat)
		}

		setFilter(!artifact || !character || !stat ? true : false)
	}, [STATE, props])

	//If its in view load html into container
	const HTML = IS_VISIBLE ? (
		<div className="holder" style={{ animation: `fadeIn 1s` }}>
			<div className="build" style={{ animation: `fadeIn 1s` }}>
				<h1>{props.build}</h1>
			</div>
			<div className="character" style={{ animation: `fadeIn 1s` }}>
				<div className="bg">
					<Image
						className={imgClass}
						src={IMG}
						layout="fill"
						objectFit="cover"
						alt={props.id}
						quality={75}
						objectPosition="top"
						placeholder="blur"
						blurDataURL={`/_next/image?url=${IMG}&w=32&q=10`}
						onLoad={() => setLoaded(true)}
					/>
				</div>
			</div>
			<Weapons weapons={props.weapon} />
			<Artifacts artifact={props.artifact} />
			<Stats artifact="sand" stats={props.sand} />
			<Stats artifact="glass" stats={props.glass} />
			<Stats artifact="crown" stats={props.crown} />
			<Stats stat="Sub Stats" stats={props.subStats} />
			<div className="characterName">
				<h2>{props.name}</h2>
			</div>
			<div className="ascend">
				<Ascend ascend={Characters[props.id].ascend} />
			</div>
		</div>
	) : null

	//no need to have the container for filtered results
	return FILTERED ? null : (
		<div className={CLASS.join(' ')} ref={REF}>
			{HTML}
		</div>
	)
}

export default Build
