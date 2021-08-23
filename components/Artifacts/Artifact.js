import { useState } from 'react'
import Image from 'next/image'
import Artifacts from '../../data/artifacts'
import img from '../../public/img/artifacts/archaic_petra.webp'

const Artifact = props => {
	const ARTIFACT = Artifacts.find(e => e.id === props.id)
	const IMG = `/img/artifacts/${props.id}.webp`
	const [LOADED, setLoaded] = useState(false)
	let imgClass = LOADED ? 'show' : 'hide'

	return (
		<>
			<Image
				className={imgClass}
				src={IMG}
				alt={props.id}
				width="48"
				height="48"
				placeholder="blur"
				blurDataURL={`/_next/image?url=${IMG}&w=32&q=10`}
				onLoad={() => setLoaded(true)}
			/>
			<div>
				{ARTIFACT.name} <span>{props.qty}x</span>
			</div>
		</>
	)
}

export default Artifact
