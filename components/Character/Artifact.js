import Image from 'next/image'
import Artifacts from '../../data/artifacts'

const Artifact = props => {
	// let artifact = props.artifact.map(artifact => {
	const ARTIFACT = Artifacts.find(e => e.id === props.id)

	return (
		<>
			<Image
				src={require(`../../public/img/artifacts/${props.id}.webp`)}
				alt={props.id}
				width="65"
				height="60"
				layout="responsive"
				objectFit="contain"
			/>
			<div>
				{ARTIFACT.name} x{props.qty}
			</div>
		</>
	)
}

export default Artifact
