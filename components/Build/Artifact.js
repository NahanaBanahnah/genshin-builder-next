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
				width="50"
				height="50"
				placeholder="blur"
				blurDataURL={`/_next/image?url=${IMG}&w=32&q=10`}
				onLoad={() => setLoaded(true)}
			/>
			<div>
				{ARTIFACT.name} x{props.qty}
			</div>
		</>
	)
}

export default Artifact
