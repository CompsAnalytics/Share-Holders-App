import React from 'react'
import { useEffect,useState } from 'react';
import Gurantorship from './Gurantorship';
import axios from 'axios'
const memberno =localStorage.getItem("member");
//const apiUrl='http://192.168.4.6:8020/api' ;
const accessToken =localStorage.getItem("access");
console.log("ACCESS TOKEN FROM LOCAL STORAGE ", accessToken)
const authAxios =axios.create({
  // baseUrl:'http://localhost:8080/api',
  headers: {
    Authorization:`Bearer ${accessToken}`,
    
  }
})
const GurantorList = () => {
const [guarantors, setGuarantors] = useState([]);
const [header, setHeader] = useState([]);
const [member, setMember] = useState([]);

//${memberNo}
useEffect(() =>{
  authAxios.get(`/api/v1/guarantor/${memberno}`)
.then((res) => {
  
  // if (res.ok) {
  setGuarantors(res.data.data);
  console.log('guarantorrrrrrrrrr dividend ', res.data);

// } 

      
    }).catch(error =>{
      console.log(error);
    });

},[])

useEffect(() =>{
  authAxios.get(`/api/v1/header/1`)
  .then((res) => {
    console.log('res header ', res.data)
      setHeader(res.data);
   
 
        
      }).catch(error=>{
        console.log(error);
      });
  
  },[])
   
  useEffect(()=> {
    authAxios.get(`/api/v1/member/${memberno}`)
    .then((res) => {
      console.log('res member ', res.data)
      // if (res.ok) {
      setMember(res.data);
      }).catch(error =>{
        console.log(error);
      });
    },
[])


  return (
    <div>
       <h2>Guarantor Statement</h2> 
        
           
                
                
           
   
    <table >
    <tbody>

    <tr >
                <th >Name:{member.holdersName}</th>
                
                </tr>
          
   
       
            <tr >
                <th >Member_no:{member.accNo}</th>
                <th  ></th>
                <th  ></th>
                  <th  style={{borderRight:"1px solid"}} ></th>
                <th >Tel:{member.tel1}</th>
                </tr>
                <tr>
                 <th>Email:{member.emailAdd}</th> 
                 <th  ></th>
                 <th  ></th>
                  <th  style={{borderRight:"1px solid"}} ></th>
                <th>Id no:{member.idNo}</th>
                </tr>
                
              
                <tr>
                <th>Print Date:{guarantors.curDate}</th>
                
                </tr>
      { <tr >
        <th className='th1' >
          <h3 >Input Date</h3>
        </th>
        <th className='th1'>
          <h3 >Loan No</h3>
        </th>
        <th className='th1'>
          <h3 >Loan type</h3>

        </th>
        <th className='th1'>
          <h3 >Name</h3>
          
        </th>
        <th className='th1'>
          <h3 >Loan Amount</h3>
        </th>
        <th className='th1'>
          <h3 >Amt Guaranteed</h3>
        </th>
        <th className='th1'>
          <h3 >Loan Balance</h3>
        </th>
        <th className='th1'>
          <h3 >Guarantor Level</h3>
        </th>
        
      </tr> }
      

      {guarantors.map(guarantor => {
        return ( 
        <Gurantorship
        key={guarantor.id}
        date={guarantor.cdate}
        loanno={guarantor.loanNo}
        purpose={guarantor.loanPurpose}
        member={guarantor.memberName}
        amount={guarantor.lamount}
        gamount={guarantor.amountGuaranteed}
        outstanding={guarantor.outstanding}
        gtype={guarantor.guarantorType}
       
        />
       );
        } 
      )
    }
    
    
    
    </tbody>
  </table>
  </div>
);
    
}

export default GurantorList