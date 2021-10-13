import { useContext } from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import PropTypes from 'prop-types'
import {
	GlobalStateContext,
	GlobalDispatchContext,
} from '../../context/GlobalContextProvider'

import styles from './level.module.scss'
import LevelPreview from './LevelPreview'
import LevelDetails from './LevelDetails'

const Level = ({ local, gem, boss, common, book, weekly, buildId }) => {
	const { LEVEL_DETAILS } = useContext(GlobalStateContext)
	const dispatch = useContext(GlobalDispatchContext)

	const toggleDetailView = () => {
		dispatch({
			type: 'SET_LEVEL_DETAILS',
			payload: { [buildId]: !LEVEL_DETAILS[buildId] },
		})
	}

	const DETAILS_CLASS = [styles.levelDetails]
	const BUTTON_CLASS = ['toggleView']

	if (LEVEL_DETAILS[buildId]) {
		DETAILS_CLASS.push(styles.showing)
		BUTTON_CLASS.push(styles.showing)
	}

	const theme = useTheme()
	const xs = useMediaQuery(theme.breakpoints.down('xs'))

	return (
		<>
			<div
				className={[styles.levelPreview, 'elementColor2-BG'].join(' ')}
			>
				<div className={styles.ascendCards}>
					<LevelPreview
						local={local}
						gem={gem}
						boss={boss}
						common={common}
						book={book}
						weekly={weekly}
					/>
					{!xs && (
						<button
							type="button"
							className={BUTTON_CLASS.join(' ')}
							onClick={toggleDetailView}
						>
							<ChevronRightIcon fontSize="small" />
							{LEVEL_DETAILS[buildId]
								? 'Hide Details'
								: 'Show Details'}
						</button>
					)}
				</div>
			</div>

			<div className={DETAILS_CLASS.join(' ')}>
				{LEVEL_DETAILS[buildId] && (
					<>
						<div
							className={[
								styles.levelHeader,
								styles.ascHeader,
								'elementColor2-BG',
							].join(' ')}
						>
							Ascension Levels
						</div>
						<div
							className={[
								styles.levelHeader,
								styles.talentHeader,
								'elementColor2-BG',
							].join(' ')}
						>
							Talent Levels
						</div>
						<LevelDetails
							local={local}
							common={common}
							gem={gem}
							boss={boss}
							levelType="ascend"
							class={styles.levelDetailTable}
						/>
						<LevelDetails
							book={book}
							common={common}
							weekly={weekly}
							levelType="talent"
							class={styles.talentDetailTable}
						/>
					</>
				)}
			</div>
		</>
	)
}

Level.defaultProps = {
	boss: null,
	gem: null,
}

Level.propTypes = {
	local: PropTypes.string.isRequired,
	common: PropTypes.string.isRequired,
	weekly: PropTypes.string.isRequired,
	book: PropTypes.string.isRequired,
	buildId: PropTypes.string.isRequired,
	gem: PropTypes.string,
	boss: PropTypes.string,
}

export default Level
