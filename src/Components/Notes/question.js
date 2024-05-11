import { Button, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";


function Questions() {
   const [form] = Form.useForm();
   //const suggestions = props.suggestions;
 // const setSuggestion = props.setSuggestion;
   const [formData,setFormData] = useState({});
   //const [suggestion,setSuggestion] = useState({});

   function handleChangeForm (e){
    setFormData({...formData, [e.target.name]:[e.target.value]})
   }
    function handleSubmitForm(e){
   //  e.preventDefault();
   
    console.log(e);
    fetch("http://localhost:8001/suggestions", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
         
       },
       body: JSON.stringify(e) 
    })
    .then(res => res.json())
    .then(data => {
      //setSuggestion([...suggestions,data])
      console.log("submitted")
      form.resetFields();
    })
    .catch(err => console.log(err.message))
    }
    return(
       <div>
         <Form form={form} onFinish={handleSubmitForm} onSubmit={handleSubmitForm}>
            <Form.Item name='suggestion'>
               <TextArea></TextArea>
            </Form.Item>
            <Form.Item>
               <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
         </Form>

          {/* <form onSubmit={handleSubmitForm}>
          <textarea type="text" name="suggestion" value={formData.suggestion} onChange={handleChangeForm}/>
         
          <div className="btn">
            <button type="submit" className="btn1">Post</button>
            <button >x</button>
        </div>
           </form>  */}
           

       </div>
    )
   }
   export default Questions;