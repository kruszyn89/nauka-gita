import Link from 'next/link'
import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { urlReplace } from '../../services/urlReplace'
import { MenuItem } from '../../services/wordpressApi'
import Logo from '../elements/Logo'
import plFlag from './images/pl-flag.svg'
import NavDropdownComponent from './NavDropdown'
import { Img } from '../elements/Img'

import styles from './Navigation.module.css'

export interface INavigationProps {
  menu: MenuItem[]
}

export default function Navigation({ menu }: INavigationProps) {
  return (
    <div className={styles.root}>
      <Navbar expand="lg" variant="light" sticky="top">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <Logo className={styles.logo} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ marginTop: '6px' }}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <Nav className="me-auto">
              {menu.map((element) => {
                if (element.children.length > 0) {
                  return <NavDropdownComponent element={element} />
                } else {
                  return (
                    <Nav.Link
                      key={`main-menu-item-${element.title}`}
                      href={urlReplace(element.url)}
                    >
                      {element.title}
                    </Nav.Link>
                  )
                }
              })}
              {/* <div className={styles.menuVerticalDivider}></div>
              <NavDropdown
                title={
                  <>
                    Język &nbsp;
                    <Img src={plFlag} />
                  </>
                }
                id="collasible-nav-dropdown"
                key={`main-menu-dropdown-language-picker`}
              ></NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
