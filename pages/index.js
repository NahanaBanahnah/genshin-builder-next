import { useState, useEffect, useContext } from 'react'
import {
	GlobalDispatchContext,
	GlobalStateContext,
} from '../context/GlobalContextProvider'
import ReactTooltip from 'react-tooltip'

import Build from '../components/Build/Build'
import Select from '../components/Select'

import Artifacts from '../data/artifacts'
import Stats from '../data/stats'
import Builds from '../data/builds'
import Characters from '../data/characters'

import Head from 'next/head'

const Home = () => {
	let locals = {}
	let local = Object.values(Characters).map(e => {
		return e.ascend.common
	})
	local = local.filter((v, i, a) => a.indexOf(v) === i)
	local = local.map(e => {
		let name = e ? e.replace('_', ' ') : null
		name = name ? name[0].toUpperCase() + name.slice(1) : null

		locals[e] = {
			1: name,
			2: name,
			3: name,
		}
	})

	locals = JSON.stringify(locals, null, 2)

	// GLOBAL STATE
	const dispatch = useContext(GlobalDispatchContext)
	const STATE = useContext(GlobalStateContext)

	// BUILD ARRAYS
	let buildArray = [...Builds]

	// BUILD CHARACTER OPTIONS
	let characterOptions = []
	buildArray.map(x =>
		characterOptions.filter(a => a.id === x.id).length > 0
			? null
			: characterOptions.push(x)
	)
	characterOptions.sort((a, b) => a.name.localeCompare(b.name))

	let stats = [...Stats]
	stats.sort((a, b) => a.name.localeCompare(b.name))

	let sandOptions = stats.filter(ele => ele.set.some(g => g === 'sand'))
	let glassOptions = stats.filter(ele => ele.set.some(g => g === 'glass'))
	let crownOptions = stats.filter(ele => ele.set.some(g => g === 'crown'))

	const setArtifact = e => {
		let value = e.target.value === 'null' ? null : e.target.value
		dispatch({ type: 'SET_ARTIFACT', payload: value })
	}

	const setCharacter = e => {
		let value = e.target.value === 'null' ? null : e.target.value
		dispatch({ type: 'SET_CHARACTER', payload: value })
	}

	const setStat = e => {
		let value = e.target.value === 'null' ? null : {}
		if (value) {
			value.type = e.target.name
			value.stat = e.target.value
		}

		dispatch({ type: 'SET_STAT', payload: value })
	}

	return (
		<>
			<Head>
				<title>Genshin Builder</title>
			</Head>
			<main>
				<nav>
					<div className="container">
						Filter
						<Select
							options={characterOptions}
							id="id"
							title="name"
							function={e => setCharacter(e)}
							label="Character"
						/>
						<Select
							options={Artifacts}
							id="id"
							title="name"
							function={e => setArtifact(e)}
							label="Artifact"
						/>
						<Select
							options={sandOptions}
							name="sand"
							id="id"
							title="name"
							function={e => setStat(e)}
							label="Sand"
						/>
						<Select
							options={glassOptions}
							name="glass"
							id="id"
							title="name"
							function={e => setStat(e)}
							label="Glass"
						/>
						<Select
							options={crownOptions}
							name="crown"
							id="id"
							title="name"
							function={e => setStat(e)}
							label="Crown"
						/>
					</div>
				</nav>
				<ReactTooltip
					effect="solid"
					place="bottom"
					backgroundColor="#d2ab76"
				/>
				{/* <pre>{locals}</pre> */}
				{buildArray.map((character, index) => {
					return (
						<Build
							key={index}
							name={character.name}
							element={character.element}
							id={character.id}
							weapon={character.weapon}
							artifact={character.artifact}
							sand={character.sand}
							glass={character.glass}
							crown={character.crown}
							subStats={character.sub}
							build={character.build}
						/>
					)
				})}
			</main>
		</>
	)
}

export default Home
