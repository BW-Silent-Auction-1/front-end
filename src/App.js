import React from 'react';
import { Button, Card } from 'antd';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp'
import { Route } from 'react-router-dom';

const App = () => (
  <div style={{
    display:'flex'
  }}>

    <Card
     title="LOGIN"
     style={{ width: 300 }}>>
     <Login/>
     </Card>
    <Card
     title="SIGN UP"
     style={{ width: 300 }}>
     <SignUp/>
     </Card>
  </div>
);


export default App;
