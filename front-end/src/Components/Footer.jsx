import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Alert } from '@coreui/react';
import { CFooter, CLink } from '@coreui/react'


export const Footer = () => {
  return (
    <CFooter position='fixed'>
  <div>
    <CLink href="collinskandie.com">Collins Kandie</CLink>
    <span>&copy; 2022</span>
  </div>
  <div>
    <span>KBC</span>
    <CLink href="kbc.co.ke">Kenya Broadcasting Corporations</CLink>
  </div>
</CFooter>
  )
}
