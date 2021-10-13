import PropTypes from 'prop-types'

import Weapon from './Weapon'
import styles from '../../styles/items.module.scss'

const Weapons = ({ weapons }) => {
	const CLASS = [styles.weapons, 'elementColor1-BG']

	return (
		<div className={CLASS.join(' ')}>
			{weapons.map(weapon => (
				<Weapon key={weapon} id={weapon} />
			))}
		</div>
	)
}

Weapons.propTypes = {
	weapons: PropTypes.instanceOf(Array).isRequired,
}

export default Weapons
