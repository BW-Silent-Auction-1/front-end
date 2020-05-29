import React, { useState , useEffect } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import AuctionItems from "./AuctionItems";
import dummyData from "../dummy-data.js";
import FadeIn from "react-fade-in";


const PostsPage = (props) => {

  const [info , setInfo] =useState([])

  useEffect(() => {
      axios
      .get("https://silentauction-bw.herokuapp.com/item")
      .then(response => {
          setInfo(response.data);
      });
  
  }, []);

  
  
  useEffect(() => {
  console.log("data", info);
  }, [info])
  
  
  return (
  
  <FadeIn transitionDuration='3000' delay='400'>
    <h1>Welcome to the current auctions page,</h1>
    <p> Here you can view current items up for bidding!</p>
  <div className='PWrapper'>
    
 
      {info.map(item =>{
          return    <AuctionItems
          id = {item.id}
          auctioneer_id = {item.auctioneer_id}
          name = {item.name}
          description = {item.description}
          price = {item.price}
          recorded_on = {item.recorded_on}
          />
          
      })}

  
  </div>
  </FadeIn>  
  );
  };


export default connect(null, {})(PostsPage);


