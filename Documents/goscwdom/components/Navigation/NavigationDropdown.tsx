// @ts-nocheck
import React, { useState } from 'react'
import { NavDropdown, Dropdown } from 'react-bootstrap'
import { MenuItem } from '../../services/wordpressApi'
import styles from './Navigation.module.css'
import SubMenu from './SubMenu'
import SubMenuToggle from './SubMenuToggle'
import { urlReplace } from '../../services/urlReplace'

interface DropdownProps {
  dropdownItem: MenuItem
}

const NavigationDropdown: React.FC<DropdownProps> = ({ dropdownItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const onMouseEnter = (e) => {
    setIsOpen(true)
  }

  const onMouseLeave = (e) => {
    setIsOpen(false)
  }

  return dropdownItem.children.length > 0 ? (
    <Dropdown
      onMouseOver={(e) => {
        onMouseEnter(e)
      }}
      onMouseLeave={(e) => {
        onMouseLeave(e)
      }}
      show={isOpen}
      onClick={(e) => {
        toggle(e)
      }}
    >
      <Dropdown.Toggle
        id={`nav-submenu-title-${dropdownItem.title}`}
        className="sub-menu-toggle dropdown-item"
      >
        <a href={urlReplace(dropdownItem.url)}>{dropdownItem.title}</a>
      </Dropdown.Toggle>
      <Dropdown.Menu
        as={SubMenu}
        className="submenu"
        onClick={(e: any) => {
          e.stopPropagation()
        }}
      >
        <div className={styles.submenuHeader}>{dropdownItem.title}</div>
        {dropdownItem.children.map((subchild) => {
          return (
            <Dropdown.Item
              className="nav-subitem"
              href={urlReplace(subchild.url)}
              key={`navigation-submenu-item-${subchild.title}`}
              onClick={(e: any) => {
                e.stopPropagation()
              }}
            >
              {subchild.title}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <NavDropdown.Item href={urlReplace(dropdownItem.url)}>
      {dropdownItem.title}
    </NavDropdown.Item>
  )
}

export default NavigationDropdown
