import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './HeroHomepage.module.css'
import Link from 'next/link'
import { urlReplace } from '../../services/urlReplace'
import { Img } from '../elements/Img'
import Button from '../elements/Buttons'

export interface HeroHomepageProps {
  title: string
  description: string
  link: string
  background: {url:string}
}

export default function HeroHomepage({title, description, link, background}: HeroHomepageProps) {

  return (
    <div
      className={styles.root}
      style={{backgroundImage: `url(${background.url})`}}
    >
       <div className={styles.overlay}/>
       <div className={styles.top}>
        <h1>{title}</h1>
        <div className={styles.separator}>
          <div className={styles.diamond}/>
        </div>
        <div className={styles.description}>{description}</div>
        <Link href={link}>
          <Button variant="secondary" text="Czytaj więcej"/>
        </Link>
       </div>
    </div>
  )
}
