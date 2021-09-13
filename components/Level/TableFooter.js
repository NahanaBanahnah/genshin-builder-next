import PropTypes from 'prop-types'
import Totals from '../Totals/Totals'

const TableFooter = ({
	type,
	totals: { mora, gem, boss, local, common, book, weekly, crown },
}) => (
	<div className="ascendRow">
		<div className="ascendRowFooter" />
		<div className="ascendRowFooter">Totals</div>
		<Totals type="mora" obj={mora} />

		{type === 'ascend' && (
			<>
				<Totals type="gem" obj={gem} />
				<Totals type="boss" obj={boss} />
				<Totals type="local" obj={local} />
				<Totals type="common" obj={common} />
			</>
		)}

		{type === 'talent' && (
			<>
				<Totals type="book" obj={book} />
				<Totals type="common" obj={common} />
				<Totals type="weekly" obj={weekly} />
				<Totals type="crown" obj={crown} />
			</>
		)}
	</div>
)

TableFooter.propTypes = {
	type: PropTypes.string.isRequired,
	totals: PropTypes.instanceOf(Object).isRequired,
}

export default TableFooter
