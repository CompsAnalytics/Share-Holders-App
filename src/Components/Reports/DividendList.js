import React, { useEffect, useState } from 'react'
import Dividends from "../Reports/Dividends";
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
const DividendList = () => {
const [dividends, setDividends] = useState([]);
const [header, setHeader] = useState([]);
const [member, setMember] = useState([]);
//const [sum, setSum] = useState(0);

//${memberNo}
useEffect(() =>{
  authAxios.get(`/api/v1/dividendPayable/${memberno}`)
.then((res) => {
  
  // if (res.ok) {
  setDividends(res.data);
  console.log('res dividend ', res.data);

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
      <p>{header.organisationName}</p>
       <h2>Dividend Statement</h2> 
       
           
                
              
                
           
       
   
    <table >
    <tbody>

    <tr >
                <th >Name:{member.holdersName}</th>
                
                </tr>
          
  
       
            <tr >
                <th  >member_no:{member.accNo}</th>
                <th  ></th>
                <th  style={{borderRight:"1px solid"}} ></th>

                <th>tel:{member.tel1}</th>
                
                </tr>
                <tr>
                 <th>email:{member.emailAdd}</th> 
                 <th  ></th>
                <th  style={{borderRight:"1px solid"}} ></th>
                <th>Id no:{member.idNo}</th>
                </tr>
               
                
                <tr>
                <th>Print Date:</th>
                
                </tr>
      { <tr >
        <th className='th1' >
          <h3 >Date</h3>
        </th>
        <th className='th1'>
          <h3 >Narration</h3>
        </th>
        <th className='th1'>
          <h3 >Ref</h3>

        </th>
        <th className='th1'>
          <h3>Dividend</h3>
          
        </th>
        <th className='th1'>
          <h3 >Paid</h3>
        </th>
        <th className='th1'>
          <h3 >Running Amt</h3>
        </th>
        
        
      </tr> }
      

      {dividends.map(dividend => {
        return ( 
        <Dividends
        key={dividend.id}
        date={dividend.date}
        item={dividend.item}
        reference={dividend.referenceNo}
        dividend={dividend.credit}
        paid={dividend.debit}
        sumTotal={(dividend.credit-dividend.debit)}
       
       
          
          
       
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

export default DividendList