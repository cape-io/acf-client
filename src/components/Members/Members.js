import React, { Component, PropTypes } from 'react'
import masonry from 'react-masonry-component'
const Masonry = masonry(React)

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
  if (!members || !members.length) {
    return (
      <div className="container">
        <Loading message={'No members to display.'} />
      </div>
    )
  }
  return (
    <div className="container">
      <h1>Members</h1>
      <Filters {...filter} />
      <Masonry
        className={'row masonry'}
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
      >
        { members.map(member => <MembersPreview key={member.slug} {...member} />) }
      </Masonry>
      <Pager hasLess={hasLess} hasMore={hasMore} pageIndex={pageIndex} />
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
