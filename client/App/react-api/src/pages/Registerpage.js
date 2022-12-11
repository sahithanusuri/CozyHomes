import React from "react";
import { useState, useEffect} from 'react';
import Loginpage from './Loginpage.js';
import 'bootstrap/dist/css/bootstrap.css';
import './Registerpage.css';

async function registerUser(credentials) {
 return fetch('http://localhost:4000/api/register', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

function Registerpage(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [token,setToken] = useState("");

    // const handleInputChange = (e) => {
    //     const {id , value} = e.target;
    //     if(id === "name"){
    //         setName(value);
    //     }
    //     if(id === "email"){
    //         setEmail(value);
    //     }
    //     if(id === "password"){
    //         setPassword(value);
    //     }
    //     if(id === "confirmPassword"){
    //         setConfirmPassword(value);
    //     }
    //
    // }

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await registerUser({
        name,
        email,
        password
      });
      console.log(token);
      setToken(token);

    }

    if (token.message == 'User added successfully'){
      return (
        // <Loginpage />
        <div id="addpadding">
        <center>
          <h4>Registerd successfully!</h4>
          <p> Click <a href="/loginpage"> here </a> to login</p>
        </center>
        </div>

      )
    }
    // const handleSubmit  = () => {
    //     console.log(name,email,password,confirmPassword);
    // }

    return(
        <div className="form">
          <form onSubmit = {handleSubmit}>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="name">Name </label>
                    <input className="form__input" type="text" value={name} onChange = {event => setName(event.target.value)} id="name" placeholder="Name"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {event => setEmail(event.target.value)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {event => setPassword(event.target.value)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {event => setConfirmPassword(event.target.value)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button class="btn btn-primary" type="submit" >Register</button>
            </div>
          </form>
        </div>
    );

}

export default Registerpage
