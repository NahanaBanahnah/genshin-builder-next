import { useState } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import Artifacts from '../../data/artifacts'

const Artifact = ({ id, qty }) => {
	const ARTIFACT = Artifacts.find(e => e.id === id)
	const IMG = `/img/artifacts/${id}.webp`
	const [LOADED, setLoaded] = useState(false)

	const imgClass = LOADED ? 'show' : 'hide'

	return (
		<>
			<Image
				className={imgClass}
				src={IMG}
				alt={id}
				width="48"
				height="48"
				placeholder="blur"
				blurDataURL={`/_next/image?url=${IMG}&w=32&q=10`}
				onLoad={() => setLoaded(true)}
			/>
			<div>
				{ARTIFACT.name} <span>{qty}x</span>
			</div>
		</>
	)
}

Artifact.propTypes = {
	id: PropTypes.string.isRequired,
	qty: PropTypes.number.isRequired,
}

export default Artifact
