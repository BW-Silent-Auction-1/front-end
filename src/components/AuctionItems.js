import React from 'react';
import AuctionCard from './AuctionCard';

const AuctionItems = props => (


  
    <div>
      <AuctionCard
        image={props.post.image}
        itemName={props.post.itemName}
        description={props.post.description}
        bidPrice={props.post.bidPrice}
      />
    </div>
 
);



export default AuctionItems;

