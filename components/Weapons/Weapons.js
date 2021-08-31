import PropTypes from 'prop-types'
import Weapon from './Weapon'

const Weapons = ({ weapons }) => (
	<div className="weapons">
		{weapons.map(weapon => (
			<Weapon key={weapon} id={weapon} />
		))}
	</div>
)

Weapons.propTypes = {
	weapons: PropTypes.instanceOf(Array).isRequired,
}

export default Weapons
