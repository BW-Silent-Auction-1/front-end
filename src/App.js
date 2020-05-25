import React from 'react';
import { Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ls from './components/Login&SignUp';
import FadeIn from 'react-fade-in';
import AddAuctionItem from './components/Features/AuctionItems/AddAuctionItem';

import './App.css';

const App = () => (
  <div className='App'>

    <FadeIn>
      <Header/>
    </FadeIn>

    <Route exact path="/" component={Home}/>
    <Route path="/Auction"/>
    <Route path="/Login/SignUp" component={ls}/>
    
    <FadeIn>
      <AddAuctionItem />
      <Footer/>
    </FadeIn>

  </div>

);


export default App;