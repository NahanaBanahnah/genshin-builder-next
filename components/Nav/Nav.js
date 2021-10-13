import { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Filter from './Filter'

import styles from './nav.module.scss'

const Nav = () => {
	const [SHOW_DRAWER, setDrawerView] = useState(false)

	const THEME = useTheme()
	const XS = useMediaQuery(THEME.breakpoints.down('md'))

	const toggleDrawer = () => setDrawerView(!SHOW_DRAWER)
	const DRAWER_CLASS = [styles.drawer]
	const HAMB_CLASS = [styles.icon]
	const CLOSE_CLASS = [styles.icon]

	if (SHOW_DRAWER) {
		DRAWER_CLASS.push(styles.show)
		CLOSE_CLASS.push(styles.on)
	}
	if (!SHOW_DRAWER) {
		HAMB_CLASS.push(styles.on)
	}

	return (
		<>
			<nav className={[styles.mainNav, 'topNav'].join(' ')}>
				<div className={styles.container}>
					{!XS && 'Filter'}
					{XS && (
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={toggleDrawer}
						>
							<MenuIcon className={HAMB_CLASS.join(' ')} />
							<CloseIcon className={CLOSE_CLASS.join(' ')} />
						</IconButton>
					)}
					{!XS && <Filter />}
				</div>
			</nav>
			{XS && (
				<>
					<div className={DRAWER_CLASS.join(' ')}>
						<h2>Filter</h2>
						<Filter />
					</div>
				</>
			)}
			{SHOW_DRAWER && (
				<div
					className={styles.lb}
					style={{ animation: `fadeIn .25s` }}
					onClick={toggleDrawer}
					role="button"
					tabIndex={0}
					onKeyDown={XS ? () => toggleDrawer() : null}
				/>
			)}
		</>
	)
}

export default Nav
