import { useState, useEffect, useContext } from 'react'
import {
	GlobalDispatchContext,
	GlobalStateContext,
} from '../context/GlobalContextProvider'

import Character from '../components/Character/Character'
import Select from '../components/Select'

import Artifacts from '../data/artifacts'
import Stats from '../data/stats'
import Characters from '../data/characters'

import Head from 'next/head'

const Home = () => {
	// GLOBAL STATE
	const dispatch = useContext(GlobalDispatchContext)
	const STATE = useContext(GlobalStateContext)

	// BUILD ARRAYS
	let characterArray = [...Characters]

	// BUILD CHARACTER OPTIONS
	let characterOptions = []
	characterArray.map(x =>
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

	useEffect(() => {
		let array = [...Characters]
		setCharsState(array)

		if (STATE.character) {
			array = array.filter(ele => ele.id === STATE.character)
			setCharsState(array)
		}

		if (STATE.artifact) {
			array = array.filter(ele =>
				ele.artifact.some(g => g.id === STATE.artifact)
			)
			setCharsState(array)
		}

		if (STATE.stat) {
			array = array.filter(ele => {
				return ele[STATE.stat.type].some(g => g === STATE.stat.stat)
			})
			setCharsState(array)
		}
	}, [STATE, dispatch])

	const [CHARS, setCharsState] = useState(characterArray)
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
				{CHARS.map((character, index) => {
					return (
						<Character
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
