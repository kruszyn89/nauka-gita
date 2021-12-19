import React from 'react'
import styles from './VideoComponent.module.css'

export interface VideoComponentProps {
  url: string
}

const VideoComponent: React.FC<VideoComponentProps> = ({ url }) => {
  return (
    <div className={styles.wrapper}>
      {url ? (
        <iframe
          className={styles.iframe}
          width="560"
          height="315"
          src={`${url}?cc_load_policy=1&rel=0&showinfo=1&fs=1`}
          allowFullScreen
        ></iframe>
      ) : null}
    </div>
  )
}

export default VideoComponent
