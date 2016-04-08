import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import immutable from 'seamless-immutable'
import filter from 'lodash/filter'
import each from 'lodash/forEach'
import get from 'lodash/get'
import keyBy from 'lodash/keyBy'
import mapValues from 'lodash/mapValues'
import partRight from 'lodash/partialRight'
import sortBy from 'lodash/sortBy'

import { getPagerInfo } from '../../helpers/pager'
import { filterCollection } from '../../utils/filter'

export const memberSelector = createSelector(
  entitySelector,
  partRight(filter, 'displayName')
)

export const membersBySlug = createSelector(
  memberSelector,
  partRight(keyBy, 'slug')
)
function memberIdSelector(state, props) {
  return props.route.params.id
}
function selectMemberDetails(memberIndex, slug) {
  console.log(slug)
  if (memberIndex[slug]) {
    return memberIndex[slug].merge({ slug, twitter: null })
  }
  return { loading: true, slug }
}
export const memberPage = createSelector(
  membersBySlug,
  memberIdSelector,
  selectMemberDetails
)
export const filterInfo = immutable({
  prefix: 'memberFilters',
  filter: {
    name: {
      compare: 'includes',
      path: 'displayName',
    },
    states: {
      compare: 'equal',
      nilValue: '-',
      path: 'address.state',
    },
  },
})
function stateOptions(members) {
  const stateIndex = {}
  function addState(item) {
    const state = item.address && item.address.state
    if (!state) return
    if (!stateIndex[state]) {
      stateIndex[state] = { itemCount: 0, label: state, value: state }
    }
    stateIndex[state].itemCount++
  }
  each(members, addState)
  const states = sortBy(stateIndex, 'label')
  states.unshift({
    itemCount: members.length,
    label: 'Select...',
    value: filterInfo.filter.states.nilValue,
  })
  return states
}

export const stateOptionSelector = createSelector(
  memberSelector,
  stateOptions
)

function filterVal(filterState, filterItem, key) {
  const fieldState = get(filterState, key)
  if (!fieldState || !fieldState.value || fieldState.value === filterItem.nilValue) return null
  return fieldState.value
}
export function getFilters(filterState) {
  const filters = mapValues(filterInfo.filter, (filterItem, key) =>
    filterItem.set('value', filterVal(filterState, filterItem, key))
  )
  return filter(filters, item => item.value !== null)
}
export const filterSelector = createSelector(
  state => state.form[filterInfo.prefix],
  getFilters
)

export const filteredMembers = createSelector(
  memberSelector,
  filterSelector,
  filterCollection
)
export function selectPageIndex(state, props) {
  return props.route.query && props.route.query.page || 1
}
export const membersPager = createSelector(
  filteredMembers,
  selectPageIndex,
  () => 36,
  (members, page, perPage) => getPagerInfo(members, { page, perPage, resultKey: 'members' })
)

function buildFilter(opts) {
  return filterInfo.setIn([ 'filter', 'states', 'options' ], opts)
}
export const membersPage = createSelector(
  membersPager,
  stateOptionSelector,
  (pagerInfo, states) => ({
    ...pagerInfo,
    filter: buildFilter(states),
  })
)
