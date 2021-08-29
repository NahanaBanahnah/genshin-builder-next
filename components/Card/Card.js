import { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'

import Image from 'next/image'

import styles from './card.module.scss'
import vars from './card.module.scss'

const Card = props => {
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

	const classes = useStylesBootstrap()

	const TOOLTIP_OPTIONS = {
		placement: 'bottom',
		TransitionComponent: Zoom,
		arrow: true,
		classes: classes,
	}

	const [BG_LOADED, setBgLoaded] = useState(false)
	const [LOADED, setLoaded] = useState(false)

	let bgClass = BG_LOADED ? 'show' : 'hide'
	let imgClass = LOADED ? 'show' : 'hide'

	let qty = props.qty ? null : styles.noQty
	let cssClass = [styles.card, styles[props.size], qty]

	let width = styles[`${props.size}Px`]
	let materialSrc =
		props.type === 'gem' || props.type === 'common'
			? `/img/${props.type}/${props.id}_${props.rarity}.webp`
			: `/img/${props.type}/${props.id}.webp`

	return (
		<Tooltip title={props.name} {...TOOLTIP_OPTIONS}>
			<div className={cssClass.join(' ')} data-tip={props.name}>
				<div className={styles.imageHolder}>
					<Image
						src={`/img/rarity/rarity_${props.rarity}.webp`}
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

				{props.caption && <h2>{props.name}</h2>}
			</div>
		</Tooltip>
	)
}

export default Card
