import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import React from 'react';

import {Link } from 'react-router-dom';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 23,
  },
};
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const [form] = Form.useForm();
  function handleSubmit(e){
    fetch("/api/v1/auth/authenticate",

    {
      method: 'POST',
      headers:{
        "Content-Type":"application/json",
         "accept":"application/json"
      },
      body:JSON.stringify(e)

    }).then((res) => res.json())
    .then((data) => {
      console.log("sign in res ", data);
      localStorage.setItem('access', data.token);
      localStorage.setItem('member', data.memberNo);
     const memNo =data.memberNo;

        alert("login Successful" );
        window.location.replace("/app");
        let email=document.querySelector('#memberNo').value
        document.querySelector('#memno').value=memNo;
    })
    .catch(err => console.log(
      "There was an error logging in", err
    ))
    
    
    form.resetFields();
  }

  return (
    <Form
      name="normal_login"
      {...layout}
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      onSubmit= {handleSubmit}
    >
      <div className='login'>
        <div className='border'>
          <label style={{marginLeft:'10px'}}>Member No</label>
      <Form.Item
      
        name="memberNo"
        rules={[
          {
            required: true,
            message: 'Please input your Member No!',
          },
        ]}
      >
        <Input className='input' id='memberNo' autoComplete="off"  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Member No" />
      </Form.Item>
      <label style={{marginLeft:'10px'}}>Password</label>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input className='input'
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
      
         
        

        <a className="txt" href="/ChangePassword">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
      
        <Button style={{background:'green',color:'white'}}  htmlType="submit" className="input"  >
        
          Log in
        </Button>
        

        <Link to="/SignUp">  <a className="txt" href="/SignUp">
          Register now!
        </a> </Link>
      </Form.Item>
      </div>
      {/* <DividendList memno={memNo}/> */}
      </div>
      
    </Form>
  );
};

export default Login;