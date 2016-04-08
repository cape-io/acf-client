import isEmpty from 'lodash/isEmpty'

export function getPagerInfo(items, opts) {
  if (isEmpty(items)) {
    return {
      hasLess: false,
      hasMore: false,
      totalItems: 0,
    }
  }
  const defaultOpts = {
    resultKey: 'list',
    page: 1,
    perPage: 48,
  }
  const page = opts.page || defaultOpts.page
  const perPage = opts.perPage || defaultOpts.perPage
  const resultKey = opts.resultKey || defaultOpts.resultKey
  const totalItems = items.length
  const maxPage = Math.ceil(totalItems / perPage)
  const pageIndex = page < maxPage ? (page || 1) : maxPage
  const itemsStart = (pageIndex - 1) * perPage
  const itemsEnd = itemsStart + perPage
  const result = items.slice(itemsStart, itemsEnd)
  return {
    hasLess: pageIndex > 1,
    hasMore: pageIndex < maxPage,
    [resultKey]: result,
    maxPage,
    pageIndex,
    perPage,
    totalItems,
  }
}
