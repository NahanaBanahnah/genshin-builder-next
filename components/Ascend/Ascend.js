import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card/Card'

import Locals from '../../data/local'
import Boss from '../../data/boss'
import Gems from '../../data/gems'
import Commons from '../../data/common'
import Books from '../../data/books'
import Weekly from '../../data/weekly'

const Ascend = ({ local, boss, gem, common, book, weekly }) => (
	<div className="ascendCards">
		<h3>Materials</h3>
		<Card
			type="local"
			id={local}
			name={Locals[local].name}
			rarity={1}
			size="small"
			tooltip
			mapId={Locals[local].mapId}
		/>
		{boss && (
			<Card
				type="boss"
				id={boss}
				name={Boss[boss].name}
				rarity={3}
				size="small"
				tooltip
			/>
		)}
		<Card
			type="gem"
			id={gem}
			name={Gems[gem][3]}
			rarity={3}
			size="small"
			tooltip
			mapId={Gems[gem].mapId}
		/>
		<Card
			type="common"
			id={common}
			name={Commons[common][3]}
			rarity={3}
			size="small"
			mapLink
			mapId={Commons[common].mapId}
		/>
		<Card
			type="book"
			id={book}
			name={Books[book][4]}
			rarity={4}
			size="small"
			mapLink
		/>
		<Card
			type="weekly"
			id={weekly}
			name={Weekly[weekly].name}
			rarity={5}
			size="small"
			mapLink
		/>
	</div>
)

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
