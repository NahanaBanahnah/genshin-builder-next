import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const Select = ({ name, options, size, label, onChangeFunction }) => (
	<div className="field">
		<Autocomplete
			id={name}
			getOptionSelected={(option, value) => option.id === value.id}
			options={options}
			getOptionLabel={option => option.name}
			style={{ width: size }}
			size="small"
			autoHighlight
			onChange={(event, value) => onChangeFunction(value)}
			renderInput={params => (
				<TextField
					inputProps={params.inputProps}
					InputProps={params.InputProps}
					InputLabelProps={params.InputLabelProps}
					size={params.size}
					disabled={params.disabled}
					fullWidth={params.fullWidth}
					id={params.id}
					name={name}
					label={label}
					variant="outlined"
				/>
			)}
		/>
	</div>
)

Select.defaultProps = {
	name: null,
}

Select.propTypes = {
	name: PropTypes.string,
	options: PropTypes.instanceOf(Array).isRequired,
	size: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	onChangeFunction: PropTypes.func.isRequired,
}

export default Select
