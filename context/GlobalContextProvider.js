import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {
	stat: null,
	artifact: null,
}

const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState)
	return (
		<GlobalStateContext.Provider value={state}>
			<GlobalDispatchContext.Provider value={dispatch}>
				{children}
			</GlobalDispatchContext.Provider>
		</GlobalStateContext.Provider>
	)
}

export default GlobalContextProvider
