import React from 'react'
import Weapon from './Weapon'

const Weapons = props => {
	let weapons = props.weapons.map(weapon => {
		return <Weapon key={weapon} id={weapon} />
	})
	return <div className="weapons">{weapons}</div>
}

export default Weapons