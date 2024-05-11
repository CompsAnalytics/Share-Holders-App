import React from 'react'
import { Form, Table, Input,Select} from 'antd';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const columns = [
    {
      title: 'Mode',
      dataIndex: 'mode',
      key: 'mode',
      render: () => {
      return (
        <Select
        id='months'
      defaultValue="CAPITALIZE TO SHARES"
      style={{
        width: 250,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'CAPITALIZE TO SHARES',
          label: 'CAPITALIZE TO SHARES',
        },
        {
          value: 'PAY THROUGH EFT(MOBILE)',
          label: 'PAY THROUGH EFT(MOBILE)',
        },
        {
          value: 'OFFSET A LOAN',
          label: 'OFFSET A LOAN',
        },
        {
          value: 'OFFSET HOSPITAL BILL',
          label: 'OFFSET HOSPITAL BILL',
         // disabled: true,
        },
      ]}

       />
        );
      },
      
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render:() =>{
      return  <Input
      ></Input>
      }
    },
     {
      title: 'Amount',
      dataIndex: 'amount',
      
      
    },
    
];

const dataSource=[
  {
    mode:'test',
    amount:0
  },
  {
    mode:'test',
    amount:0
  },
  {
    mode:'test',
    amount:0
  },
  {
    mode:'test',
    amount:0
  },
  {
    mode:'test',
    amount:0
  },
]



const SplitDividend = () => {
    const [form] = Form.useForm();
   function handleSubmit(){

   }
  return (
      
        <Form form={form} {...layout} name="nest-messages" onFinish={handleSubmit}  onSubmit={handleSubmit}> 
          <Table columns={columns}
           dataSource={dataSource}
           
           />
        <Form.Item name="gross" label="Gross Dividend">
        <Input  />
      </Form.Item>
      <Form.Item name="total" label="Total">
        <Input />
      </Form.Item>
      <Form.Item name="balance" label="Balance">
        <Input  />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <button type="primary" htmlType="submit" >
          Submit
        </button>
      </Form.Item>
      </Form>
    
  )
}

export default SplitDividend