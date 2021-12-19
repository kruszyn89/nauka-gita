import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './TextWithBgImage.module.css'
import Button from '../elements/Buttons'
import LinkButton from '../elements/LinkButton'
import Link from 'next/link'
import { urlReplace } from '../../services/urlReplace'

export interface TextWithBgImagesProps {
  title: string
  article: string
  button: string
  buttonPath: string
  inverted: boolean
  background: {url:string }
}

export default function TextWithBgImage(props: TextWithBgImagesProps) {
  const createMarkup = (text: string) => {
    return { __html: text }
  }
  return (
    <div
      className={styles.root}
      style={
        {
          backgroundImage: `url(${props.background.url})`
        }
      }
    >
      <Container>
        <div>
          <div className={styles.textWrapper}>
            <div className={styles.border} />
            {props.title && (
              <h3
                className="separator"
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
         </div>
      </Container>
    </div>
  )
}
