import { useState } from 'react'
import Image from 'next/image'
import Weapons from '../../data/weapons'

const Weapon = props => {
	let WEAPON = false
	WEAPON = Weapons.find(e => e.id === props.id)
	let name = WEAPON ? WEAPON.name : props.id
	let rate = {
		3: 'three',
		4: 'four',
		5: 'five',
	}
	const [LOADED, setLoaded] = useState(false)
	let imgClass = LOADED ? 'show' : 'hide'

	let IMG = `/img/weapons/${props.id}.webp`
	return (
		<>
			<Image
				className={imgClass}
				src={IMG}
				alt={props.id}
				width={50}
				height={50}
				placeholder="blur"
				blurDataURL={`/_next/image?url=${IMG}&w=32&q=10`}
				onLoad={() => setLoaded(true)}
			/>
			<div className={`${rate[WEAPON.rating]}-star`}>{name}</div>
		</>
	)
}

export default Weapon
