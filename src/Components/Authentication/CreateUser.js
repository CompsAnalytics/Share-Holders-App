import React, { useEffect, useState } from 'react'
import { LockOutlined } from '@ant-design/icons';
import { Button,  Form, Input } from 'antd';
import axios from 'axios';
//const apiUrl='http://192.168.4.6:8020/api' ;


const layout = {

    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 20,
      
    },
  };
  
const CreateUser = () => {
  const [memNo,setMemNo] = useState("")
  const [key,setKey] = useState("")
    const [form] = Form.useForm();
    function handleSubmit(e) {
        e.preventDefault();
        fetch("api/v1/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify(e)
        }).then((r) => {
          if (r.ok) {
            alert("Password Updated Successfull")
            //navigate('/app')
            window.location.replace("/");
          }
        });
        form.resetFields();
      }
      function sendToken(e) {
        e.preventDefault();
      
        fetch("/api/v1/auth/registerOtp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({memNo,key}),
        }).then((r) => {
          if (r.ok) {
            alert("Otp Sent Successfull")
           
          }
        });
        form.resetFields();
      }

  return (
    <Form
    name="nest-messages"
    
    {...layout}
    onFinish={handleSubmit}
    onSubmit= {handleSubmit}
  >
    <div className='signup'>
    <label>Member No</label>
    <Form.Item
      name="memNo"
      rules={[
        {
          required: true,
          message: 'Please input your Member No!',
        },
      ]}
    >
      <Input  placeholder="Member No" value={memNo} />
    </Form.Item>
    <Form.Item>
      
      <Button type="primary" htmlType="submit" className="login-form-button" onClick={sendToken} >
      
        Generate Token
      </Button>
      </Form.Item>
    <label>Token</label>
<Form.Item
  name="otp"
  rules={[
    {
      required: true,
      message: 'Please input Otp!',
      
    },
  ]}
>
  <Input 
  type="otp"
  placeholder="Otp" value={key} />

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
          autoComplete="new-password"
        />
      </Form.Item>
      <label>Confirm Password</label>
      <Form.Item
        name="password_confirmation"
        rules={[
          {
            required: true,
            message: 'Please Confirm Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>
     
      <Form.Item>
      
        <Button type="primary" htmlType="submit" className="login-form-button"  >
        
          Sign Up
        </Button>
        </Form.Item>
        </div>
    </Form>
  )
}

export default CreateUser