import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar copy.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <img src={avatar} alt="" className="image avatar" />
      <h1>
        Hi! My name is <strong>Andy</strong>.&nbsp;
      </h1>
      <h1>
        Welcome to my portfolio.
        {/* <a href='https://reactjs.org'> React</a>, <a href='https://gatsbyjs.com'>Gatsby</a> and <a href='https://mongodb.com'>MongoDB.</a> */}
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
