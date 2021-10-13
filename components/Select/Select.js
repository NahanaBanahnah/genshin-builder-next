import { useState, useRef, useEffect } from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Popper from '@material-ui/core/Popper'

const Select = ({
	name,
	options,
	size,
	menuSize,
	label,
	onChangeFunction,
	groupBy,
	sort,
}) => {
	const THEME = useTheme()
	const XS = useMediaQuery(THEME.breakpoints.down('xs'))
	const MD = useMediaQuery(THEME.breakpoints.down('md'))

	const MOBILE_SIZE = XS ? '100%' : '75%'
	const CLOSE_SIZE = MD ? MOBILE_SIZE : size
	const OPEN_SIZE = MD ? MOBILE_SIZE : menuSize

	const [SIZE, setSize] = useState(CLOSE_SIZE)
	const REF = useRef(null)

	const CustomPopper = props => (
		<Popper
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
			style={{ width: OPEN_SIZE }}
			placement="bottom-start"
			disablePortal
		/>
	)

	useEffect(() => {
		setSize(CLOSE_SIZE)
	}, [CLOSE_SIZE, MD])

	return (
		<div className="field" ref={REF}>
			<Autocomplete
				id={name}
				PopperComponent={CustomPopper}
				getOptionSelected={(option, value) => option.id === value.id}
				options={options.sort(
					(a, b) => -b[sort].localeCompare(a[sort])
				)}
				getOptionLabel={option => option.name}
				groupBy={groupBy ? option => option[groupBy] : null}
				size="small"
				style={{ width: SIZE, transition: 'all 0.25s ease' }}
				autoHighlight
				onChange={(event, value) => onChangeFunction(value)}
				onOpen={() => setSize(OPEN_SIZE)}
				onClose={() => setSize(CLOSE_SIZE)}
				renderInput={params => (
					<TextField
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...params}
						name={name}
						label={label}
						variant="outlined"
					/>
				)}
			/>
		</div>
	)
}

Select.defaultProps = {
	sort: 'name',
	groupBy: false,
}

Select.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.instanceOf(Array).isRequired,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	menuSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	label: PropTypes.string.isRequired,
	onChangeFunction: PropTypes.func.isRequired,
	sort: PropTypes.string,
	groupBy: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

export default Select
