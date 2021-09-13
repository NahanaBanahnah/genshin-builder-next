import PropTypes from 'prop-types'
import Card from '../Card/Card'

const ColMaterial = ({ id, type, rarity, obj, qty, fade }) => {
	const CLASS = ['rowContainer']

	if (fade) {
		CLASS.push('fade')
	}
	let name
	if (id) {
		name = ['gem', 'common', 'book'].includes(type)
			? obj[type][id][rarity]
			: obj[type][id].name
	}

	const thisID = type === 'crown' ? 'crown_of_insight' : id

	if (type === 'crown') {
		name = 'Crown of Insight'
	}
	return (
		<div key={`${type}-${name}-${rarity}`} className={CLASS.join(' ')}>
			{qty && (
				<Card
					type={type}
					id={thisID}
					name={name}
					rarity={rarity}
					size="med"
					qty={qty}
				/>
			)}
		</div>
	)
}

ColMaterial.defaultProps = {
	id: null,
	fade: false,
	rarity: null,
}

ColMaterial.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string.isRequired,
	rarity: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	obj: PropTypes.instanceOf(Object).isRequired,
	qty: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
	fade: PropTypes.bool,
}

export default ColMaterial
