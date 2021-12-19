import React, { ReactElement, useState } from 'react'
import { NavDropdown } from 'react-bootstrap'
import { MenuItem } from '../../services/wordpressApi'
import NavigationDropdown from './NavigationDropdown'
import { useRouter } from 'next/router'
import { urlReplace } from '../../services/urlReplace'

interface Props {
  element: MenuItem
}

export default function NavDropdownComponent({ element }: Props): ReactElement {
  const [show, setShow] = useState(false)
  const showDropdown = () => {
    setShow(!show)
  }
  const hideDropdown = () => {
    setShow(false)
  }
  const router = useRouter()
  return (
    <NavDropdown
      title={element.title}
      id="collasible-nav-dropdown"
      key={`main-menu-dropdown-${element.title}`}
      onClick={(e) => {
        router.push(urlReplace(element.url))
      }}
      rootCloseEvent={undefined}
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      {element.children.map((child) => (
        <NavigationDropdown
          key={`dropdown-submenu-item-${child.title}`}
          dropdownItem={child}
        ></NavigationDropdown>
      ))}
    </NavDropdown>
  )
}
function useHistory() {
  throw new Error('Function not implemented.')
}
