import PropTypes from 'prop-types'
import styles from './level.module.scss'

const ColCost = ({ cost, fade }) => {
	const CLASS = [styles.rowContainer, 'alternateChild']
	if (fade) {
		CLASS.push(styles.fade)
	}
	return (
		<div className={CLASS.join(' ')}>
			{cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
		</div>
	)
}
ColCost.defaultProps = {
	fade: false,
}

ColCost.propTypes = {
	cost: PropTypes.number.isRequired,
	fade: PropTypes.bool,
}

export default ColCost
