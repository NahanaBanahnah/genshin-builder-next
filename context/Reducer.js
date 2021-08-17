const Reducer = (state, action) => {
	switch (action.type) {
		case 'SET_ARTIFACT':
			return {
				...state,
				artifact: action.payload,
			}
		case 'SET_STAT':
			return {
				...state,
				stat: action.payload,
			}
		case 'SET_CHARACTER':
			return {
				...state,
				character: action.payload,
			}
		case 'SET_FILTER':
			return {
				...state,
				filtered: action.payload,
			}
		case 'SET_BUILD':
			return {
				...state,
				build: action.payload,
			}

		default:
			return state
	}
}
export default Reducer
