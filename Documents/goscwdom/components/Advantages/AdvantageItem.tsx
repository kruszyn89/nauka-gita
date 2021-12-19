import { IAdvantage } from './Advantages'
import styles from './Advantages.module.css'
import { Img } from '../elements/Img'

const AdvantageItem: React.FC<IAdvantage> = ({ text, icon, description }) => {
  return (
    <div className={`${styles.advantageContainer}`}>
      <div className={styles.iconBackground}>
        <Img src={icon.url} />
      </div>
      <div>
        <h5>{text}</h5>
        <div>{description}</div>
      </div>
    </div>
  )
}
export default AdvantageItem
