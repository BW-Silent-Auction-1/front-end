import React from 'react';
import { Card , Button } from 'antd'
import { Link } from 'react-router-dom'
import SingleItem from './SingleItem';
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { useParams } from 'react-router-dom';


const zoomy = {
     root: {
       ":hover": {
         Color: "white",
         animation: '2 .5s',
       animationName: Radium.keyframes(zoomIn, 'zoomIn')
       }
   }}

   
const AuctionCard = (props) => {





return (
       <StyleRoot>
        <Card>
             <img src={props.image} style={{width:'90%',}}/>
             <h1>{props.name}</h1>

             <hr></hr>

             <p>{props.description}</p>
             <p style={{border:'1px solid dodgerblue'}}>Current Bid : <span style={{color:'green'}}>{props.price}</span></p>
             <p></p>

        <Button type='primary'><Link to= {`/Items/${props.id}`}> View Item</Link></Button>
        <Button type='danger'>Place Bid</Button>

        </Card>
        </StyleRoot>
    )


}





  
export default AuctionCard;