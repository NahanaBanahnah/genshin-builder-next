import React, { useState, useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { GlobalStateContext } from '../../context/GlobalContextProvider'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper'

import Characters from '../../data/characters'

import Character from '../Character/Character'
import Artifacts from '../Artifacts/Artifacts'
import Weapons from '../Weapons/Weapons'
import Level from '../Level/Level'
import StatContainer from '../Stats/StatContainer'

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
	const {
		ARTIFACT_STATE,
		CHARACTER_STATE,
		STAT_STATE,
		WEAPON_STATE,
		LEVEL_DETAILS,
	} = useContext(GlobalStateContext)

	// ========== Set Up Windowing
	const REF = useRef(null)
	const [IS_VISIBLE, setIsVisible] = useState(true)

	const THEME = useTheme()
	const MD = useMediaQuery(THEME.breakpoints.down('md'))

	// ====== Set the class and set up filtering
	const CLASS = ['main', element]
	const [FILTERED, setFilter] = useState(false)

	const [MOBILE_DETAILS, setMobileDetails] = useState(false)

	if (MOBILE_DETAILS) {
		CLASS.push('mobileShowing')
	}

	const toggleMobileView = () => {
		setMobileDetails(!MOBILE_DETAILS)
	}

	if (LEVEL_DETAILS[`${id}-${build}`]) {
		CLASS.push('showing')
	}

	// ====== CB for windowing
	const VIS_CALLBACK = entries => {
		const [ENTRY] = entries
		if (ENTRY.intersectionRatio <= 0.1) {
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
			rootMargin: '16px',
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
		let weaponIsSet = true
		let characterIsSet = true
		let statIsSet = true

		if (ARTIFACT_STATE) {
			artifactIsSet = artifactArray.find(e => e.id === ARTIFACT_STATE)
		}
		if (WEAPON_STATE) {
			weaponIsSet = weapon.find(e => e === WEAPON_STATE)
		}

		if (CHARACTER_STATE) {
			characterIsSet = CHARACTER_STATE === id
		}

		if (STAT_STATE) {
			statIsSet = STAT_OBJ[STAT_STATE.type].find(
				e => e === STAT_STATE.stat
			)
		}

		setFilter(
			!artifactIsSet || !characterIsSet || !statIsSet || !weaponIsSet
		)
	}, [
		ARTIFACT_STATE,
		CHARACTER_STATE,
		STAT_STATE,
		WEAPON_STATE,
		artifactArray,
		id,
		weapon,
		crown,
		glass,
		sand,
	])

	// If its in view load html into container
	const HTML = IS_VISIBLE ? (
		<div className="holder" style={{ animation: `fadeIn 1s` }}>
			{/* if its mobile we wrap the header in its own div */}
			<ConditionalWrapper
				condition={MD}
				wrapper={children => (
					<div
						className="headContainer"
						onClick={MD ? () => toggleMobileView() : null}
						onKeyDown={MD ? () => toggleMobileView() : null}
						role={MD ? 'button' : null}
					>
						{children}
					</div>
				)}
			>
				{/* if its mobile this becomes a button */}
				<div className="build">
					<h1>{build}</h1>
				</div>
				<Character id={id} name={name} />
			</ConditionalWrapper>
			{((MD && MOBILE_DETAILS) || !MD) && (
				<>
					<Weapons weapons={weapon} />
					<Artifacts artifact={artifactArray} />

					<StatContainer
						sand={sand}
						glass={glass}
						crown={crown}
						subStats={subStats}
					/>

					<Level
						local={Characters[id].ascend.local}
						gem={Characters[id].ascend.gem}
						boss={Characters[id].ascend.boss}
						common={Characters[id].ascend.common}
						book={Characters[id].talent.book}
						weekly={Characters[id].talent.boss}
						buildId={`${id}-${build}`}
					/>
				</>
			)}
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
