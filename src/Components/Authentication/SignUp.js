import React from 'react'
import {useNavigate } from 'react-router-dom';
import { useState} from 'react';
import swal from "sweetalert";
//import {Link } from 'react-router-dom';

const SignUp = () => {
  const [memberNo, setMemberNo] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberNo,
        mobileNo,
        email,
        password,
        password_confirmation: passwordConfirmation,
        otp
      }),
    }).then((r) => {
      if (r.ok) {
        swal("Registration Successfull","","success")
        navigate('/')
        // r.json().then((user) => setUser(user));
      }else{
        swal("An Error Occured","","warning")
      }
    });
  }

  return (
    <div className='signup'>
      <form className='frm' onSubmit={handleSubmit}>
        <h1 className='txt'>Create an Account</h1>
        <label htmlFor="username">Member No</label>
        <input
          required
          type="text"
          id="member_no"
          autoComplete="off"
          value={memberNo}
          onChange={(e) => setMemberNo(e.target.value)}
          
        />
        <label htmlFor="username">Mobile No</label>
        <input
          required
          type="text"
          id="mobile_no"
          autoComplete="off"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
        <label htmlFor="username">Email</label>
        <input
          required
          type="email"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          title="Must atleast be 8 characters"
          required 
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        
        <label htmlFor="password">Password Confirmation</label>
        <input
         pattern= {password}
          required
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          errorMessage="passsword dont match"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="username">OTP</label>
        <input
          required
          type="text"
          id="otp"
          autoComplete="off"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
       
        <button className='btns' type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp