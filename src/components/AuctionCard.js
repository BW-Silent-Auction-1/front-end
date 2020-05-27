import React from 'react';
import { Card , Button } from 'antd'
import { Link } from 'react-router-dom'
import SingleItem from './SingleItem';

const AuctionCard = (props) => 

     (
        
        <Card>
             <img src={props.image} style={{width:'90%'}}/>
             <h1>{props.itemName}</h1>

             <hr></hr>

             <p>{props.description}</p>
             <p style={{border:'1px solid dodgerblue'}}>Current Bid : <span style={{color:'green'}}>{props.bidPrice}</span></p>

        <Button type='primary'><Link to={SingleItem}>View Item</Link></Button>
        <Button type='danger'>Place Bid</Button>

        </Card>
        
    )









export default AuctionCard;