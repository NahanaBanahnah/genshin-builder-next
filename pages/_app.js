import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import '../styles/globals.scss'
import styles from '../styles/global.module.scss'

import GlobalContextProvider from '../context/GlobalContextProvider'

const theme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: styles.anemo,
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1664,
		},
	},
})

const MyApp = ({ Component }) => (
	<ThemeProvider theme={theme}>
		<GlobalContextProvider>
			<Component />
		</GlobalContextProvider>
	</ThemeProvider>
)

MyApp.propTypes = {
	Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
		.isRequired,
}

export default MyApp
