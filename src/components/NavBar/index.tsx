import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Wrapper } from './index.style'
import NavLink from './NavLink'

import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Header } from './index.style'
const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: ''
  },
  {
    label: 'Dashboard',
    key: 'dashboard'
  },
  {
    label: 'Orders',
    key: 'orders'
  },
  {
    label: 'Products',
    key: 'products'
  },
  {
    label: 'Customers',
    key: 'customers'
  }
]
const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState('')
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    navigate(e.key)
  }
  return (
    <Header>
      <div className='logo'>Logo</div>
      {/* <div className={`nav nav-active`}>
        <ul className='nav-links'>
          <li className='nav-item'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/orders'>Orders</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/products'>Products</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/customers'>Customers</NavLink>
          </li>
        </ul>
      </div> */}
      <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />
    </Header>
  )
}
export default Navbar
