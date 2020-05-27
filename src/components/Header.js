import React from 'react';
import { PageHeader } from 'antd';
import Navigation from './Navigation'
import Drop from './Drop'


const Header = () => {
  return(
      <PageHeader style={{ width:'100%', color:'white', fontFamily: 'DM Mono, monospace'}}
        className="site-page-header"
        type='ghost'
        title="Silent Auction"
        subTitle="Buy and sell, anonymously!"
        ghost='true'
        FontColor='White'
      >
        <Drop></Drop>
    <Navigation />
    </PageHeader>
  )
}

export default Header;