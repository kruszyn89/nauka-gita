import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdvantageItem from './AdvantageItem'
import styles from './Advantages.module.css'

export interface IAdvantage {
  text: string
  description: string
  icon: IImage
}

interface IImage {
  alt: string
  url: string
}

interface IAdvantages {
  advantages: IAdvantage[]
}

const Advantages: React.FC<IAdvantages> = ({ advantages }) => {
  return (
    <div className={styles.root}>
      <Container fluid="sm">
        <Row className="justify-content-between flex-wrap">
          {advantages.map((advantage: IAdvantage) => {
            return (
              <Col
                key={`advantage-item-${advantage.text}`}
                md={4}
                sm={12}
                className="d-md-flex justify-content-center p-0"
              >
                <AdvantageItem {...advantage} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
export default Advantages
