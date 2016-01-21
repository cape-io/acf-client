import React from 'react'
import { Link } from 'react-router'

function NavbarLink({ children, className, component, href, to }) {
  const Comp = component || Link

  let Linkelement = (
    <Comp to={to} className={className} activeStyle={{
      color: '#A94545',
    }}>
      {children}
    </Comp>
  )
  if (href) {
    Linkelement = (
      <a href={href}>
        {children}
      </a>
    )
  }

  return Linkelement
}


export default NavbarLink
