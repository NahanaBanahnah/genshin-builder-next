import { useState } from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'

import Image from 'next/image'
import styles from './card.module.scss'

const Card = ({ qty, size, type, id, rarity, name, caption }) => {
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
	const cssClass = [styles.card, styles[size], QTY]

	const width = styles[`${size}Px`]
	const materialSrc =
		type === 'gem' || type === 'common'
			? `/img/${type}/${id}_${rarity}.webp`
			: `/img/${type}/${id}.webp`

	return (
		<Tooltip
			title={name}
			placement="bottom"
			TransitionComponent={Zoom}
			classes={useStylesBootstrap()}
			arrow
		>
			<div className={cssClass.join(' ')} data-tip={name}>
				<div className={styles.imageHolder}>
					<Image
						src={`/img/rarity/rarity_${rarity}.webp`}
						alt="card"
						width={width}
						height={width}
						onLoad={() => setBgLoaded(true)}
					/>
					<div className={styles.image}>
						<Image
							src={materialSrc}
							alt="card"
							width={width}
							height={width}
							onLoad={() => setLoaded(true)}
						/>
					</div>
				</div>

				{caption && <h2>{name}</h2>}
			</div>
		</Tooltip>
	)
}

Card.defaultProps = {
	caption: false,
	qty: null,
}

Card.propTypes = {
	qty: PropTypes.number,
	size: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	caption: PropTypes.bool,
	rarity: PropTypes.number.isRequired,
}

export default Card
