import React from 'react'

const Container = ({id, className, children ,style}) => {
  return (
    <div id={id} className={className} style={style}>{children}</div>
  )
}

export default Container