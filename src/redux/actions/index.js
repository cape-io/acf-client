import { CALL_API, Schemas } from '../middleware/api'
import isEmpty from 'lodash/isEmpty'

export const MEMBERS_REQUEST = 'MEMBERS_REQUEST'
export const MEMBERS_SUCCESS = 'MEMBERS_SUCCESS'
export const MEMBERS_FAILURE = 'MEMBERS_FAILURE'

// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchMembers() {
  return {
    [CALL_API]: {
      types: [ MEMBERS_REQUEST, MEMBERS_SUCCESS, MEMBERS_FAILURE ],
      api: 'cape',
      endpoint: 'acf/profiles',
      schema: Schemas.MEMBER_ARRAY,
    },
  }
}

// Triggers fetch on member profiles.
// Bails out if page is cached and user didn’t specifically request next page.
// Relies on Redux Thunk middleware.
export function loadMembers() {
  return (dispatch, getState) => {
    const loaded = !isEmpty(getState().entities.member)
    if (loaded) return null
    return dispatch(fetchMembers())
  }
}
