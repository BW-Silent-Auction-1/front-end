import React from 'react';
import { Card , Button } from 'antd'

const SingleItem = (props) => 

     (
        
        <Card>
             <img src={props.image} style={{width:'90%'}}/>
             <h1>{props.itemName}</h1>

             <hr></hr>

             <p>{props.description}</p>
             <p style={{border:'1px solid dodgerblue'}}>Current Bid : <span style={{color:'green'}}>{props.bidPrice}</span></p>


        <Button type='danger'>Place Bid</Button>

        </Card>
        
    )

     

export default SingleItem;

/*
const [item, setitem] = useState();

const {id} = useParams()


useEffect(() => {
  

       axios
        .get(`${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  */