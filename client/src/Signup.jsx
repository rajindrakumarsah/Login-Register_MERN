import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Signup() {
  //use state is used for usig this funtion globally
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    //this is used to navigate the route
    const navigate = useNavigate()

    //function which send the data
    const handleSubmit = (e) => {
        e.preventDefault()
        //3001 is the server side url , setting it to send the data to database side
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(res => {
          // when we click on register it will redirect to the login page automatically
            navigate('/login')
        }).catch(err => console.log(err))
    }

  return (
    //design for register 
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        {/* //this handlesubmit funtion will send the data to the database when we click on register button */}
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              // this function will asign the name to when we press register button
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              //this function will asign the email to when we press register button
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
              //this function will asign the password to when we press register button
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
          </form>
          <p>Already Have an Account</p>
          //link is used to go for login 
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
          </Link>
        
      </div>
    </div>
  );
}

export default Signup;

