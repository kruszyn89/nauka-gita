import React from 'react'
import Image from 'next/image'
import styles from './CallToActionComponent.module.css'
import BlueButton from '../Buttons'
import { urlReplace } from '../../../services/urlReplace'
import Link from 'next/link'
import { Img } from '../../elements/Img'

export interface CallToAction {
  header: string
  phoneNumber: string
  adress: string
  buttonText: string
  buttonPath: string
  emailAdress: string
  mobileImage: { url: string }
  desktopImage: { url: string }
}

export default function CallToActionComponent(props: CallToAction) {
  const createMarkup = (text: string) => {
    return { __html: text }
  }
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.ctaElement}>
        <div className={styles.messageIcon}>
        </div>
        <div className={styles.imageStyle}>
          <Img src={props.desktopImage.url} />
        </div>
        <div className={styles.imageStyleMobile}>
          <Img src={props.mobileImage.url} />
        </div>
        <div className={styles.textWrapper}>
          <h2 dangerouslySetInnerHTML={createMarkup(props.header)} />
          <p>
            <a href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a>
            <br />
            <a href={`mailto:${props.emailAdress}`}>{props.emailAdress}</a>
          </p>
          <p itemProp="address">{props.adress}</p>
          <p className={styles.buttonWrapper}>
            <Link href={urlReplace(props.buttonPath || '')} passHref>
              <a>
                <BlueButton text={props.buttonText} variant="primary" />
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
