import { connect } from 'react-redux'
import Component from '../components/Contribute'

function mapStateToProps(state, ownProps) {
  const {
    entities: { contribute },
  } = state
  const { id } = ownProps.params || {}

  return {
    slug: id,
    ...contribute,
  }
}

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(Component)
