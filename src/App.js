import React from 'react';
import { Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ls from './components/Login&SignUp';
import FadeIn from 'react-fade-in';
import AddAuctionItem from './components/Features/AuctionItems/AddAuctionItem';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './App.css';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

const App = () => (
  <div className='App'>

    <FadeIn>
      <Header/>
    </FadeIn>

    <Route exact path="/" component={Home}/>
    <Route path="/Login/SignUp" component={ls}/>
    <Route path="/Auction"/>
    <Route path='/auctionitems' component={AddAuctionItem} />
    
    <FadeIn>
      <Footer/>
    </FadeIn>

  </div>

);


export default App;
