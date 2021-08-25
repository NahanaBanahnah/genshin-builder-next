import '../styles/globals.scss'
import styles from '../styles/global.module.scss'

import GlobalContextProvider from '../context/GlobalContextProvider'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

import green from '@material-ui/core/colors/green'

const theme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: styles.anemo,
		},
	},
})

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalContextProvider>
				<Component {...pageProps} />
			</GlobalContextProvider>
		</ThemeProvider>
	)
}

export default MyApp
