import React, { useState, useEffect } from "react";
import AuctionItems from "./AuctionItems";
import dummyData from "../dummy-data.js";

import axios from 'axios';



const PostsPage = (props) => {

  const [auctionPosts, setAuctionPosts] = useState([])

  useEffect(() => {
    axios.get('https://silentauction-bw.herokuapp.com/item')
      .then(response =>  {
        console.log('AuctionPost GET req res', response)
        setAuctionPosts(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  console.log(props)

  const [post , setPost] = useState(dummyData)

  return (
    <div className="PWrapper">
      
      {auctionPosts.map(post => {
        return ( 
          
            <AuctionItems 
            post={post}
        />
        
        );
      })}

    </div>
  );
};

export default PostsPage;
