import Image from 'next/image'

import styles from './card.module.scss'
import vars from './card.module.scss'

const Card = props => {
	let qty = props.qty ? null : styles.noQty
	let cssClass = [styles.card, styles[props.size], qty]

	let width = styles[`${props.size}Px`]
	let height = Math.ceil(width * styles['ratio'])
	let cropHeight = width * styles['ratioCrop']
	let bgHeight = props.qty ? height : cropHeight
	let materialSrc =
		props.type === 'gem' || props.type === 'common'
			? `/img/${props.type}/${props.id}_${props.rarity}.webp`
			: `/img/${props.type}/${props.id}.webp`

	return (
		<div className={cssClass.join(' ')} data-tip={props.name}>
			<div className={styles.imageHolder}>
				<Image
					src={`/img/rarity/rarity_${props.rarity}.webp`}
					alt="card"
					width={width}
					height={height}
				/>
				<div className={styles.image}>
					<Image
						src={materialSrc}
						alt="card"
						width={width}
						height={width}
					/>
				</div>
			</div>

			{props.caption && <h2>{props.name}</h2>}
		</div>
	)
}

export default Card
