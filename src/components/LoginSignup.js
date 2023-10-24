import React, { useState } from "react";
import "../Styles/LoginSignup.css";
import axios from 'axios'
export default function LoginSignup() {
  const [state, setState] = useState("Signup");
  const [userDetail, SetUserDetail] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    SetUserDetail({
      ...userDetail,
      [name]: value,
    });
  };
  const LoginHandler = (e) => {
    e.preventDefault();
    setState("Login");
    if(userDetail.password!==''&&userDetail.email!==''){
    
    axios.post('http://localhost:8000/login/',userDetail).then((res)=>{
        console.log(res.data)
        if(res.data.error){
            alert("invalid user")
        }
        else{
            alert(res.data.massage)
        }
    })}

  };
  const SignupHandler = (e) => {
    e.preventDefault();
    setState("Signup");
    if(userDetail.password!==''&&userDetail.email!==''){
    axios.post('http://localhost:8000/signup/',userDetail).then((res)=>{
        console.log(res.data)
        if(res.data.error){
            alert("user already exist")
        }
        else{
            alert(res.data.massage)
            setState("Login");
        }
    })
    SetUserDetail(prevState => ({
        ...prevState,
        userName: "",
        email: "",
        password: "",
      }));}
  };
  return (
    <>
      <div className="container">
        <div className="header">{state}</div>
        <div className="inputs">
          {state === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <input
                placeholder="Name"
                type="text"
                value={userDetail.userName}
                name="userName"
                onChange={changeHandler}
              />
            </div>
          )}
          <div className="input">
            <input
              placeholder="email"
              type="email"
              name="email"
              value={userDetail.email}
              onChange={changeHandler}
            />
          </div>
          <div className="input">
            <input
              placeholder="password"
              type="password"
              name="password"
              value={userDetail.password}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="f-password">
          forgot password ?<span>click here</span>
        </div>
        <div className="submit-container">
          <button
            className={state === "Login" ? "submit" : "submit grey"}
            onClick={LoginHandler}
          >
            login
          </button>
          <button
            className={state === "Signup" ? "submit" : "submit grey"}
            onClick={SignupHandler}
          >
            signup
          </button>
        </div>
      </div>
    </>
  );
}
