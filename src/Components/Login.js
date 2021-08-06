import React, { useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import './Styles/registration.css';
function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag,setFlag] = useState(0);
  
  useEffect(() => {
    if(localStorage.getItem('user-info') && flag===1){
        history.push("/home");
    }
  },[])
  function login(event){
    event.preventDefault();
      const details = {
          email: email,
          password: password
      }
      
      axios.post("http://localhost:5005/login",{details})
      .then(res=>{
          console.log(res);
          console.log(res.data.flag)
          setFlag(res.data.flag)
          console.log(flag);
          if(flag==1){
                console.log("login Successful");
                localStorage.setItem("user-info",JSON.stringify(res))
            }
            else{
                console.log("Invalid Email or Password");
            }

      })
      .catch(err =>{
          console.log(err);
      })
      if(flag===1)history.push('/home');
  }
 
  return (
      <>
      <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Login</h2>
                            <br/>
                            <form className="register-form" id="register=form">
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>&nbsp;&nbsp;&nbsp;
                                    <input type="email" name="email" id="email" autoComplete="off"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="Your email"/>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-password"></i>
                                    </label>&nbsp;&nbsp;&nbsp;
                                    <input type="password" name="password" id="password" autoComplete="off"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder="password"/>
                                </div>
                                <br/>
                                <div className="form-group form-button">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="submit" name="login" id="login" className="form-submit"
                                    onClick={login}
                                    value="login"/>
                                </div>
                            </form><br/>
                            {/* <div className="signup-image">
                                <figure className="figure">
                                    <img src={Hexagonlogo} alt="registration image"/>
                                </figure>
                               
                            </div> */}
                            {(flag==1) && <p className="message">Login Successful!!! please click on login again.</p>}
                            {(flag==2) && <p className="message1">Invalid Email or password.</p>}
                            {(flag==3) && <p className="message1">Please check the input again.</p>}
                        </div>
                    </div>
                </div>
    </>
  );
}
 
export default Login;