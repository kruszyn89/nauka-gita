import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ComposerBlocks from '../ComposerBlocks'
import Sidebar from './components/Sidebar'
import styles from './MenuSidebar.module.css'

export interface IMenuSidebarProps {
  button1: string
  button1url: string
  button2: string
  button2url: string
  blocks: any[]

  menu: any[]
}

export default function MenuSidebar(props: IMenuSidebarProps) {
  return (
    <Container className={styles.root}>
      <Row>
        <Col className={styles.breadcrumbs}></Col>
      </Row>
      <Row>
        <Col xs={{ order: 'first' }} lg={{ span: 3 }}>
          <div className={styles.sidebar}>
            <Sidebar button1url={props.button1url} menu={props.menu} />
          </div>
        </Col>
        <Col lg={8} className={styles.wrapper}>
          <ComposerBlocks data={props.blocks} />
        </Col>
      </Row>
    </Container>
  )
}
