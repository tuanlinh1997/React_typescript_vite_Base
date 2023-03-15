import React from 'react'
import Home from '~/pages/Home'
const CustomerDetail = React.lazy(() => import('~/pages/CourseDetail'))
const Customers = React.lazy(() => import('~/pages/Customers'))
const Dashboard = React.lazy(() => import('~/pages/Dashboard'))
const Orders = React.lazy(() => import('~/pages/Orders'))
const Products = React.lazy(() => import('~/pages/Products'))
const Counter = React.lazy(() => import('~/pages/counter/Counter'))

// import CustomerDetail from '~/pages/CourseDetail'
// import Customers from '~/pages/Customers'
// import Dashboard from '~/pages/Dashboard'
// import Orders from '~/pages/Orders'
// import Products from '~/pages/Products'

const routesHome = [
  {
    path: '/',
    lazyload: false,
    component: <Home />
  },
  {
    path: '/dashboard',
    lazyload: true,
    component: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </React.Suspense>
    )
  },

  {
    path: '/customers',
    lazyload: true,
    component: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Counter />
      </React.Suspense>
    )
  },
  {
    path: '/products',
    lazyload: true,
    component: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Products />
      </React.Suspense>
    )
  },
  {
    path: '/orders',
    lazyload: true,
    component: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Orders />
      </React.Suspense>
    )
  },
  {
    path: '/courses/:courseId',
    lazyload: true,
    component: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <CustomerDetail />
      </React.Suspense>
    )
  },
  {
    path: '*',
    lazyload: true,
    component: <>NOT FOUND</>
  }
]
export { routesHome }
