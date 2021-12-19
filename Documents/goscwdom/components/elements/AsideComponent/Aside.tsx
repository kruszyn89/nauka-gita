import React from 'react'
import styles from './Aside.module.css'
import quotes from '../icons/quotes.svg'
import { Img } from '../../elements/Img'

export interface AsideProps {
  text: string
}

export default function Aside(props: AsideProps) {
  const createMarkup = (text: string) => {
    return { __html: text }
  }
  return (
    <div className={styles.wrapper}>
      <Img src={quotes} />
      <div dangerouslySetInnerHTML={createMarkup(props.text)} />
    </div>
  )
}
