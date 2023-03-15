import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavLink(props: any) {
  const [className, setClassName] = useState('')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === props.to) {
      setClassName('active')
    } else {
      setClassName('')
    }
  }, [location, props])
  const handlerKeyPress = (e: any) => {
    console.log(e.code, props.to)
  }

  // const className = isActive ? 'active' : ''

  return (
    <Link className={className} {...props} onKeyDown={handlerKeyPress}>
      {props.children}
    </Link>
  )
}
