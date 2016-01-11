import { connect } from 'react-redux'

import compact from 'lodash/array/compact'
import every from 'lodash/collection/every'
import filter from 'lodash/collection/filter'
import partial from 'lodash/function/partial'

// import merge from 'lodash/object/merge'
import values from 'lodash/object/values'
// import { replacePath } from 'redux-simple-router'

import Component from '../components/Members/Members'
import { getPagerInfo } from '../helpers/pager'
import { handleSearch } from '../redux/modules/filters'

export function filterItem(item, { fieldId, compare, value }) {
  if (!value) return true
  switch (compare) {
    case 'equal':
      return item[fieldId] === value
    case 'includes':
      return every(compact(value.split(' ')), searchTxt =>
        item[fieldId].toLowerCase().includes(searchTxt)
      )
    default:
      return true
  }
}
// Filter down items.
export function filterItems(items, filterInfo) {
  if (!filterInfo) {
    return values(items)
  }
  return filter(items, (item) => {
    return every(filterInfo, filterParams => filterItem(item, filterParams))
  })
}

function mapStateToProps(state, ownProps) {
  const {
    entities: { member },
    filters: { profile },
  } = state
  const { query } = ownProps.location || {}

  const page = query.page && parseInt(query.page, 10)

  const filterInfo = []
  if (profile.displayName && profile.displayName.value) {
    filterInfo.push({
      compare: 'includes',
      fieldId: 'displayName',
      value: profile.displayName.value,
    })
  }

  const data = filterItems(member, filterInfo)
  const { list, hasMore, hasLess, pageIndex, totalItems } = getPagerInfo(data, { page })
  return {
    members: list,
    hasLess,
    hasMore,
    pageIndex,
    totalItems,
    filterInfo: profile,
  }
}

const mapDispatchToProps = {
  handleSearch,
}

function mergeProps({ filterInfo, ...stateProps }, { handleSearch }, ownProps) {
  const searchInfo = {
    onChange: partial(handleSearch, 'profile', 'displayName'),
    value: (filterInfo && filterInfo.displayName && filterInfo.displayName.value) || '',
  }
  return Object.assign({ searchInfo }, ownProps, stateProps)
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
