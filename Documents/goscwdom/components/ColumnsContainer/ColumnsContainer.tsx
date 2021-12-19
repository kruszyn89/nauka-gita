import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ComposerBlocks from '../ComposerBlocks'
import styles from './ColumnsContainer.module.css'
import cx from 'classnames'

export interface IMenuSidebarProps {
  columns: any[]
  menu: any[]
}

export default function MenuSidebar(props: IMenuSidebarProps) {
  const { columns } = props
  const twoFirstColumns = columns.length > 2 ? columns.slice(0, 1) : columns
  return (
    <Container>
      <Row className={cx(styles.container, 'column-soldent')}>
        <Col xs={{ order: 'first', span: 12 }} md={{ span: 5 }}>
          <ComposerBlocks data={twoFirstColumns[0].innerBlocks} />
        </Col>
        <Col xs={{ order: 'first', span: 12 }} md={{ span: 6, offset: 1 }}>
          <ComposerBlocks data={twoFirstColumns[1].innerBlocks} />
        </Col>
      </Row>
    </Container>
  )
}
