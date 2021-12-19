// @ts-nocheck
import React from 'react'

const SubMenuToggle = React.forwardRef(
  ({ children, className, id, onClick }, ref) => (
    <div
      className={className}
      id={id}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation()
        onClick(e)
      }}
    >
      {children}
    </div>
  )
)
export default SubMenuToggle
