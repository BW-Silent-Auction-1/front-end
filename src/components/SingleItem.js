import React , { useEffect , useState} from 'react';
import axios from 'axios';
import { Card , Button } from 'antd'
import { useParams } from 'react-router-dom';


// WARNING, ODD ERROR OF ITEM NOT BEING DEFINED ONLY IN RETURN STATEMENT

const SingleItem = (props) => {

const [loading, setLoading] = useState(true)
const [item, setItem] = useState({});

const {id} = useParams();


useEffect(() => {
  

       axios
        .get(`https://silentauction-bw.herokuapp.com/item/${id}`)
        .then(response => {
          // setLoading(true)
          setItem(response.data[0]);
          console.log(response.data)
          setTimeout(() => {
            setLoading(false)
          }, 1000)
      })
      .catch(error => {
        console.error(error);
      });
  
  }, []);

  if (loading === true) {
    return <h2>Loading Item...</h2>
  } else return(
      console.log(item),
       <div style={{ width:'100%', display:'flex', justifyContent:'center'}}>
        <Card>
        <img style={{width:'90%'}}/>
             <h1>{item.itemName}</h1>

             <hr></hr>

             <p>{item.itemDescription}</p>
             <p style={{border:'1px solid dodgerblue'}}>Current Bid : <span style={{color:'green'}}>{item.initialPrice}</span></p>

        <Button type='danger'>Place Bid</Button>

        </Card>
        </div> 
    )

     
     }
export default SingleItem;

/*
   <img style={{width:'90%'}}/>
             <h1>{props.name}</h1>

             <hr></hr>

             <p>{props.description}</p>
             <p style={{border:'1px solid dodgerblue'}}>Current Bid : <span style={{color:'green'}}>{props.price}</span></p>

 const { name, description, price} = item;
  */

