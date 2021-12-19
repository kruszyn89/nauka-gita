import React from 'react'

export interface SpacerProps {
  heightValue?: number
}

const Spacer: React.FC<SpacerProps> = ({ heightValue }) => {
  console.log(heightValue)
  return (
    <>
      {heightValue ? (
        <div style={{ height: `${heightValue}px` }} />
      ) : (
        <div style={{ height: '50px' }} />
      )}
    </>
  )
}

export default Spacer
