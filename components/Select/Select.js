import * as selectStyles from './select.module.scss'

const Select = props => {
	let options = props.options.map(option => {
		return (
			<option key={option[props.title]} value={option[props.id]}>
				{option[props.title]}
			</option>
		)
	})

	return (
		<div className={selectStyles.select}>
			<select onChange={event => props.function(event)} name={props.name}>
				<option value="null">{props.label}</option>
				{options}
			</select>
			<div className={selectStyles.selectIcon}>
				<div className="material-icons">sort</div>
			</div>
		</div>
	)
}

export default Select
