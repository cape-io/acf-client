import React, { PropTypes } from 'react'

import Breadcrumb from '../Header/Breadcrumb'
import Loading from '../Loading'
import LeftSidebar from './MemberDetailLeft'
import Right from './MemberDetailRight'

function MembersDetail(props) {
  const { displayName, loading } = props
  if (loading) {
    return <Loading message={ 'Loading member details...'} />
  }
  return (
    <div>
      <Breadcrumb path={[ { text: 'Members', link: '/members' } ]} activeTitle={displayName} />
      <section>
        <div>
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
