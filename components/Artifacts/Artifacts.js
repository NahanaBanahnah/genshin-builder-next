import PropTypes from 'prop-types'

import Artifact from './Artifact'
import styles from '../../styles/items.module.scss'

const Artifacts = ({ artifact }) => {
	const CLASS = [styles.artifacts, 'elementColor1-BG']

	const ARTIFACTS = artifact.map(ele => (
		<Artifact key={ele.id} id={ele.id} qty={ele.amount} />
	))
	// const ARTIFACTS = 'test'
	return <div className={CLASS.join(' ')}>{ARTIFACTS}</div>
}

Artifacts.defaultProps = {
	artifact: [],
}

Artifacts.propTypes = {
	artifact: PropTypes.instanceOf(Array),
}

export default Artifacts
