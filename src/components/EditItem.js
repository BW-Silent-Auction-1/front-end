import React, { useState } from 'react';
import '../App.css';
import * as yup from 'yup';
import axios from 'axios';
import { pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
    username: yup.string(),
    name: yup.string().required("Please enter a Name of your item."),
    description: yup.string().required("Please describe your item."),
})



const alert = {
    root: {
          color:'red',
        animation: '2 .5s',
      animationName: Radium.keyframes(pulse, 'pulse')
      }
  }

const btn = {
    root: {
      ":hover": {
        Color: "white",
        animation: '2 .5s',
      animationName: Radium.keyframes(pulse, 'pulse')
      }
  }}

const AddItem = props  => {
  const [addItem, setAddItem] = useState({
    username:"",
    name:"",
    description:""
  })
  
  const handleChanges = event => {
    event.persist()
    validate(event)
    console.log(addItem, event.target.checked);

    let value = event.target.type === 'checkbox' ? event.target.checked :event.target.value 
    setAddItem({...addItem, [event.target.name]: value});
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    axios.post('https://reqres.in/api/users', addItem)
    .then( response => console.log(response))
    .catch(err => console.log(err))
  };

  const [errors, setErrors] = useState({
    username:"",
    name:"",
    description:"",
  });

  const validate = (event) => {
    yup.reach(schema, event.target.name)
    .validate(event.target.value)
    .then( valid =>{
        setErrors({
            ...errors,
            [event.target.name]: ""
        })

    })
    .catch(err => {
        console.log(err.errors)
        setErrors({
            ...errors,
            [event.target.name]: err.errors[0]
        })
    })
  };

  return (
    <form style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: 'auto'
    }} 
      className="form" 
      onSubmit={submitForm}
    >
      <label htmlFor="username">  Seller Name  (Optional)  </label>
      <input
        onChange={handleChanges}
        id="username"
        type="text"
        name="username"
        placeholder="Enter valid Username"
        value={addItem.username}
      />


      <label htmlFor='name'>Item Name/Title</label>
      <input
        value={addItem.name}
        name="name"
        id="name"
        type="name"
        placeholder="Please enter the Item name"
        onChange={handleChanges}
      />

{errors.name.length > 0 ? <StyleRoot><p style={alert.root}>{errors.name}</p></StyleRoot>: null}

    <label htmlFor='description'>Item Description</label>
      <textarea
        value={addItem.description}
        name="description"
        id="description"
        type="text"
        placeholder="Please enter a description"
        onChange={handleChanges}
      />

{errors.description.length > 0 ? <StyleRoot><p style={alert.root}>{errors.description}</p></StyleRoot>: null}



        <hr></hr>
        <StyleRoot>
        <button style={btn.root} className='submitButton' ><Link to='/AuctionPost'>Edit Item</Link></button>
        </StyleRoot>
    </form>
  );
    };



export default AddItem;