// @ts-nocheck
import React, { ReactElement, useEffect, useRef, useState } from 'react'

export default function Img({ src, ...props }: any): ReactElement {
  let newSrc = src
  if (
    src.search('https://goscwdom.codeholic.pl/') >= 0 &&
    /\.(|jpe?g|png|bmp)$/i.test(src)
  ) {
    newSrc = src + '.webp'
  }
  const domRef = useRef()

  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // In your case there's only one element to observe:
        if (entries[0].isIntersecting) {
          // Not possible to set it back to false like this:
          setVisible(true)

          // No need to keep observing:
          observer.unobserve(domRef.current)
        }
      },
      { rootMargin: '150px' }
    )

    observer.observe(domRef.current)

    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <>
      <img ref={domRef} src={isVisible && newSrc} {...props} />
    </>
  )
}
