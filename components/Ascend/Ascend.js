import { useState } from 'react'

import Card from '../Card/Card'

import Locals from '../../data/local'
import Boss from '../../data/boss'
import Gems from '../../data/gems'
import Commons from '../../data/common'
import AddIcon from '@material-ui/icons/Add'

const Ascend = props => {
	let local = props.ascend.local
	let boss = props.ascend.boss
	let gem = props.ascend.gem
	let common = props.ascend.common

	const [VIEW, setView] = useState(false)
	const toggleState = () => setView(value => !value)

	let cardClass = ['ascendCards']

	if (VIEW) {
		cardClass.push('on')
	}

	return (
		<div className={cardClass.join(' ')}>
			<h3 onClick={toggleState}>
				Materials <AddIcon fontSize="small" />
			</h3>
			<div className="materials">
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
		</div>
	)
}

export default Ascend
