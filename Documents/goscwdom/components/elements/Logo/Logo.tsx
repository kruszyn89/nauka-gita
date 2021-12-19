import * as React from 'react'
import LogoGosc from './images/logo-poziom.svg'
import { Img } from '../../elements/Img'

export interface ILogoProps {
  className?: string
}

export default function Logo({ className }: ILogoProps) {
  return (
    <div>
      <Img className={className} src={LogoGosc} alt="Gość w dom logo" />
    </div>
  )
}
