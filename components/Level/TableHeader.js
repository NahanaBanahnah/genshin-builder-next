import PropTypes from 'prop-types'
import styles from './level.module.scss'

const TableHeader = ({ type }) => (
	<div className={styles.ascendRowHeader}>
		<div />
		<div>Level</div>
		<div>Mora</div>
		{type === 'ascend' && (
			<>
				<div>Ascendtion</div>
				<div>Boss</div>
				<div>Local</div>
				<div>Common</div>
			</>
		)}
		{type === 'talent' && (
			<>
				<div>Book</div>
				<div>Common</div>
				<div>Weekly</div>
				<div>Crown</div>
			</>
		)}
	</div>
)

TableHeader.propTypes = {
	type: PropTypes.string.isRequired,
}

export default TableHeader
