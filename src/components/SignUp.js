import React, { useState } from 'react';
import '../App.css';
import * as yup from 'yup';
import axios from 'axios';
import { pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';




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
    username: yup.string().required("Please enter a username"),
    password: yup.string().min(4,"Seems a little short").required("Please enter a password"),
    repassword:yup.string().required("Please confirm your password")
})




const SignUp = props  => {



    const [signUp, setSignUp] = useState({
        username: "",
        password:"",
        repassword:"",
      });
    
      const handleChanges = event => {
        event.persist()
        validate(event)
        console.log(signUp, event.target.checked);

        let value = event.target.type === 'checkbox' ? event.target.checked :event.target.value 
        setSignUp({...signUp, [event.target.name]: value});
    };

      const submitForm = (event) => {
        event.preventDefault();
        console.log("Submitted!");
        if(signUp.password === signUp.repassword){
        axios.post('https://reqres.in/api/users', signUp)
        .then( response => console.log(response))
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

      return (
          
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
            name="username"
            placeholder="Enter valid Username"
            value={signUp.username}
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
          
            <hr></hr>
          
            <StyleRoot>
            <button style={btn.root} className='submitButton' type="submit">Sign-Up!</button>
            </StyleRoot>
        </form>
       
      );
    };



export default SignUp;