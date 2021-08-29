import { useState, useEffect, useContext } from 'react'
import {
	GlobalDispatchContext,
	GlobalStateContext,
} from '../context/GlobalContextProvider'
// import ReactTooltip from 'react-tooltip'

import Nav from '../components/Nav/Nav'
import Build from '../components/Build/Build'

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

	return (
		<>
			<Head>
				<title>Genshin Builder</title>
			</Head>
			<main>
				<Nav />
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
