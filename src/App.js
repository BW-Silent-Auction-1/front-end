import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Account from './components/Account';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ls from './components/Login&SignUp';
import FadeIn from 'react-fade-in';
import { bounce } from 'react-animations';
import AuctionPost from './components/AuctionPost';
import Radium, {StyleRoot} from 'radium';
import SingleItem from './components/SingleItem';
import './App.css';
import AE from './components/Add&Edit';

// Back end API
// https://silentauction-bw.herokuapp.com/

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

const App = (props) => (
  <div className='App'>

    <FadeIn>
      <Header/>
    </FadeIn>

    <Route exact path="/" component={Home} />
    <Route path="/Login/SignUp" component={ls} />
    <PrivateRoute exact path='/AuctionPost' component={AuctionPost} />
    <PrivateRoute path='/AE' component={AE} />
    <Route path="/Items/:id" component={SingleItem} />

    
    <FadeIn>
      <Footer/>
    </FadeIn>

  </div>

);


export default App;
