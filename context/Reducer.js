const Reducer = (state, action) => {
	switch (action.type) {
		case 'SET_ARTIFACT':
			return {
				...state,
				ARTIFACT_STATE: action.payload,
			}
		case 'SET_STAT':
			return {
				...state,
				STAT_STATE: action.payload,
			}
		case 'SET_CHARACTER':
			return {
				...state,
				CHARACTER_STATE: action.payload,
			}
		case 'SET_FILTER':
			return {
				...state,
				FILTERED: action.payload,
			}
		case 'SET_BUILD':
			return {
				...state,
				BUILD: action.payload,
			}

		default:
			return state
	}
}
export default Reducer
