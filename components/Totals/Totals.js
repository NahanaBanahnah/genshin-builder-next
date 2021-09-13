import PropTypes from 'prop-types'
import styles from './totals.module.scss'

const Totals = ({ type, obj }) => {
	const RATE = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
	}
	let totals
	if (type === 'mora') {
		totals = obj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	} else {
		totals = obj.map((c, i) => {
			const CLASS = [styles.total]
			CLASS.push(styles[`${RATE[i]}-star`])

			return (
				<div key={Math.random()} className={CLASS.join(' ')}>
					{c}
				</div>
			)
		})
	}
	return <div className="ascendRowFooter">{totals}</div>
}

Totals.propTypes = {
	type: PropTypes.string.isRequired,
	obj: PropTypes.oneOfType([PropTypes.instanceOf(Array), PropTypes.number])
		.isRequired,
}

export default Totals
