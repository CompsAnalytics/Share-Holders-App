import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'



const UpdateLoanData = (onUpdateItem) => {
    const [data,setData] = useState([])
    const [memberno,setMemberNo] = useState("")
   const [member,setMember] = useState("")
   const [category,setCategory] = useState("")
    const [amount,setAmount] = useState("")
    const [id,setId] = useState("")
    const location = useLocation();
    const tableData = location.state.data;

     useEffect(()=> {
    fetch("http://localhost:8001/members/1")
    .then((response) => {
        if (response.ok) {
          response.json().then((data) => setData(data));
        }
      });
    },
[])

useEffect(()=>{
  console.log("This is the data from table ", tableData)
}, [])
// function selectData(id){

//     let item = data[id-1];
//     setId(item.id)
//     setMemberNo(item.memberno)
//     setMember(item.member)
//     setAmount(item.amount)
//     setCategory(item.category)
//     setMember(item.member)

// }
function handleUpdate(){
    let item ={memberno,member,category,amount}
    fetch(`http://localhost:4000/loandetails/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       item
      }),
    })
      .then((r) => r.json())
      .then((updatedLoan) => onUpdateItem(updatedLoan));
  }
  return (
    <div className='edit'>UpdateLoanData
      
        <input value={memberno} placeholder='Member no' />
        <input value={member} placeholder='Member'/>
        <input value={category} placeholder='Category'/>
        <input value={amount} placeholder='Amount'/>
        <input value={id} placeholder='Id'/>
        <button className='btn' onClick={handleUpdate}>UpdateDetails</button>
    </div>
  )
}

export default UpdateLoanData