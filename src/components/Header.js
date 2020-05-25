import React from 'react';
import { PageHeader } from 'antd';
import Navigation from './Navigation'

const Header = () => {
  return(
      <PageHeader style={{ width:'100%', color:'white', fontFamily: 'DM Mono, monospace', backgroundColor:'rgb(53, 53, 53)', border:'1px solid black'}}
        className="site-page-header"
        onBack={() => null}
        type='ghost'
        title="Silent Auction"
        subTitle="Buy and sell, anonymously!"
        ghost='true'
        FontColor='White'
      >

    <Navigation />
    </PageHeader>
  )
}

export default Header;