import React from 'react'

import Card from '../Card/Card'

import Locals from '../../data/local'
import Boss from '../../data/boss'
import Gems from '../../data/gems'
import Commons from '../../data/common'

const Ascend = props => {
	let local = props.ascend.local
	let boss = props.ascend.boss
	let gem = props.ascend.gem
	let common = props.ascend.common

	return (
		<div className="ascendCards">
			{/* <h3>Materials</h3> */}
			<Card
				type="local"
				id={local}
				name={Locals[local].name}
				rarity={1}
				size="small"
				tooltip={true}
			/>
			{boss && (
				<Card
					type="boss"
					id={boss}
					name={Boss[boss].name}
					rarity={3}
					size="small"
					tooltip={true}
				/>
			)}
			<Card
				type="gem"
				id={gem}
				name={Gems[gem][3]}
				rarity={3}
				size="small"
				tooltip={true}
			/>
			<Card
				type="common"
				id={common}
				name={Commons[common][3]}
				rarity={3}
				size="small"
				tooltip={true}
			/>
		</div>
	)
}

export default Ascend
