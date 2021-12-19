// @ts-nocheck
import React from 'react'

const SubMenu = React.forwardRef(
  ({ children, 'aria-labelledby': labeledBy, className }, ref) => {
    return (
      <div
        className={className}
        onClick={(e) => {
          e.stopPropagation()
        }}
        ref={ref}
        aria-labelledby={labeledBy}
      >
        {React.Children.toArray(children).map((subchild) => subchild)}
      </div>
    )
  }
)
export default SubMenu
