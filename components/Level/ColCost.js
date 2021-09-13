import PropTypes from 'prop-types'

const ColCost = ({ cost, fade }) => {
	const CLASS = ['rowContainer']
	if (fade) {
		CLASS.push('fade')
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
