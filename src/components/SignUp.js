import React, { useState } from 'react';
import '../App.css';
import * as yup from 'yup';
import axios from 'axios';
import { pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import { axiosWithAuth } from '../utilities/axiosWithAuth';




const btn = {
    root: {
      ":hover": {
        Color: "white",
        animation: '2 .5s',
      animationName: Radium.keyframes(pulse, 'pulse')
      }
  }}

  
const alert = {
    root: {
          color:'red',
        animation: '2 .5s',
      animationName: Radium.keyframes(pulse, 'pulse')
      }
  }




const schema = yup.object().shape({
    name: yup.string().required("Please enter a username"),
    password: yup.string().min(4,"Seems a little short").required("Please enter a password"),
    repassword:yup.string().required("Please confirm your password"),
    role: yup.string().required('Please choose a role')
})




const SignUp = props  => {

  const [loading, setLoading] = useState(false)


    const [signUp, setSignUp] = useState({
        name: "",
        password:"",
        repassword:"",
        role: ""
      });
    
      const handleChanges = event => {
        event.persist()
        validate(event)
        console.log(signUp, event.target.checked);

        let value = event.target.type === 'checkbox' ? event.target.checked :event.target.value 
        setSignUp({...signUp, [event.target.name]: event.target.value});
    };

      const submitForm = (event) => {
        event.preventDefault();
        console.log("Submitted!");
        setLoading(true)

        if(signUp.password === signUp.repassword){
        axiosWithAuth()
          .post('/register', signUp)
          .then(response => {
            console.log('signup submitForm post req res', response)
            setTimeout(() => {
              return (
                setLoading(false),
                window.alert('Account Created Successfully')
              )
            }, 3000)
          })
          .catch(err => console.log(err))
        } else {window.alert("Please make sure your password matches!")}
      };

      const [errors, setErrors] = useState({
        username: "",
        password:"",
        repassword:"",
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

      if (loading === true) {
        return <h2>Loading...</h2>
      } else return (
          
        <form style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: 'auto'
          }} className="form" onSubmit={submitForm}>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChanges}
            id="username"
            type="text"
            name="name"
            placeholder="Enter valid Username"
            value={signUp.name}
          />
          {errors.username.length > 0 ? <StyleRoot><p style={alert.root}>{errors.username}</p> </StyleRoot>: null}

          <label htmlFor='password'>Password</label>
          <input
            value={signUp.password}
            type= "password"
            name="password"
            id="password"
            onChange={handleChanges}
            placeholder="Enter valid password"
          />
          {errors.password.length > 0 ? <StyleRoot><p style={alert.root}>{errors.password}</p></StyleRoot>: null}

          <label htmlFor='repassword'>Password</label>
          <input
            value={signUp.repassword}
            type= "password"
            name="repassword"
            id="repassword"
            onChange={handleChanges}
            placeholder="Re-enter password"
          />
          {errors.repassword.length > 0 ? <StyleRoot><p style={alert.root}>{errors.repassword}</p></StyleRoot>: null}
          

          <label htmlFor='selection'> Auctioneer or Bidder?  </label>
          <select
            value={signUp.role}
            name="role"
            id="user"
            onChange={handleChanges}
          >
              <option value=""></option>
              <option value="auctioneer">Auctioneer</option>
              <option value="bidder">Bidder</option>
          </select>

            <hr></hr>
          
            <StyleRoot>
            <button style={btn.root} className='submitButton' type="submit">Sign-Up!</button>
            </StyleRoot>
        </form>
       
      );
    };



export default SignUp;