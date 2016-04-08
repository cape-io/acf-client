import { createSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import filter from 'lodash/filter'
import each from 'lodash/forEach'
import keyBy from 'lodash/keyBy'
import partRight from 'lodash/partialRight'
import sortBy from 'lodash/sortBy'

import { getPagerInfo } from '../../helpers/pager'

export const memberSelector = createSelector(
  entitySelector,
  partRight(filter, 'displayName')
)

export const membersBySlug = createSelector(
  memberSelector,
  partRight(keyBy, 'slug')
)

export const membersPager = createSelector(
  memberSelector,
  () => 1,
  () => 36,
  (members, page, perPage) => getPagerInfo(members, { page, perPage, resultKey: 'members' })
)

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
  states.unshift({ itemCount: members.length, label: 'Select...', value: '-' })
  return states
}

export const stateOptionSelector = createSelector(
  memberSelector,
  stateOptions
)

export const membersPage = createSelector(
  membersPager,
  stateOptionSelector,
  (pagerInfo, states) => ({
    ...pagerInfo,
    filter: { states },
  })
)
