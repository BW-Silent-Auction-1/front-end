import React from 'react';
import AuctionCard from './AuctionCard';

const AuctionItems = props => (

console.log(props),
  
    <div>
      <AuctionCard
        image={props.post.image}
        itemName={props.post.name}
        description={props.post.description}
        bidPrice={props.post.price}
      />
    </div>
 
);



export default AuctionItems;

