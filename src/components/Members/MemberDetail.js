import React, { PropTypes } from 'react'

import Loading from '../Loading'
import LeftSidebar from './MemberDetailLeft'
import Right from './MemberDetailRight'

function MembersDetail(props) {
  if (props.loading) {
    return <Loading message={ 'Loading member details...'} />
  }
  return (
    <div>
      <section>
        <div className="container">
          <LeftSidebar {...props} />
          <Right {...props} />
        </div>
      </section>
    </div>
  )
}

MembersDetail.propTypes = {
  displayName: PropTypes.string,
  loading: PropTypes.bool,
}

export default MembersDetail
