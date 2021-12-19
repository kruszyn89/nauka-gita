import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import styles from './HtmlBlock.module.css'

export interface IHtmlBlockProps {
  html: string
}

export default function HtmlBlock({ html }: IHtmlBlockProps) {
  return (
    <Container className={styles.root}>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </Col>
      </Row>
    </Container>
  )
}
