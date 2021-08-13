import { useContext } from 'react'
import Image from 'next/image'

import { GlobalStateContext } from '../../context/GlobalContextProvider'

import Artifacts from './Artifacts'
import Stats from './Stats'
import Weapons from './Weapons'

const Character = props => {
	const STATE = useContext(GlobalStateContext)
	const CLASS = ['main', props.element]

	if (STATE.stat) {
		CLASS.push('fade')
	}

	return (
		<div className={CLASS.join(' ')}>
			<div className="build">{props.build}</div>
			<div className="character">
				<div className="bg">
					<Image
						src={`/img/characters/${props.id}.webp`}
						layout="fill"
						objectFit="cover"
						alt={props.id}
						quality={100}
						objectPosition="top"
					/>
				</div>
				<h1>{props.name}</h1>
			</div>
			<Weapons weapons={props.weapon} />
			<Artifacts artifact={props.artifact} />
			<Stats artifact="sand" stats={props.sand} />
			<Stats artifact="glass" stats={props.glass} />
			<Stats artifact="crown" stats={props.crown} />
			<Stats stat="Sub Stats" stats={props.subStats} />
		</div>
	)
}

export default Character
