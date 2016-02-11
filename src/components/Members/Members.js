import React, { Component, PropTypes } from 'react'
import { Link } from 'redux-history-sync'
import classnames from 'classnames'
import masonry from 'react-masonry-component'
const Masonry = masonry(React)
import MembersPreview from './MembersPreview'
import Loading from '../Loading'
import Search from '../Search'
import Filter from '../Filter'

const masonryOptions = {
  containerStyle: {
    visibility: 'visible',
  },
}

class Members extends Component {

  render() {
    const {
      filterStates,
      members, hasLess, hasMore,
      pageIndex, totalItems, searchInfo,
    } = this.props
    if (totalItems === 0 && !searchInfo.value) {
      return (
        <div className="container">
          <Loading message={`Loading members...`} />
        </div>
      )
    }

    return (
      <div className="container">
        <h1>Members</h1>
        <div className="row">
          <div className="col-sm-6">
            <Search {...searchInfo} />
          </div>
          <div className="col-sm-6">
            <Filter {...filterStates} />
          </div>
        </div>
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
            <li className={classnames('previous', {
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
                <button className="btn btn-lg">Previous</button>
              </Link>
            </li>
            <li className={classnames('next', {
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
                <button className="btn btn-lg">Next</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

Members.propTypes = {
  filterStates: PropTypes.object,
  hasLess: PropTypes.bool,
  hasMore: PropTypes.bool,
  members: PropTypes.array,
  pageIndex: PropTypes.number,
  searchInfo: PropTypes.object,
  totalItems: PropTypes.number,
}

export default Members
