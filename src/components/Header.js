import React from 'react';
import { PageHeader } from 'antd';
import Navigation from './Navigation'
import Drop from './Drop'


const Header = () => {
  return(
      <PageHeader style={{ width:'100%', color:'white', fontFamily: 'DM Mono, monospace', backgroundColor:'dodgerblue', display:'flex', border:'1px solid black'}}
        className="site-page-header"
        type='ghost'
        title="Silent Auction"
        subTitle="Buy and sell, anonymously!"
        ghost='true'
        FontColor='White'
      >
        <Drop style={{}}></Drop>
    <Navigation />
    </PageHeader>
  )
}

export default Header;