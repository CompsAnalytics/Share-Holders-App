import React from 'react'
import {useNavigate } from 'react-router-dom';
import { useState} from 'react';
import swal from "sweetalert";
//import {Link } from 'react-router-dom';
//const apiUrl='http://192.168.4.6:8020/api' ;

const SignUp = () => {
  const [memberNo, setMemberNo] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/v1/auth/changePassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberNo,
        otp,
        password,
        password_confirmation: passwordConfirmation
        
      }),
    }).then((r) => {
      if (r.ok) {
        swal("Password Changed Successfull","","success")
        navigate('/')
        // r.json().then((user) => setUser(user));
      }else{
        swal("An Error Occured","","warning")
      }
    });
  }
  function sendToken(e) {
    e.preventDefault();
  
    fetch("/api/v1/auth/registerOtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({memberNo}),
    }).then((r) => {
      if (r.ok) {
        swal("Otp Sent Successfull","","success")
       
      }else{
        swal("An Error Occured","","warning")
      }
    });
    
  }

  return (
    <div className='signup'>
      <form className='frm' onSubmit={handleSubmit}>
        <h1 className='txt'>Change Password</h1>
        <label htmlFor="memNo">Member No</label>
        <input
          type="text"
          id="memNo"
          autoComplete="off"
          required
          value={memberNo}
          onChange={(e) => setMemberNo(e.target.value)}
        />
        <button className='btns' type="submit" onClick={sendToken}>Send Otp</button>
        <label htmlFor="username">OTP</label>
        
        <input
          type="text"
          id="passKey"
          autoComplete="off"
          required
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        
       
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          required
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="off"
        />
        
       
        <button className='btns' type="submit">Change Password</button>
      </form>
    </div>
  );
}

export default SignUp