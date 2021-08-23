import React from 'react'
import Artifact from './Artifact'

const Artifacts = props => {
	let artifacts = props.artifact.map(artifact => {
		return (
			<Artifact
				key={artifact.id}
				id={artifact.id}
				qty={artifact.amount}
			/>
		)
	})
	return <div className="artifacts">{artifacts}</div>
}

export default Artifacts
