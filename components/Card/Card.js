import { useState } from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'

import Image from 'next/image'
import styles from './card.module.scss'

const Card = ({ qty, size, type, id, rarity, name, caption, mapId }) => {
	const useStylesBootstrap = makeStyles(theme => ({
		arrow: {
			color: theme.palette.grey[900],
		},
		tooltip: {
			backgroundColor: theme.palette.grey[900],
			fontSize: 12,
			padding: 8,
			opacity: 0.9,
			fontFamily: 'Sora',
		},
	}))

	const [, setBgLoaded] = useState(false)
	const [, setLoaded] = useState(false)

	const QTY = qty ? null : styles.noQty
	const CSS_CLASS = [styles.card, styles[size], QTY]
	const MAP_URL =
		'https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=en-us#/map/2?shown_types='

	const WIDTH = styles[`${size}Px`]
	const MATERIAL_SRC =
		type === 'gem' || type === 'common'
			? `/img/${type}/${id}_${rarity}.webp`
			: `/img/${type}/${id}.webp`

	const CARD = (
		<div className={CSS_CLASS.join(' ')} data-tip={name}>
			<div className={styles.imageHolder}>
				<Image
					src={`/img/rarity/rarity_${rarity}.webp`}
					alt="card"
					width={WIDTH}
					height={WIDTH}
					onLoad={() => setBgLoaded(true)}
				/>
				<div className={styles.image}>
					<Image
						src={MATERIAL_SRC}
						alt="card"
						width={WIDTH}
						height={WIDTH}
						onLoad={() => setLoaded(true)}
					/>
				</div>
			</div>

			{caption && <h2>{name}</h2>}
		</div>
	)

	const TYPE_LINK = Array.isArray(mapId) ? mapId.join(',') : mapId

	return (
		<Tooltip
			title={name}
			placement="bottom"
			TransitionComponent={Zoom}
			classes={useStylesBootstrap()}
			arrow
		>
			{mapId ? (
				<a
					href={`${MAP_URL}${TYPE_LINK}&center=219.00,-626.00&zoom=-2.00`}
					target="_new"
				>
					{CARD}
				</a>
			) : (
				CARD
			)}
		</Tooltip>
	)
}

Card.defaultProps = {
	caption: false,
	qty: null,
	mapId: false,
}

Card.propTypes = {
	qty: PropTypes.number,
	size: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	caption: PropTypes.bool,
	rarity: PropTypes.number.isRequired,
	mapId: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.bool,
		PropTypes.instanceOf(Array),
	]),
}

export default Card
