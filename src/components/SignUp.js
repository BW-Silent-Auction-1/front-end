import React, { useState } from 'react';
import ReactDOM from "react-dom";
import '../App.css';
import * as yup from 'yup';
import axios from 'axios';
import { Button } from 'antd';

const schema = yup.object().shape({
    name: yup.string().required("Please enter a name"),
    password: yup.string(),
    terms: yup.boolean()
})




const SignUp = props  => {



    const [signUp, setSignUp] = useState({
        name: "",
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
        axios.post('https://reqres.in/api/users', signUp)
        .then( response => console.log(response))
        .catch(err => console.log(err))
      };

      const [errors, setErrors] = useState({
        name: "",
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
          {errors.name.length > 5 ? <p>{errors.name}</p>: null}

          <label htmlFor='password'>Password</label>
          <input
            value={signUp.password}
            name="password"
            id="password"
            onChange={handleChanges}
            placeholder="Enter valid password"
          />
          <label htmlFor='repassword'>Password</label>
          <input
            value={signUp.password}
            name="repassword"
            id="repassword"
            onChange={handleChanges}
            placeholder="Re-enter password"
          />
            <hr></hr>
        
            <Button type="submit">Sign-Up!</Button>

        </form>

      );
    };



export default SignUp;