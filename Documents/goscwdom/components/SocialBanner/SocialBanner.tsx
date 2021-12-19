import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './SocialBanners.module.css'
import { Img } from '../elements/Img'

interface SocialLink {
  link: string
  icon: Image
}

interface Image {
  alt: string
  url: string
}

interface ISocialBanner {
  title: string
  hashtags: string
  images: Image[]
  socialLinks: SocialLink[]
}

const SocialBanner: React.FC<ISocialBanner> = ({ images, ...rest }) => {
  const [image1, image2, ...restImg] = images
  return (
    <div className={styles.root}>
      <Container fluid="md" className={styles.container}>
        <Row className={styles.photoRow}>
          <Col lg="auto" md={12} className={styles.photoCol}>
            <div className={styles.flex}>
              {[image1, image2].map((image, i) => {
                return (
                  <Img
                    key={`social-mosaic-${i}`}
                    src={image.url}
                    height={300}
                    width={300}
                  />
                )
              })}
            </div>
          </Col>
          {Object.keys(restImg)
            .filter((img: string) => {
              return Number(img) % 2 === 0
            })
            .map((count: string) => {
              const index: number = Number(count) + 2
              return (
                <Col
                  key={`social-mosaic-column-${count}`}
                  lg="auto"
                  md={12}
                  className={styles.photoCol}
                >
                  <div className={styles.flex}>
                    <Img
                      key={`social-mosaic-${index}`}
                      src={images[index].url}
                      height={300}
                      width={300}
                    />
                    {images[index + 1] && (
                      <Img
                        src={images[index + 1].url}
                        key={`social-mosaic-${index + 1}`}
                        height={300}
                        width={300}
                      />
                    )}
                  </div>
                </Col>
              )
            })}
        </Row>
      </Container>
    </div>
  )
}

export default SocialBanner
