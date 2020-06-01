import React, { useState } from 'react';
import '../App.css';
import * as yup from 'yup';
import axios from 'axios';
import { pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const schema = yup.object().shape({
    name: yup.string().required("Please enter a username"),
    password: yup.string().required("Please enter a password"),
    terms: yup.boolean()
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

const Login = props  => {
  const [login, setlogin] = useState({
    name: "",
    password:"",
  });
  
  const handleChanges = event => {
    event.persist()
    validate(event)
    console.log(login, event.target.checked);

    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value 
    setlogin({...login, [event.target.name]: event.target.value});
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    axiosWithAuth()
      .post('/login', login)
      .then(response => {
        console.log('login submitForm post req res', response)
        window.localStorage.setItem('token', response.data.token)
      })
      .catch(err => {
        console.log(err.message)
        window.alert('Invalid credentials')
      })
  };

  const [errors, setErrors] = useState({
    name: "",
    password:"",
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
      <label htmlFor="username">  Username </label>
      <input
        onChange={handleChanges}
        id="username"
        type="text"
        name="name"
        placeholder="Enter valid Username"
        value={login.name}
      />
      {errors.name.length > 0 ? <StyleRoot><p style={alert.root}>{errors.name}</p></StyleRoot>: null}

      <label htmlFor='password'>Password</label>
      <input
        value={login.password}
        name="password"
        id="password"
        type="password"
        placeholder="Please enter a valid password"
        onChange={handleChanges}
      />
      {errors.password.length > 0 ? <StyleRoot><p style={alert.root}>{errors.password}</p></StyleRoot>: null}
        <hr></hr>
        <StyleRoot>
          {/* <Link to='/AuctionPost'>Login</Link> */}
        <button style={btn.root} className='submitButton' >login</button>
        </StyleRoot>
    </form>
  );
    };



export default Login;