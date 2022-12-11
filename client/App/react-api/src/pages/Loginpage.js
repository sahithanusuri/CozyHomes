import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Mainpage from './Mainpage.js'

async function loginUser(credentials) {
 return fetch('http://localhost:4000/api/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

function Loginpage(){

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    console.log(token.token);
    setToken(token.token);
    setMessage(token.message);
  }

  if (message == 'Login successful'){
    return (
      <Mainpage />
    )
  }else if(message == 'No user found' || message == 'Invalid'){
    return(
      <div>
          <form class="register_form" onSubmit = {handleSubmit}>
              <div class="form-group">
                <label for="name" class="required">Email</label>
                <input type="email" value={username} onChange = {event => setusername(event.target.value)} class="form-control" id="email" placeholder="Username" name="name" />
              </div>
              <div class="form-group">
                <label for="name" class="required">Password</label>
                <input type="password" value={password} onChange = {event => setPassword(event.target.value)} class="form-control" id="pwd" placeholder="Password" name="pwd" />

              </div>
              <div class="text-center">
                <div id='result'></div> <br />
                <center><p class = "text-danger">Please try with valid credentials</p></center>
                <button type="submit" class="btn btn-primary btn-lg" id="validate">LOGIN</button>
              </div>

            </form>


      </div>
    )
  }

  return(
      <div>
          <form class="register_form" onSubmit = {handleSubmit}>
              <div class="form-group">
                <label for="name" class="required">Email</label>
                <input type="email" value={username} onChange = {event => setusername(event.target.value)} class="form-control" id="email" placeholder="Username" name="name" />
              </div>
              <div class="form-group">
                <label for="name" class="required">Password</label>
                <input type="password" value={password} onChange = {event => setPassword(event.target.value)} class="form-control" id="pwd" placeholder="Password" name="pwd" />

              </div>
              <div class="text-center">
                <div id='result'></div> <br />
                <button type="submit" class="btn btn-primary btn-lg" id="validate">LOGIN</button>
              </div>
            </form>

      </div>
  );

}
// Loginpage.propTypes = {
//   setToken: PropTypes.func.isRequired
// };
export default Loginpage
