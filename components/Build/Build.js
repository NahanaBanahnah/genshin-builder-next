import { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { GlobalStateContext } from '../../context/GlobalContextProvider'

import Artifacts from './Artifacts'
import Stats from './Stats'
import Weapons from './Weapons'

const Character = props => {
	const STATE = useContext(GlobalStateContext)
	const CLASS = ['main', props.element]

	const IMG = `/img/characters/${props.id}.webp`
	const [HIDE, setHide] = useState(false)
	let hideClass = HIDE ? 'hide' : 'show'

	const [LOADED, setLoaded] = useState(false)
	let imgClass = LOADED ? 'show' : 'hide'

	useEffect(() => {
		let artifact = true
		let character = true
		let stat = true

		if (STATE.artifact) {
			artifact = props.artifact.find(e => e.id === STATE.artifact)
		}

		if (STATE.character) {
			character = STATE.character === props.id ? true : false
		}

		if (STATE.stat) {
			stat = props[STATE.stat.type].find(e => e === STATE.stat.stat)
			console.log(stat)
		}

		setHide(!artifact || !character || !stat ? true : false)
	}, [STATE, props])

	CLASS.push(hideClass)

	return (
		<div className={CLASS.join(' ')}>
			<div className="build">{props.build}</div>
			<div className="character">
				<div className="bg">
					<Image
						className={imgClass}
						src={IMG}
						layout="fill"
						objectFit="cover"
						alt={props.id}
						quality={75}
						objectPosition="top"
						placeholder="blur"
						blurDataURL={`/_next/image?url=${IMG}&w=32&q=10`}
						onLoad={() => setLoaded(true)}
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
