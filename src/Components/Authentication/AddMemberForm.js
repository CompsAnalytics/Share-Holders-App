import { Form, Input} from 'antd';

import React from 'react';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const AddMemberForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const [form] = Form.useForm();

  function handleSubmit(e){
    //e.preventDefault();
    console.log(e, " is the data")
    fetch("/api/members",
    {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        "accept":"application/json"
      },
      body: JSON.stringify(e)

    })
    .then(res => res.json())
    .then (data => {alert('Data submitted successfully')
   } )
      
      form.resetFields();
    

  }
 


  return (
    <Form  form={form} {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages} onSubmit={handleSubmit}>
      <Form.Item
        name="member"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  />
      </Form.Item>
      <Form.Item
        name="idno"
        label="Id No"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item name="gender" label="Gender">
        <Input  />
      </Form.Item>
      <Form.Item name="age" label="Age">
        <Input  />
      </Form.Item>
      <Form.Item name="residence" label="Residence">
        <Input  />
      </Form.Item>
      <Form.Item name="mobile" label="Mobile">
        <Input />
      </Form.Item><Form.Item name="email" label="Email">
        <Input  />
      </Form.Item>
      <Form.Item
        name="savings"
        label="Savings"
        rules={[
          {
            required: true,
          },
        ]}
      
      >
        <Input />
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <button type="primary" htmlType="submit" >
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default AddMemberForm;