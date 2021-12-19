import { IBreadcrumb } from '../../services/breadcrumbReducer'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import styles from './Breadcrumbs.module.css'
import arrowSmall from '../elements/icons/arrow-small.svg'
import { urlReplace } from '../../services/urlReplace'
import { Img } from '../elements/Img'

const Breadcrumbs: React.FC<{ breadcrumbs: IBreadcrumb[] }> = ({
  breadcrumbs = [],
}) => {
  return (
    <div className={styles.floatingBelowNav}>
      <Container>
        <div className={styles.breadcrumbWrapper}>
          {breadcrumbs.map((breadcrumb, i) => {
            return breadcrumbs.length > i + 1 ? (
              <div key={`breadcrumb-item-${breadcrumb.name}`}>
                <Link href={urlReplace(breadcrumb.url)} passHref>
                  <a
                    key={`breadcrumb-link-${breadcrumb.name}`}
                    className={styles.breadcrumbLink}
                  >
                    {breadcrumb.name}
                  </a>
                </Link>
                <Img src={arrowSmall} className={styles.breadcrumbArrow} />
              </div>
            ) : (
              <p
                key={`last-breadcrumb-${breadcrumb.name}`}
                className={styles.breadcrumbLabel}
              >
                {breadcrumb.name}
              </p>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
export default Breadcrumbs
