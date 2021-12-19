import React from 'react'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { MenuItem } from '../../services/wordpressApi'
import logo from './logo-goscwdom-kontra.svg'
import fb from './images/fb.svg'
import ig from './images/ig.svg'
import arrowUp from '../elements/icons/arrow-up.svg'
import { Img } from '../elements/Img'

import styles from './Footer.module.css'
import { urlReplace } from '../../services/urlReplace'

export interface IFooterProps {
  footer1: MenuItem[]
  footer2: MenuItem[]
}

export default function Footer({ footer1, footer2 }: IFooterProps) {
  return (
    <>
      <footer className={styles.root}>
        <Container>
          <Row>
            <Col className={styles.column} md>
              <div className={styles.logoComponent}>
                <Img src={logo} />
              </div>

              <div className={styles.boldName}>Restauracja Gość w Dom</div>
              <p className={styles.name}>
                Chlastawa 18a <br />
                66-210 Zbąszynek <br />
              </p>
              <p className={styles.name}>
                +48 515 281 508 <br/>kontakt@goscwdom.com
              </p>
            </Col>
            <Col className={styles.column} md>
              <h6 className="inverted separator smallMargin">Menu</h6>
              <ul className={styles.linkInSection}>
                {footer1?.map(({ title, url }) => (
                  <li key={title}>
                    <Link passHref href={urlReplace(url)}>
                      <a className={styles.aInFooter}>{title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col className={styles.column} md>
              <h6 className={`inverted separator smallMargin`}>Informacje</h6>
              <ul className={styles.linkInSection}>
                {footer2?.map(({ title, url }) => (
                  <li key={title}>
                    <Link passHref href={urlReplace(url)}>
                      <a className={styles.aInFooter}>{title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.iconWrapper}>
                <h6 className={`inverted separator smallMargin`}>
                  Znajdź nas na social media:
                </h6>
                <div className={styles.inLine}>
                  <div>
                    <a href="https://www.facebook.com/goscwdom">
                      <Img src={fb} />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/goscwdom/">
                      <Img src={ig} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className={styles.socialBar}>
        <Container className={styles.footerContainer}>
          <div><strong>© Gość w Dom 2021 </strong> Wszystkie prawa zastrzeżone</div>
          <div className={styles.arrowContainer}>
            <Img
              onClick={() => window.scrollTo(0, 0)}
              src={arrowUp}
              className={styles.arrowButton}
            />
          </div>
        </Container>
      </div>
    </>
  )
}
