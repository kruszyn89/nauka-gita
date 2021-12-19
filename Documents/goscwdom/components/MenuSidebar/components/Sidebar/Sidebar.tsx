import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import styles from './Sidebar.module.css'
import cx from 'classnames'
export interface ISidebarProps {
  menu: {
    title: string
    slug: string
  }[]
  button1url: string
}

export default function Sidebar({ menu, button1url }: ISidebarProps) {
  const { asPath } = useRouter()

  return (
    <>
      <div className={styles.root}>
        <ul>
          {menu.map((el) => (
            <li key={el.slug}>
              <Link href={el.slug} passHref>
                <a
                  className={cx({
                    [styles.active]: asPath.substring(1) == el.slug,
                  })}
                >
                  {el.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.additionalQuestions}>
        Masz pytania?{' '}
        <Link href={'/faq'}>
          <a>Sprawdź nasze F.A.Q. →</a>
        </Link>
      </div>
    </>
  )
}
