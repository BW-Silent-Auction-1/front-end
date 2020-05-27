import React from 'react';
import { Route } from 'react-router-dom';
import Account from './components/Account';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ls from './components/Login&SignUp';
import FadeIn from 'react-fade-in';
import AddAuctionItem from './components/Features/AuctionItems/AddAuctionItem';
import { bounce } from 'react-animations';
import AuctionPost from './components/AuctionPost';
import Radium, {StyleRoot} from 'radium';
import SingleItem from './components/SingleItem';
import AE from './components/Add&Edit';
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
    <Route path='/AuctionPost' component={AuctionPost} />
    <Route path='/enter' component={AuctionPost}/>
    <Route path='/AE' component={AE}/>
    <Route path='/SingleItem' component={SingleItem}/>

    <FadeIn>
      <Footer/>
    </FadeIn>

  </div>

);


export default App;
