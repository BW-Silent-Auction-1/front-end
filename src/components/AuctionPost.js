import React, { useState } from "react";
import AuctionItems from "./AuctionItems";
import dummyData from "../dummy-data.js";



const PostsPage = (props) => {

  console.log(props)

  const [post , setPost] = useState(dummyData)

  return (
    <div className="PWrapper">
      
      {dummyData.map(post => {
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
