import React, { useState } from 'react';
import ReactDOM from "react-dom";
import '../App.css';
import * as yup from 'yup';
import axios from 'axios';
import { Button } from 'antd';

const schema = yup.object().shape({
    username: yup.string().required("Please enter a name"),
    password: yup.string(),
    terms: yup.boolean()
})




const Login = props  => {



    const [login, setlogin] = useState({
        username: "",
        password:"",
        terms:false
      });
    
      const handleChanges = event => {
        event.persist()
        validate(event)
        console.log(login, event.target.checked);

        let value = event.target.type === 'checkbox' ? event.target.checked :event.target.value 
        setlogin({...login, [event.target.name]: value});
    };

      const submitForm = (event) => {
        event.preventDefault();
        console.log("Submitted!");
        axios.post('https://reqres.in/api/users', login)
        .then( response => console.log(response))
        .catch(err => console.log(err))
      };

      const [errors, setErrors] = useState({
        username: "",
        password:"",
        terms:""
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
            value={login.username}
          />
          {errors.username.length > 5 ? <p>{errors.username}</p>: null}

          <label htmlFor='password'>Password</label>
          <input
            value={login.password}
            name="password"
            id="password"
            type="password"
            placeholder="Please enter a valid password"
            onChange={handleChanges}
          />
            <hr></hr>
        
            <button onClick="submit">Login</button>

        </form>

      );
    };



export default Login;