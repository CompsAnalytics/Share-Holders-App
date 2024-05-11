import { Form, Input, InputNumber,Spin, Select, Space,AutoComplete} from 'antd';
import { useState } from 'react';
import React from 'react';
import axios from 'axios'
//const apiUrl='http://localhost:8080/api' ;
const accessToken =localStorage.getItem("access");
const memberno =localStorage.getItem("member");
console.log("ACCESS TOKEN FROM LOCAL STORAGE ", accessToken)
console.log("member ", memberno)
const authAxios =axios.create({
  
  headers: {
    Authorization:`Bearer ${accessToken}`
  }
})
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

const AddLoanForm = () => {

  const [total,setTotal] =useState(0)
  const [value, setValue] = useState([]);
  const onFinish = (values) => {
    console.log(values);
  };
  const [form] = Form.useForm();


 
  const getIntrest = (e) =>{
    e.preventDefault();
    let currentAmount=document.querySelector('#amount').value
    let totalInterest=0;
    if (currentAmount<=5000){
     totalInterest = 500;
    }else{
      totalInterest = parseInt(currentAmount)*0.1;
    }
    
     let totalAmount = parseInt(currentAmount)+totalInterest;
     let months = document.getElementById('months').value
     let deduction =totalAmount/parseInt(months)
    document.querySelector('#totalamount').value=totalAmount;
    document.querySelector('#totalded').value=deduction;
    setTotal(totalAmount)
    console.log(totalAmount);
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  function handleSubmit(e){
    //e.preventDefault();
    console.log(e, " is the data")
    authAxios.post("/api/v1/loan",e)
    
    .then((r) => {
      if (r.ok) {
        alert("Registration Successfull")
        
       
      }
    });
      
      form.resetFields();
    

  }
 


  return (
    <Form  form={form} {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages} onSubmit={handleSubmit}>
      <Form.Item
        name="name"
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
        name="member_no"
        label="Member No"
        rules={[
          {
            required: true,
          },
        ]}
      >
        
        <Input  />
     
      </Form.Item>
      <Form.Item
        name="member_no"
        label="Member No"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input   />
      </Form.Item>
     
      <Form.Item name="category" label="Category">
        <Input placeholder='Search Member name' />
      </Form.Item>
      <Form.Item
        name="amount"
        label="Amount"
        rules={[
          {
            required: true,
          },
        ]}
      
      >
        <Input id='amount'  />
      </Form.Item>
      

      <Form.Item
        name="duration"
        label="Duration"
        rules={[
          {
            required: true,
          },
        ]}
      
      >
     <Space wrap>
    <Select
    id='months'
      defaultValue="1"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: '1',
          label: '1',
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
        {
          value: '4',
          label: '4',
         // disabled: true,
        },
      ]}
    />
    </Space>
    <button onClick={getIntrest}>Compute</button>
      </Form.Item>

      <Form.Item
        name="totalamount"
        label="Total Amount"
        rules={[
          {
            required: true,
          },
        ]}
      
      >
        <Input  id='totalamount'  />
      </Form.Item>
      <Form.Item
        name="mnthded"
        label="Monthly Deduction"
        rules={[
          {
            required: true,
          },
        ]}
      
      >
        <Input id='totalded' />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <button type="primary" htmlType="submit" >
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default AddLoanForm;