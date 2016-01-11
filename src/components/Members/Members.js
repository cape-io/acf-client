import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import masonry from 'react-masonry-component'
const Masonry = masonry(React)
import MembersPreview from './MembersPreview'
import Loading from '../Loading'
import Search from '../Search'

const masonryOptions = {
  containerStyle: {
    visibility: 'visible',
  },
}

class Members extends Component {

  render() {
    const { members, hasLess, hasMore, pageIndex, totalItems, searchInfo } = this.props
    if (totalItems === 0) {
      return (
        <div className="container">
          <Loading message={`Loading members...`} />
        </div>
      )
    }

    return (
      <div className="container">
        <h1>Members</h1>
        <Search {...searchInfo} />
        <Masonry
          className={'row masonry'}
          elementType={'div'}
          options={masonryOptions}
          disableImagesLoaded={false}
        >
          {
            members.map((member) => {
              return (
                <MembersPreview key={member.slug} {...member} />
              )
            })
          }
        </Masonry>
        <nav>
          <ul className="pager">
            <li className={classnames({
              previous: true,
              disabled: !hasLess,
            })}>
              <Link
                to={`/members?page=${pageIndex - 1}`}
                onClick={(evt) => {
                  if (!hasLess) {
                    evt.preventDefault()
                    return false
                  }
                }}
              >
                Previous
              </Link>
            </li>
            <li className={classnames({
              next: true,
              disabled: !hasMore,
            })}>
              <Link
                to={`/members?page=${pageIndex + 1}`}
                onClick={(evt) => {
                  if (!hasMore) {
                    evt.preventDefault()
                    return false
                  }
                }}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

Members.propTypes = {
  hasLess: PropTypes.bool,
  hasMore: PropTypes.bool,
  members: PropTypes.array,
  pageIndex: PropTypes.number,
  searchInfo: PropTypes.object,
  totalItems: PropTypes.number,
  updateFilters: PropTypes.func.isRequired,
}

export default Members
