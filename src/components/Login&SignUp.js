import React from 'react';
import { Card } from 'antd'
import Login from './Login'
import SignUp from './SignUp'
import FadeIn from 'react-fade-in';
import { fadeInDown , zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


const bing = {
  swing: {
    animation: '1 10s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}


const pulser = {
    fadeInDown: {
      animation: '1 4s',
      animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
  }

const ls = () => {  
  return (
    <div className='lsform' style={{display:'flex', flexDirection:'space-between', padding:'3rem'}}>
    
    <FadeIn transitionDuration='5000' delay='500'>
        <Card title="Login">
          <Login></Login>
        </Card>
     </FadeIn>

      
        <div className='center' style={{ width: 300}}>
            <StyleRoot>
                <h1 style={bing.swing}>Login or Sign Up!</h1>
                <p style={bing.swing}>Don't have an account? Use the second form to get on board!</p>
            </StyleRoot>
        </div>
      

        <FadeIn transitionDuration='5000' delay='500'>
        <Card title="Sign-Up">
          <SignUp></SignUp>
        </Card>
        </FadeIn>
    </div>
  )
}

export default ls;