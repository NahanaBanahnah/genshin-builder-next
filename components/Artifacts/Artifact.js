import { useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Image from 'next/image'
import PropTypes from 'prop-types'

import Artifacts from '../../data/artifacts'

const Artifact = ({ id, qty }) => {
	const theme = useTheme()
	const MD = useMediaQuery(theme.breakpoints.down('md'))

	const ARTIFACT = Artifacts.find(e => e.id === id)
	const IMG = `/img/artifacts/${id}.webp`
	const [LOADED, setLoaded] = useState(false)

	const imgClass = LOADED ? 'show' : 'hide'
	const IMG_SIZE = MD ? 32 : 48

	return (
		<>
			<Image
				className={imgClass}
				src={IMG}
				alt={id}
				width={IMG_SIZE}
				height={IMG_SIZE}
				placeholder="blur"
				blurDataURL={`/_next/image?url=${IMG}&w=32&q=10`}
				onLoad={() => setLoaded(true)}
			/>
			<div>
				{ARTIFACT.name} <span className="elementColor2-BG">{qty}x</span>
			</div>
		</>
	)
}

Artifact.propTypes = {
	id: PropTypes.string.isRequired,
	qty: PropTypes.number.isRequired,
}

export default Artifact
