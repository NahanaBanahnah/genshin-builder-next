import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Card from '../Card/Card'

import Leveling from '../../data/leveling'

const Ascend = ({ ...props }) => {
	const {
		defaults: { ASCEND_TEMPLATE, LEVEL_TEMPLATE },
	} = Leveling

	const theme = useTheme()
	const xs = useMediaQuery(theme.breakpoints.down('xs'))

	const CARD_ARRAY = [...ASCEND_TEMPLATE, ...LEVEL_TEMPLATE]

	return (
		<>
			{!xs && <h3>Materials</h3>}
			{CARD_ARRAY.map(({ type, rarity, obj, map }) => {
				let name = null
				let mapId = false
				const ID = props[type]

				if (obj[ID]) {
					name = ['gem', 'common', 'book'].includes(type)
						? obj[ID][rarity]
						: obj[ID].name

					mapId = map ? obj[ID].mapId : false
				}

				return (
					obj[ID] && (
						<Card
							type={type}
							key={`${name}-${rarity}-${type}`}
							id={ID}
							name={name}
							rarity={rarity}
							size="small"
							mapId={mapId}
						/>
					)
				)
			})}
		</>
	)
}

Ascend.defaultProps = {
	boss: null,
	gem: null,
}

Ascend.propTypes = {
	local: PropTypes.string.isRequired,
	common: PropTypes.string.isRequired,
	weekly: PropTypes.string.isRequired,
	book: PropTypes.string.isRequired,
	gem: PropTypes.string,
	boss: PropTypes.string,
}

export default Ascend
