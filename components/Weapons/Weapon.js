import { useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import PropTypes from 'prop-types'
import Image from 'next/image'
import Weapons from '../../data/weapons'

const Weapon = ({ id }) => {
	const theme = useTheme()
	const LG = useMediaQuery(theme.breakpoints.down('lg'))

	const { name, rarity } = Weapons[id]

	const RATE = {
		3: 'three',
		4: 'four',
		5: 'five',
	}
	const [LOADED, setLoaded] = useState(false)
	const IMG_CLASS = LOADED ? 'show' : 'hide'

	const IMG = `/img/weapons/${id}.webp`
	const IMG_SIZE = LG ? 32 : 48
	return (
		<>
			<Image
				className={IMG_CLASS}
				src={IMG}
				alt={id}
				width={IMG_SIZE}
				height={IMG_SIZE}
				placeholder="blur"
				blurDataURL={`/_next/image?url=${IMG}&w=32&q=10`}
				onLoad={() => setLoaded(true)}
			/>
			<div className={`${RATE[rarity]}-star`}>{name}</div>
		</>
	)
}

Weapon.propTypes = {
	id: PropTypes.string.isRequired,
}

export default Weapon
