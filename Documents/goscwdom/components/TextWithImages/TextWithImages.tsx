import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './TextWithImages.module.css'
import Button from '../elements/Buttons'
import LinkButton from '../elements/LinkButton'
import Link from 'next/link'
import { urlReplace } from '../../services/urlReplace'
import { Img } from '../elements/Img'
import Flower from './images/flowers.svg';
import Leaves from './images/leaves.svg';

export interface TextWithImagesProps {
  title: string
  article: string
  button: string
  buttonPath: string
  inverted: boolean
  image: { url: string }
  image2: { url: string }
  backgroundTheme: string
}

export default function TextWithImages(props: TextWithImagesProps) {
  const createMarkup = (text: string) => {
    return { __html: text }
  }
  return (
    <div
      className={styles.root}
      style={{
        backgroundColor: `${props.backgroundTheme}`,
      }}
    >
      <Container>
        <div
          className={props.inverted ? styles.wrapper : styles.wrapperInverted}
        >
          <div className={styles.textWrapper}>
            {props.title && (
              <h2
                className={
                  props.backgroundTheme === '#2e394d'
                    ? 'inverted separator'
                    : 'separator'
                }
                dangerouslySetInnerHTML={{ __html: props.title }}
              />
            )}
            <div
              className={styles.article}
              dangerouslySetInnerHTML={createMarkup(props.article)}
            />
            <div className={styles.buttonWrapper}>
              {props.button && (
                <Link href={urlReplace(props.buttonPath || '')} passHref>
                  <a>
                    <Button text={props.button} />
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div className={styles.imagesWrapper}>
          {props.image && (
              <div className={styles.smallImage}>
                <Img src={props.image.url} className={styles.mainImage} />
              </div>
            )}
          {props.image2 && (
              <div className={styles.bigImage}>
                <Img src={props.image2.url} className={styles.mainImage} />
                <div className={styles.borderImage}/>
              </div>
            )}
          </div>
        </div>
      </Container>
      <div className={props.inverted ? styles.bg : styles.bgInverted} />
      <div className={props.inverted ? styles.flowerWrapper : styles.flowerWrapperInverted}>
        <img src={Flower} />
      </div>
      <div className={props.inverted ? styles.leavesWrapper : styles.leavesWrapperInverted}>
        <img src={Leaves} />
      </div>
    </div>
  )
}
