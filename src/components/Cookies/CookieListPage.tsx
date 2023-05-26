import React from 'react'
import CookieFooter from './CookieFooter'
import CookieNavbar from './CookieNavbar'
import CookieListContent from './CookieListContent'

const CookieListPage = () => {
  return (
    <div style={{backgroundColor: '#f2efce'}}>
      <CookieNavbar/>
      <div style={{margin: '40px 20% 60px 20%', backgroundColor: 'white'}}>
      <CookieListContent/>
      </div>
      <CookieFooter/>
    </div>
  )
}

export default CookieListPage
