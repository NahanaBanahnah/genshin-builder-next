import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

import * as selectStyles from './select.module.scss'

const Select = props => {
	return (
		<div className="field">
			<Autocomplete
				id={props.name}
				getOptionSelected={(option, value) => option.id === value.id}
				options={props.options}
				getOptionLabel={option => option.name}
				style={{ width: props.size }}
				size="small"
				autoHighlight
				onChange={(event, value) => props.function(value)}
				renderInput={params => (
					<TextField
						{...params}
						name={props.name}
						label={props.label}
						variant="outlined"
					/>
				)}
			/>
		</div>
	)
}

export default Select
