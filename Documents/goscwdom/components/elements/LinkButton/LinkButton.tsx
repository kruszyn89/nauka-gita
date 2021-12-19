import React from 'react'
import Link from 'next/link'

import styles from './LinkButton.module.css'
import { urlReplace } from '../../../services/urlReplace'
import { Img } from '../../elements/Img'

export interface LinkText {
  text?: string
  path?: string
  icon?: string
  variant?: string
  center?: boolean
  arrowReverted?: boolean
}

export default function LinkButton({
  text = '',
  path = '',
  icon,
  variant,
  center,
  arrowReverted,
}: LinkText) {
  const setStyle = variant === 'primary' ? styles.primary : styles.second
  return (
    <div
      className={`${styles.linkStyleWrapper} ${
        center ? styles.centered : null
      }`}
    >
      {icon && <Img src={icon} className={styles.iconStyle} />}
      <Link href={urlReplace(path)} passHref>
        <a className={setStyle}>{arrowReverted ? `← ${text}` : `${text} →`}</a>
      </Link>
    </div>
  )
}
