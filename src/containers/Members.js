import { connect } from 'react-redux'

import each from 'lodash/collection/each'
import get from 'lodash/object/get'
import partial from 'lodash/function/partial'

// import merge from 'lodash/object/merge'
import values from 'lodash/object/values'
// import { replacePath } from 'redux-simple-router'

import Component from '../components/Members/Members'
import { getPagerInfo } from '../helpers/pager'
import { handleSearch, update as updateFilter } from '../redux/modules/filters'
import { filterCollection } from '../utils/filter'

function mapStateToProps(state, ownProps) {
  const {
    entities: { member },
    filters: { profile },
  } = state
  const { query } = ownProps.location || {}

  const page = query.page && parseInt(query.page, 10)

  const filterInfo = []
  const searchString = get(profile, 'displayName.value', '')
  if (searchString) {
    filterInfo.push({
      compare: 'includes',
      fieldId: 'displayName',
      value: profile.displayName.value,
    })
  }
  const filterStateValue = get(profile, [ 'address.state', 'value' ], null)
  if (filterStateValue && filterStateValue !== '-') {
    filterInfo.push({
      compare: 'equal',
      fieldId: 'address.state',
      value: filterStateValue,
    })
  }
  const stateOptions = {}
  function addState(item) {
    const state = item.address && item.address.state
    if (!state) return
    if (!stateOptions[state]) {
      stateOptions[state] = { active: false, itemCount: 0, label: state, value: state }
    }
    stateOptions[state].itemCount++
  }
  if (member) {
    each(member, addState)
  }
  const data = member ? filterCollection(member, filterInfo) : []
  const { list, hasMore, hasLess, pageIndex, totalItems } = getPagerInfo(data, { page, perPage: 36 })
  return {
    members: list,
    hasLess,
    hasMore,
    pageIndex,
    totalItems,
    filterStates: {
      noFilterText: 'Select State',
      options: values(stateOptions),
      value: filterStateValue,
    },
    searchInfo: {
      value: searchString,
    },
  }
}

const mapDispatchToProps = {
  searchChange: partial(handleSearch, 'profile', 'displayName'),
  usStateChange: partial(updateFilter, 'profile', 'address.state', 'value'),
}

function mergeProps(stateProps, actions, ownProps) {
  stateProps.searchInfo.onChange = actions.searchChange
  stateProps.filterStates.onChange = actions.usStateChange
  return Object.assign({}, ownProps, stateProps)
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
