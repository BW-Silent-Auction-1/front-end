import React from 'react';
import { bounce , fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Button} from 'antd';
import { Link } from 'react-router-dom';


const pulser = {
    fadeInDown: {
      animation: '1 4s',
      animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
  }



const styles = {
  bounce: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

const Home = () => {
  return(
    <StyleRoot>
      <div className='homeInfo'> 
        <h1 style={styles.bounce} className="headers">Welcome to <span style={{color:'white', backgroundColor:'black', borderRadius:'1rem', padding: '.5rem'}}>Silent-Auction!</span></h1>
        <p>We're pleased to welcome you aboard to our online auction platform,
        were buyers and sellers can do so while being in the comfort of thier own home (anonymously!). </p>
        <Button type='primary' style={{border:'1px solid black', width:'10rem', margin:'auto'}}> <Link style={{color:'white'}} to="/Login/SignUp">Get Started</Link></Button>
      </div>
    </StyleRoot>

    
)}

export default Home;