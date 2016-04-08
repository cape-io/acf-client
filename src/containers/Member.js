import { connect } from 'react-redux'

import Component from '../components/Members/MemberDetail'
import { memberPage } from '../redux/select/members'

// const mapDispatchToProps = {}

export default connect(memberPage)(Component)
