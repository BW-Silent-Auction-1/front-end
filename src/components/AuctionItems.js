import React from 'react';
import AuctionCard from './AuctionCard';

const AuctionItems = props => (


  
    <div>
      <AuctionCard
        id={props.id}
        auctioneer_id={props.auctioneer_id}
        name={props.name}
        description={props.description}
        price={props.price}
      />
    </div>
 
);



export default AuctionItems;

