import { useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import PropTypes from 'prop-types'
import Image from 'next/image'

import styles from './character.module.scss'

const Character = ({ id, name }) => {
	// ========== Image Loading
	const IMG = `/img/characters/${id}.webp`
	const IMG_ICON = `/img/characters_icon/${id}.webp`
	const [IMG_LOADED, setLoaded] = useState(false)
	const IMG_CLASS = IMG_LOADED ? 'show' : 'hide'

	const THEME = useTheme()

	const MD = useMediaQuery(THEME.breakpoints.down('md'))

	const MAIN_CLASS = [styles.character]
	const NAME_CLASS = [styles.characterName]
	if (!MD) {
		MAIN_CLASS.push('elementColor1-BG')
		NAME_CLASS.push('elementColor2-BG')
	}

	return (
		<>
			<div className={MAIN_CLASS.join(' ')}>
				{MD && (
					<Image
						className={IMG_CLASS}
						src={IMG_ICON}
						width={56}
						height={56}
						alt={id}
						quality={75}
						placeholder="blur"
						blurDataURL={`/_next/image?url=${IMG_ICON}&w=32&q=10`}
						onLoad={() => setLoaded(true)}
					/>
				)}
				{!MD && (
					<Image
						className={IMG_CLASS}
						src={IMG}
						layout="fill"
						objectFit="cover"
						alt={id}
						quality={75}
						objectPosition="top"
						placeholder="blur"
						blurDataURL={`/_next/image?url=${IMG}&w=32&q=10`}
						onLoad={() => setLoaded(true)}
					/>
				)}
			</div>
			<div className={NAME_CLASS.join(' ')}>
				<h2>{name}</h2>
			</div>
		</>
	)
}

Character.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

export default Character
