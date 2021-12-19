import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Img } from '../elements/Img'
import Lightbox from 'react-image-lightbox'

import styles from './GalleryGrid.module.css'

interface Image {
  alt: string
  url: string
}

interface GalleryElements {
  image: Image
  thumbnail: Image
  width: string
}

export interface IGalleryGridProps {
  title: string
  gallery: GalleryElements[]
}

export default function GalleryGrid(props: IGalleryGridProps) {
  const { title, gallery } = props
  const [isLightBoxOpen, setIsLightBoxOpen] = React.useState(false)
  const [photoIndex, setPhotoIndex] = React.useState(0)

  const calcWidth = (proportion: string): string => {
    if (proportion.includes('/')) {
      const [numerator, denominator, ...rest] = proportion.split('/')
      return (Number(numerator) / Number(denominator)) * 100 + '%'
    }
    return '100%'
  }
  return (
    <Container className={styles.noMargin}>
      <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
      <div className={styles.galleryContainer}>
        {gallery.map((galleryImage, i) => {
          return (
            <div
              className={styles.galleryImgContainer}
              style={{ width: calcWidth(galleryImage.width) }}
            >
              <Img
                className={styles.galleryImg}
                src={galleryImage.thumbnail.url}
                key={`gallery-grid-mosaic-${i}`}
              />
              <div
                className={styles.hoverOverlay}
                onClick={() => {
                  setPhotoIndex(i)
                  setIsLightBoxOpen(true)
                }}
              ></div>
            </div>
          )
        })}
      </div>

      {isLightBoxOpen && (
        <Lightbox
          mainSrc={gallery[photoIndex].image.url}
          nextSrc={gallery[(photoIndex + 1) % gallery.length].image.url}
          prevSrc={
            gallery[(photoIndex + gallery.length - 1) % gallery.length].image
              .url
          }
          onCloseRequest={() => setIsLightBoxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % gallery.length)
          }
          enableZoom={false}
        />
      )}
    </Container>
  )
}
