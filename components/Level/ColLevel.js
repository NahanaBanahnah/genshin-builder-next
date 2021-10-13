import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import PropTypes from 'prop-types'
import styles from './level.module.scss'

const ColLevel = ({ phase, fade }) => {
	const CLASS = [styles.rowContainer, 'alternateChild']

	if (fade) {
		CLASS.push(styles.fade)
	}
	return (
		<div className={CLASS.join(' ')}>
			{phase.map((item, index) => (
				<>
					{index > 0 && <ArrowRightAltIcon />}
					<span>{item}</span>
				</>
			))}
		</div>
	)
}
ColLevel.defaultProps = {
	fade: false,
}
ColLevel.propTypes = {
	phase: PropTypes.instanceOf(Array).isRequired,
	fade: PropTypes.bool,
}

export default ColLevel
