import React from 'react'
import styles from './FullScreenMedia.module.css'
import { Img } from '../elements/Img'

export interface FullScreenMediaProps {
  image: { url: string }
  video: { url: string }
}

export default function FullScreenMedia(props: FullScreenMediaProps) {
  return (
    <div className={styles.wrapper}>
      {props.image.url && (
        <Img src={props.image.url} className={styles.image} />
      )}
    </div>
  )
}
