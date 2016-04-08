import { connect } from 'react-redux'

import Component from '../components/Members/Members'
import { membersPage } from '../redux/select/members'

export default connect(membersPage)(Component)
