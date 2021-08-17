import { useContext } from 'react'
import Image from 'next/image'

import { GlobalStateContext } from '../../context/GlobalContextProvider'

import StatList from '../../data/stats'

const Stats = props => {
	const STATE = useContext(GlobalStateContext)

	let title = props.artifact ? (
		<Image
			src={`/img/artifacts/${props.artifact}.png`}
			alt={props.artifact}
			width={48}
			height={48}
		/>
	) : (
		props.stat
	)
	return (
		<div className="stats">
			<div className="title">{title}</div>
			<div>&nbsp;</div>

			{props.stats.map(stat => {
				let statClass = ['stat']
				let index = StatList.find(e => e.id === stat)
				let name = index ? index.name : '---'

				if (
					STATE.stat &&
					STATE.stat.stat === index.id &&
					STATE.stat.type === props.artifact
				) {
					statClass.push('highlight')
				}

				return (
					<div key={index.id} className={statClass.join(' ')}>
						{name}
					</div>
				)
			})}
		</div>
	)
}

export default Stats