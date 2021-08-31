import { useContext } from 'react'
import Select from '../Select/Select'

import { GlobalDispatchContext } from '../../context/GlobalContextProvider'

import Artifacts from '../../data/artifacts'
import Characters from '../../data/characters'
import Stats from '../../data/stats'

const Nav = () => {
	const dispatch = useContext(GlobalDispatchContext)

	const CHARACTER_OPTIONS = Object.values(Characters).map(ele => ({
		id: ele.id,
		name: ele.name,
	}))

	const stats = [...Stats]
	stats.sort((a, b) => a.name.localeCompare(b.name))

	let sandOptions = stats.filter(ele => ele.set.some(g => g === 'sand'))
	let glassOptions = stats.filter(ele => ele.set.some(g => g === 'glass'))
	let crownOptions = stats.filter(ele => ele.set.some(g => g === 'crown'))

	sandOptions = sandOptions.map(v => ({ ...v, type: 'sand' }))
	glassOptions = glassOptions.map(v => ({ ...v, type: 'glass' }))
	crownOptions = crownOptions.map(v => ({ ...v, type: 'crown' }))

	const setArtifact = obj => {
		const value = obj ? obj.id : null

		dispatch({ type: 'SET_ARTIFACT', payload: value })
	}

	const setCharacter = obj => {
		const value = obj ? obj.id : null
		dispatch({ type: 'SET_CHARACTER', payload: value })
	}

	const setStat = obj => {
		const value = obj ? {} : null
		if (value) {
			value.type = obj.type
			value.stat = obj.id
		}

		dispatch({ type: 'SET_STAT', payload: value })
	}

	return (
		<nav>
			<div className="container">
				Filter
				<Select
					options={CHARACTER_OPTIONS}
					id="id"
					title="name"
					size={250}
					onChangeFunction={e => setCharacter(e)}
					label="Character"
				/>
				<Select
					options={Artifacts}
					id="id"
					title="name"
					size={250}
					onChangeFunction={e => setArtifact(e)}
					label="Artifact"
				/>
				<Select
					options={sandOptions}
					name="sand"
					id="id"
					title="name"
					size={150}
					onChangeFunction={e => setStat(e)}
					label="Sand"
				/>
				<Select
					options={glassOptions}
					name="glass"
					id="id"
					size={150}
					title="name"
					onChangeFunction={e => setStat(e)}
					label="Glass"
				/>
				<Select
					options={crownOptions}
					name="crown"
					id="id"
					size={150}
					title="name"
					onChangeFunction={e => setStat(e)}
					label="Crown"
				/>
			</div>
		</nav>
	)
}

export default Nav
