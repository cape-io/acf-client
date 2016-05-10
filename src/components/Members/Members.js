import React, { PropTypes } from 'react'
import Masonry from 'react-masonry-component'

import MembersPreview from './MembersPreview'
import Loading from '../Loading'
import Filters from './Filters'
import Pager from './Pager'

const masonryOptions = {
  containerStyle: {
    visibility: 'visible',
  },
}
// const memberSince = since && `Member since: ${since.split(' ')[0]}`

function Members(props) {
  const { members, hasLess, hasMore, pageIndex, filter } = props
  return (
    <div>
      <h2>Member Directory</h2>
      <Filters {...filter} />
      {members && members.length &&
        <div>
          <Masonry
            className={'row masonry'}
            elementType={'div'}
            options={masonryOptions}
            disableImagesLoaded={false}
          >
            {members.map(member => <MembersPreview key={member.slug} {...member} />)}
          </Masonry>
          <Pager hasLess={hasLess} hasMore={hasMore} pageIndex={pageIndex} />
        </div>
      }
      {!members || !members.length &&
        <div className="container">
          <Loading message={'No members to display.'} />
        </div>
      }
    </div>
  )
}

Members.propTypes = {
  filter: PropTypes.object,
  hasLess: PropTypes.bool,
  hasMore: PropTypes.bool,
  members: PropTypes.array,
  pageIndex: PropTypes.number,
  searchInfo: PropTypes.object,
  totalItems: PropTypes.number,
}

export default Members
