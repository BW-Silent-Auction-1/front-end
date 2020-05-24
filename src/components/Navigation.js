import React from 'react';
import { Link } from 'react-router-dom'
import {Button} from 'antd'

const Navigation = () => {
  return (
    
      <div className='Nav'>
        
        <Button className='antButton' type='ghost'> <Link className="NavLink" to="/">Home</Link> </Button>
        
        <Button className='antButton' type='ghost'> <Link className="NavLink" to="/Auctions">Auctions</Link> </Button>
      
        <Button className='antButton' type='ghost'> <Link className="NavLink" to="/Login/SignUp">Login/Sign Up</Link></Button>
        
      </div>
    
  );
};

export default Navigation;