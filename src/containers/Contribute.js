import { connect } from 'react-redux'
import partial from 'lodash/partial'
import Component from '../components/Contribution'

import { getFilter, update } from '../redux/modules/filter'

function mapStateToProps(state) {
  return {
    interval: getFilter(state, [ 'contribute', 'interval', 'value' ]),
  }
}

const mapDispatchToProps = {
  setFeature: partial(update, 'contribute', 'interval', 'value'),
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
