import React from 'react';
import { Card } from 'antd'
import Login from './Login'
import SignUp from './SignUp'
import FadeIn from 'react-fade-in';

const ls = () => {  
  return (
    <div className='lsform' style={{display:'flex', flexDirection:'space-between'}}>
      <FadeIn transitionDuration='2000' delay='100'>
        <Card title="Login"  style={{ width: 300, backgroundColor:'grey', border:'grey' }}>
          <Login></Login>
        </Card>
      </FadeIn>

      <FadeIn transitionDuration='5000' delay='500'>
        <Card title="Login to get started!" style={{ width: 300, backgroundColor:'grey', border:'solid grey'}}>
          <p>Don't have an account? Use the form to the right to get on board!</p>
        </Card>
      </FadeIn>

      <FadeIn transitionDuration='2000' delay='100'>
        <Card title="Sign-Up"  style={{ width: 300, backgroundColor:'grey', border:'solid grey'}}>
          <SignUp></SignUp>
        </Card>
      </FadeIn>
    </div>
  )
}

export default ls;