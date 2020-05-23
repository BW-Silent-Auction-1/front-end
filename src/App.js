import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ls from './components/Login&SignUp';
import { Route } from 'react-router-dom';
import FadeIn from 'react-fade-in';


const App = () => (

  

    <div className='App'>

    <FadeIn>
      <Header/>
    </FadeIn>

    <Route exact path="/" component={Home}/>
    <Route path="/Auction"/>
    <Route path="/Login/SignUp" component={ls}/>
    
  <FadeIn>
    <Footer/>
  </FadeIn>
    
     </div>

);


export default App;
