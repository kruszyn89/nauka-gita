import React, { ChangeEvent, useEffect, useState } from 'react'
import { Form, NavDropdown, Spinner } from 'react-bootstrap'
import { Img } from '../elements/Img'
import Link from 'next/link'
import searchIcon from '../elements/icons/ico-search.svg'
import styles from './SearchInput.module.css'
import { urlReplace } from '../../services/urlReplace'
import { API_URL } from '../../services/wordpressApi'

interface SearchResult {
  title: string
  url: string
}

export const SearchInput = () => {
  const [show, setShow] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  )
  const [loading, setLoading] = useState<boolean>(false)

  const showDropdown = () => {
    setShow(!show)
  }
  const hideDropdown = () => {
    setShow(false)
  }
  const faqLinkReplacing = (url: string) => {
    return url
      .replace('/faq/', '/najczesciej-zadawane-pytania?pytanie=')
      .replace(/\/$/, '')
  }
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (inputValue) {
        if (inputValue.length > 3) {
          setLoading(true)
          fetch(`${API_URL}/search?search=${inputValue}`).then(
            (searchResult) => {
              searchResult.json().then((searchArray) => {
                if (searchArray.length > 0) {
                  setErrorMessage('')
                  setSearchResults(searchArray)
                } else {
                  setErrorMessage('Brak wyników')
                }
                setLoading(false)
              })
            }
          )
        } else {
          setErrorMessage('Fraza za krótka')
        }
      }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [inputValue])

  return (
    <NavDropdown
      title={
        <>
          <Img className={styles.iconHover} src={searchIcon} />
          <div className={styles.mobileTitle}>Szukaj</div>
        </>
      }
      key={`main-menu-search`}
      id="collasible-search-dropdown"
      rootCloseEvent={undefined}
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      className={`${styles.searchDropdown} dropdown-menu-left`}
    >
      <Form.Group controlId="searchInput">
        <Form.Control
          type="text"
          name="searchinput"
          placeholder="Search"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value)
          }}
          value={inputValue}
        />
      </Form.Group>
      {errorMessage && <div className={styles.placeholder}>{errorMessage}</div>}
      {searchResults && !errorMessage && (
        <div className={styles.searchContainer}>
          {loading ? (
            <div className={styles.loaderContainer}>
              <Spinner animation="border" variant="secondary" />
            </div>
          ) : (
            searchResults.map((link) => {
              return (
                <span key={`search-item-${link.title}`}>
                  <Link href={faqLinkReplacing(urlReplace(link.url))} passHref>
                    <a>{link.title}</a>
                  </Link>
                </span>
              )
            })
          )}
        </div>
      )}
    </NavDropdown>
  )
}
