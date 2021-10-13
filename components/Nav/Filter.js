import { useContext } from 'react'
import { GlobalDispatchContext } from '../../context/GlobalContextProvider'

import Artifacts from '../../data/artifacts'
import Characters from '../../data/characters'
import Stats from '../../data/stats'
import Weapons from '../../data/weapons'
import Select from '../Select/Select'

const Filter = () => {
	const dispatch = useContext(GlobalDispatchContext)

	const CHARACTER_OPTIONS = Object.values(Characters).map(ele => ({
		id: ele.id,
		name: ele.name,
	}))
	const WEAPON_OPTIONS = Object.entries(Weapons).map(ele => ({
		id: ele[0],
		name: ele[1].name,
		type: ele[1].type.toUpperCase(),
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

	const setWeapon = obj => {
		const value = obj ? obj.id : null

		dispatch({ type: 'SET_WEAPON', payload: value })
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
		<>
			<Select
				options={CHARACTER_OPTIONS}
				title="name"
				size={150}
				menuSize={250}
				onChangeFunction={e => setCharacter(e)}
				label="Character"
				name="character"
			/>
			<Select
				options={WEAPON_OPTIONS}
				groupBy="type"
				sort="type"
				title="name"
				size={150}
				menuSize={250}
				onChangeFunction={e => setWeapon(e)}
				label="Weapon"
				name="weapon"
			/>
			<Select
				options={Artifacts}
				title="name"
				size={150}
				menuSize={250}
				onChangeFunction={e => setArtifact(e)}
				label="Artifact"
				name="artifact"
			/>
			<Select
				options={sandOptions}
				name="sand"
				title="name"
				size={150}
				menuSize={250}
				onChangeFunction={e => setStat(e)}
				label="Sand"
			/>
			<Select
				options={glassOptions}
				name="glass"
				size={150}
				menuSize={250}
				title="name"
				onChangeFunction={e => setStat(e)}
				label="Glass"
			/>
			<Select
				options={crownOptions}
				name="crown"
				size={150}
				menuSize={250}
				title="name"
				onChangeFunction={e => setStat(e)}
				label="Crown"
			/>
		</>
	)
}

export default Filter
