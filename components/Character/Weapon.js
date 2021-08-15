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

	let IMG = `/img/weapons/${props.id}.webp`
	return (
		<>
			<Image
				src={IMG}
				alt={props.id}
				width={50}
				height={50}
				layout="responsive"
				objectFit="contain"
				placeholder="blur"
				blurDataURL={`/_next/image?url=${IMG}&w=16&q=1`}
			/>
			<div className={`${rate[WEAPON.rating]}-star`}>{name}</div>
		</>
	)
}

export default Weapon
