import Image from 'next/image'
import Weapons from '../../data/weapons'

const Weapon = props => {
	// let artifact = props.artifact.map(artifact => {
	let WEAPON = false
	WEAPON = Weapons.find(e => e.id === props.id)
	let name = WEAPON ? WEAPON.name : props.id
	let rate = {
		3: 'three',
		4: 'four',
		5: 'five',
	}

	return (
		<>
			<Image
				src={`/img/weapons/${props.id}.webp`}
				alt={props.id}
				width={50}
				height={50}
				layout="responsive"
				objectFit="contain"
			/>
			<div className={`${rate[WEAPON.rating]}-star`}>{name}</div>
		</>
	)
}

export default Weapon
