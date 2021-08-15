import Image from 'next/image'
import Artifacts from '../../data/artifacts'
import img from '../../public/img/artifacts/archaic_petra.webp'

const Artifact = props => {
	// let artifact = props.artifact.map(artifact => {
	const ARTIFACT = Artifacts.find(e => e.id === props.id)
	const IMG = `/img/artifacts/${props.id}.webp`
	return (
		<>
			<Image
				src={IMG}
				alt={props.id}
				width="65"
				height="60"
				layout="responsive"
				objectFit="contain"
				placeholder="blur"
				blurDataURL={`/_next/image?url=${IMG}&w=16&q=1`}
			/>
			<div>
				{ARTIFACT.name} x{props.qty}
			</div>
		</>
	)
}

export default Artifact
