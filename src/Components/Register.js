import React from 'react';
import { useState,useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Hexagonlogo from './Images/hexagon-logo.png';
import './Styles/registration.css';



function Register() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState("")
    const [cpassword,setCpassword] = useState("")
    const [success,setSuccess] = useState(false);
    const [mispassword,setmispassword] = useState(false);
    const [allNotOk,setallNotOk] = useState(true)
    const [emailExists,setemailExists] = useState(false)
    const [phoneExists,setphoneExists] = useState(false)
    
    function validation(input,value){
        if(value=="email"){
            const email = { email: input};

            axios.post("http://localhost:5005/email",{email})
            .then(res=>{
                let exists = res.data.exists
                if(exists){
                    setemailExists(true);
                    //setallNotOk(true);
                }
            })
            .catch(err =>{
                console.log(err);
            })
        }
        if(value=="phone"){
            const phone = { phone: input};

            axios.post("http://localhost:5005/phone",{phone})
            .then(res=>{
                let exists = res.data.exists
                if(exists){
                    setphoneExists(true);
                    //setallNotOk(true);
                }
            })
            .catch(err =>{
                console.log(err);
            })
        }
        if(value=="password"){
            if(!emailExists && !phoneExists && password!=cpassword){
                setallNotOk(false);
            }
            else if(!emailExists && !phoneExists && password===cpassword){
                setmispassword(true);
                setallNotOk(true);
            }
        }
    }

    function register(event){
        event.preventDefault();

        const details = {
            name:name,
            email:email,
            phone:phone,
            password:password
        }

        if(password!=cpassword){
            setmispassword(true);
            return;
        }
        
        console.log(details);
        console.log(success);
        axios.post("http://localhost:5005/register",{details})
        .then(res=>{
            // console.log("res");
            // console.log(res);
            // console.log("success");
            // console.log(res.data.success);
            setSuccess(res.data.success)
            let value = res.data.value
            console.log(success);
            if(success && value==="ok"){
                  console.log("Registration Successful");
                  setallNotOk(false);
                  //localStorage.setItem("user-info",JSON.stringify(res))
            }
            else if(!success && value=="both"){
                console.log("Eamil and Phone both exists!")
            }
            else if(!success && value=="email"){
                console.log("Email already exists!");
            }
            else if(!success && value=="phone"){
                console.log("Phone number already exists!");
            }
            else{
                  console.log("Invalid Username or Password");
            }
  
        })
        .catch(err =>{
            console.log(err);
        })
        //history.push('/home');
    }
    return (
        <>
            
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Register</h2>
                            <br/>
                            <form className="register-form" id="register=form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>&nbsp;&nbsp;&nbsp;
                                    <input type="text" name="name" id="name" autoComplete="off"
                                    onChange={(e)=>setName(e.target.value)}
                                    placeholder="Your name"/>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>&nbsp;&nbsp;&nbsp;
                                    <input type="email" name="email" id="email" autoComplete="off"
                                    onChange={(e)=>{setemailExists(false);setEmail(e.target.value);validation(e.target.value,"email");}}
                                    placeholder="Your email"/>
                                </div>
                                {emailExists && <p className="message1">Email already Exists please enter other email.</p>}
                                <br/>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>&nbsp;&nbsp;&nbsp;
                                    <input type="number" name="phone" id="phone" autoComplete="off"
                                    onChange={(e)=>{setphoneExists(false);setPhone(e.target.value);validation(e.target.value,"phone");}}
                                    placeholder="Your phone number"/>
                                </div>
                                {phoneExists && <p className="message1">phone number already Exists please enter other email.</p>}
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
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock material-icons-password"></i>
                                    </label>&nbsp;&nbsp;&nbsp;
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                    onChange={(e)=>{setmispassword(false);setCpassword(e.target.value);validation(cpassword,"password")}}
                                    placeholder="confirm password"/>
                                </div> 
                                {mispassword && <p className="message1">Password does not match please check again.</p>}
                                <br/>
                                <div className="form-group form-button">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="submit" name="register" id="register" className="form-submit"
                                    onClick={register}
                                    disabled={allNotOk}
                                    value="register"/>
                                </div>
                            </form><br/>
                            {/* <div className="signup-image">
                                <figure className="figure">
                                    <img src={Hexagonlogo} alt="registration image"/>
                                </figure>
                               
                            </div> */}
                            {success && <p className="message">Registration Successful!!!</p>}
                            {success && <p className="message1">Please click below link to Login</p>}
                            {success && <NavLink to='/login' className="signup-image-link">Click Here for Login</NavLink>}
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<NavLink to='/login' className="signup-image-link">I am already registered</NavLink>
                        </div>
                    </div>
                </div>
            

    
    </>
    );
}

export default Register;