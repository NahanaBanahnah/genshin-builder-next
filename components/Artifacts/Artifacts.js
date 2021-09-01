import PropTypes from 'prop-types'
import Artifact from './Artifact'

const Artifacts = ({ artifact }) => {
	const ARTIFACTS = artifact.map(ele => (
		<Artifact key={ele.id} id={ele.id} qty={ele.amount} />
	))
	// const ARTIFACTS = 'test'
	return <div className="artifacts">{ARTIFACTS}</div>
}

Artifacts.defaultProps = {
	artifact: [],
}

Artifacts.propTypes = {
	artifact: PropTypes.instanceOf(Array),
}

export default Artifacts
