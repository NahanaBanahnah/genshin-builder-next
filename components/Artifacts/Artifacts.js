import PropTypes from 'prop-types'
import Artifact from './Artifact'

const Artifacts = ({ artifact }) => {
	const ARTIFACTS = artifact.map(ele => (
		<Artifact key={ele.id} id={ele.id} qty={ele.amount} />
	))
	return <div className="artifacts">{ARTIFACTS}</div>
}

Artifacts.propTypes = {
	artifact: PropTypes.instanceOf(Array).isRequired,
}

export default Artifacts
