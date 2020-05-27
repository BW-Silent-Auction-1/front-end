import React from 'react';
import { Card } from 'antd'
import AddItem from './AddItem';
import EditItem from './EditItem';
import FadeIn from 'react-fade-in';
import { fadeInDown , flash } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


const bing = {
  swing: {
    animation: '1.5 2s',
    animationName: Radium.keyframes(flash, 'flash')
  }
}


const pulser = {
    fadeInDown: {
      animation: '1 4s',
      animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
  }

const AE = () => {  
  return (
    <div className='lsform' style={{display:'flex', flexDirection:'space-between', padding:'3rem'}}>
    
    <FadeIn transitionDuration='4000' delay='500'>
        <Card title="Create Auction" style={{backgroundColor:'dodgerblue', border:'1px solid black'}}>
          <AddItem/>
        </Card>
     </FadeIn>

      

        <FadeIn transitionDuration='4000' delay='500'>
        <Card title="Edit an Auction" style={{backgroundColor:'dodgerblue', border:'1px solid black'}}>
          <EditItem/>
        </Card>
        </FadeIn>
    </div>
  )
}

export default AE;