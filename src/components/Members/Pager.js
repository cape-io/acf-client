import React, { PropTypes } from 'react'
import { Link } from 'redux-history-sync'
import classnames from 'classnames'

function PagerButton({ disabled, text }) {
  return <button className={classnames('btn btn-lg', { disabled })}>{text}</button>
}
PagerButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

function NavItem({ disabled, pageIndex, text }) {
  if (disabled) return <PagerButton disabled text={text} />
  return (
    <Link to={`/members?page=${pageIndex}`}>
      <PagerButton text={text} />
    </Link>
  )
}
NavItem.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  pageIndex: PropTypes.number.isRequired,
}

function Pager({ hasMore, hasLess, pageIndex }) {
  return (
    <nav>
      <ul className="pager">
        <li className={classnames('previous', { disabled: !hasLess })}>
          <NavItem pageIndex={pageIndex - 1} disabled={!hasLess} text="Previous" />
        </li>
        <li className={classnames('next', { disabled: !hasMore })}>
          <NavItem pageIndex={pageIndex + 1} disabled={!hasMore} text="Next" />
        </li>
      </ul>
    </nav>
  )
}
Pager.propTypes = {
  hasLess: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  pageIndex: PropTypes.number.isRequired,
}

export default Pager
