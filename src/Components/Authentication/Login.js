import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import DividendList from '../Reports/DividendList';
import React from 'react';

import {Link } from 'react-router-dom';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
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
          <label>Member No</label>
      <Form.Item
      
        name="memberNo"
        rules={[
          {
            required: true,
            message: 'Please input your Member No!',
          },
        ]}
      >
        <Input id='memberNo' autoComplete="off"  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Member No" />
      </Form.Item>
      <label>Password</label>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/ChangePassword">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
      
        <Button type="primary" htmlType="submit" className="login-form-button"  >
        
          Log in
        </Button>
        

        <Link to="/SignUp">  <a className="login-form-forgot" href="/SignUp">
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