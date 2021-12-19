import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './TextComponent.module.css'

export interface TextComponentProps {
  text: string
}

export default function TextComponent(props: TextComponentProps) {
  const createMarkup = (text: string) => {
    return { __html: text }
  }

  return (
    <Container className={styles.container}>
      <div dangerouslySetInnerHTML={createMarkup(props.text)} />
    </Container>
  )
}
