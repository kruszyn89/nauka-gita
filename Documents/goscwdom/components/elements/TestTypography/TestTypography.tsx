import * as React from 'react'
import BlueButton from '../Buttons'
import LinkButton from '../LinkButton'
import iconPost from '../icons/ico-poradnik.svg'
import checkmark from '../icons/ico-checkmark.svg'
import smiledGirl from '../images/smiledGirl.jpg'

export default function TestTypography() {
  return (
    <>
      <h1 className="separator center">
        W naszej klinice poznasz <strong>prawdziwą radość uśmiechu.</strong>
      </h1>
      <h2 className="inverted separator">
        O nas <strong>o nas</strong>
      </h2>
      <h3>
        Poznaj bliżej <strong>historię kliniki estetycznej</strong> Ortodoncji i
        Implantologii Soldent
      </h3>
      <h4>Test</h4>
      <h5>Test</h5>
      <p className="description">Powstanie Kliniki Soldent jest</p>
      <p>
        Powstanie Kliniki Soldent jest
        <ul>
          <li>
            Powstanie Kliniki Soldent jest
            <strong> spełnieniem wspólnego marzenia </strong>
            właścicieli. Założeniem było{' '}
            <strong> stworzenia najnowocześniejszej kliniki </strong>dbającej
            kompleksowo o każdego pacjenta i jego potrzeby.
          </li>
          <li>
            Powstanie Kliniki Soldent jest
            <strong> spełnieniem wspólnego marzenia </strong>
            właścicieli. Założeniem było{' '}
            <strong> stworzenia najnowocześniejszej kliniki </strong>dbającej
            kompleksowo o każdego pacjenta i jego potrzeby.
          </li>
        </ul>
      </p>
      <div>
        <LinkButton
          text="SKONTAKTUJ SIĘ →"
          path="/"
          icon={iconPost}
          variant="second"
        />
        <LinkButton
          text="Szkolenia dla lekarzy i techników →"
          path="/"
          icon={checkmark}
          variant="primary"
        />
        {/* <OffersList /> */}
      </div>
    </>
  )
}
