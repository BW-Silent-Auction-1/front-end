import React from 'react';
import {Card} from 'antd'


const AuctionCard = (props) => 

     (
        <Card style={{ border:'1px solid black', width:450 , margin:'1rem'}}>
        <img src={props.image} style={{width:'90%'}}/>
        <h1>{props.itemName}</h1>
        <hr></hr>
        <p>{props.description}</p>
        <p style={{border:'1px solid dodgerblue'}}>{props.bidPrice}</p>
        </Card>
    )









export default AuctionCard;