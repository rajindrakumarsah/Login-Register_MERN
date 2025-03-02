import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


function Login() {

  // this is the useState for Login page
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    // thisis used to navigate the routes 
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault()
        // this is the backend login url , when we click on login , then these data will be sent to the bacekend url
        axios.post('http://localhost:3001/login', {email, password})
        .then(res => {
          //this is for dubuging the code
            // console.log("login: " + res.data);

            //if the data is correct 
            if(res.data.Status === "Success") {
              //if the user role is admin , then it will redirect to the dashboard
                if(res.data.role === "admin") {
                    navigate('/dashboard')
                } else { //to home page
                    navigate('/')
                }
            }
        }).catch(err => console.log(err)) //if there is some error , then it will show some errror in console 
    }

    return(
      //this is the design of the login page
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        //handleSubmit function will redirect you to the home page or dashboard page if we press correct Credentials
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              //this function will asign the name to when we press register button             
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
             //this function will asign the name to when we press register button
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          </form>
          <p>Already Have an Account</p>
          //when someone click on it, it will redirect to the register page
          <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Sign Up
          </Link>
        
      </div>
    </div>
    )
}

export default Login;
