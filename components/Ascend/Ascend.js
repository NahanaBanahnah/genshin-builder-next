import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card/Card'

import Locals from '../../data/local'
import Boss from '../../data/boss'
import Gems from '../../data/gems'
import Commons from '../../data/common'

const Ascend = ({ ascend }) => {
	const LOCAL = ascend.local
	const BOSS = ascend.boss
	const GEM = ascend.gem
	const COMMON = ascend.common

	return (
		<div className="ascendCards">
			<h3>Materials</h3>
			<Card
				type="local"
				id={LOCAL}
				name={Locals[LOCAL].name}
				rarity={1}
				size="small"
				tooltip
			/>
			{BOSS && (
				<Card
					type="boss"
					id={BOSS}
					name={Boss[BOSS].name}
					rarity={3}
					size="small"
					tooltip
				/>
			)}
			<Card
				type="gem"
				id={GEM}
				name={Gems[GEM][3]}
				rarity={3}
				size="small"
				tooltip
			/>
			<Card
				type="common"
				id={COMMON}
				name={Commons[COMMON][3]}
				rarity={3}
				size="small"
				tooltip
			/>
		</div>
	)
}

Ascend.propTypes = {
	ascend: PropTypes.instanceOf(Object).isRequired,
}

export default Ascend
