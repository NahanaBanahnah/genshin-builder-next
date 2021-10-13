import { useState } from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import PropTypes from 'prop-types'

import Leveling from '../../data/leveling'
import styles from './level.module.scss'
import ColLevel from './ColLevel'
import ColCost from './ColCost'
import ColMaterial from './ColMaterial'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'

const LevelDetails = ({ ...props }) => {
	const {
		LOCALS,
		BOSS,
		GEMS,
		COMMONS,
		BOOKS,
		WEEKLY,
		levels: { ASCEND_LEVEL, TALENT_LEVEL },
	} = Leveling
	const OBJS = {
		local: LOCALS,
		boss: BOSS,
		gem: GEMS,
		common: COMMONS,
		book: BOOKS,
		weekly: WEEKLY,
	}

	const LEVEL_ARRAY =
		props.levelType === 'ascend' ? ASCEND_LEVEL : TALENT_LEVEL

	const ARRAY_QTY = props.levelType === 'ascend' ? 5 : 8

	const [ROW_STATE, setRow] = useState(new Array(ARRAY_QTY).fill(false))
	const TOTALS = {
		gem: [],
		local: [],
		common: [],
		boss: [],
		book: [],
		weekly: [],
		crown: [],
		mora: 0,
	}

	const setThisRow = row => {
		const NEW_VIEW = !ROW_STATE[row]
		const ROWS = ROW_STATE.map((k, i) => {
			let show
			if (NEW_VIEW) {
				show = i <= row ? NEW_VIEW : !NEW_VIEW
			}
			if (!NEW_VIEW) {
				show = i >= row ? NEW_VIEW : !NEW_VIEW
			}
			return show
		})

		setRow(ROWS)
	}

	const JSX = LEVEL_ARRAY.map(({ phase, cost, material }, key) => {
		// ====== Holder for jsx
		const RTN = []
		if (!ROW_STATE[key]) {
			TOTALS.mora += cost
		}

		const VIEW_BUTTON = (
			<div
				className={[
					styles.view,
					styles.rowContainer,
					styles.alternateChild,
				].join(' ')}
				onClick={() => setThisRow(key)}
				onKeyPress={() => setThisRow(key)}
				role="button"
				tabIndex="0"
			>
				{ROW_STATE[key] ? (
					<VisibilityOffIcon fontSize="small" />
				) : (
					<VisibilityIcon fontSize="small" />
				)}
			</div>
		)

		// ====== Simple Rows
		RTN.push(VIEW_BUTTON)
		RTN.push(<ColLevel phase={phase} fade={ROW_STATE[key]} />)
		RTN.push(<ColCost cost={cost} fade={ROW_STATE[key]} />)

		// ====== Loop the different materials
		const MATERIAL = material.map(({ type, rarity, qty }) => {
			// is this row on? does it have a value yet?
			if (!ROW_STATE[key]) {
				if (qty) {
					TOTALS[type][rarity] = TOTALS[type][rarity]
						? TOTALS[type][rarity] + qty
						: 0 + qty
				}
			}

			return (
				<ColMaterial
					key={props[type]}
					id={props[type]}
					obj={OBJS}
					type={type}
					rarity={rarity}
					qty={qty}
					fade={ROW_STATE[key]}
				/>
			)
		})

		RTN.push(MATERIAL)

		return RTN
	})

	return (
		<div className={props.class}>
			<TableHeader type={props.levelType} />
			<div className={[styles.ascendRow, 'alternate'].join(' ')}>
				{JSX}
			</div>
			<TableFooter type={props.levelType} totals={TOTALS} />
		</div>
	)
}

LevelDetails.defaultProps = {
	class: null,
}

LevelDetails.propTypes = {
	levelType: PropTypes.string.isRequired,
	class: PropTypes.string,
}

export default LevelDetails
