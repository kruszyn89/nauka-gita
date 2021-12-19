import React from 'react'
import { Button } from 'react-bootstrap'

import styles from './BlueButton.module.css'

export interface ButtonText {
  text: string
  variant?: string
  size?: string
  outlinedOnHover?: boolean
  type?: string
  disabled?: boolean
}

export default function BlueButton({
  text,
  variant = 'primary',
  outlinedOnHover,
  type,
  disabled = false,
}: ButtonText) {
  const setStyle = variant === 'primary' ? styles.primary : styles.second
  return (
    <Button
      type={type || 'button'}
      className={`${setStyle} ${outlinedOnHover ? styles.outlined : ''}`}
      disabled={disabled}
    >
      <div className={styles.text}>{text}</div>
    </Button>
  )
}
