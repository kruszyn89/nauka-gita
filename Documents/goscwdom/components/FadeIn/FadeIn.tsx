// @ts-nocheck
import React, { useRef, useEffect, useState } from 'react'
import styles from './FadeIn.module.css'
import cx from 'classnames'

interface Props {
  children: React.ReactElement
}

export const FadeIn = ({ children }: Props) => {
  const domRef = useRef()

  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true)

        // No need to keep observing:
        observer.unobserve(domRef.current)
      }
    })

    observer.observe(domRef.current)

    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <section
      ref={domRef}
      className={cx(styles.root, { [styles.isVisible]: isVisible })}
    >
      {children}
    </section>
  )
}
