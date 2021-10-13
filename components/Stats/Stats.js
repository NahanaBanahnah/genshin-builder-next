import { useContext } from 'react'
import PropTypes from 'prop-types'

import Image from 'next/image'

import { GlobalStateContext } from '../../context/GlobalContextProvider'

import StatList from '../../data/stats'
import styles from './stats.module.scss'

const Stats = ({ artifact, stats, stat }) => {
	const { STAT_STATE } = useContext(GlobalStateContext)

	const TITLE = artifact ? (
		<Image
			src={`/img/artifacts/${artifact}.png`}
			alt={artifact}
			width={48}
			height={48}
		/>
	) : (
		stat
	)
	return (
		<div className={styles.stats}>
			<div className={[styles.title, 'elementColor1-BG'].join(' ')}>
				{TITLE}
			</div>
			<div>&nbsp;</div>

			{stats.map(s => {
				const STAT_CLASS = [styles.stat]
				const { name, id } = StatList.find(e => e.id === s)

				if (
					STAT_STATE &&
					STAT_STATE.stat === id &&
					STAT_STATE.type === artifact
				) {
					STAT_CLASS.push('highlight')
				}

				return (
					<div key={id} className={STAT_CLASS.join(' ')}>
						{name}
					</div>
				)
			})}
		</div>
	)
}

Stats.defaultProps = {
	artifact: null,
	stat: null,
}

Stats.propTypes = {
	artifact: PropTypes.string,
	stat: PropTypes.string,
	stats: PropTypes.instanceOf(Array).isRequired,
}

export default Stats
