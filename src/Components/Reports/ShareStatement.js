import { useEffect, useState } from 'react';
import React from 'react'
import ShareStatementList from './ShareStatementList';
import axios from 'axios'

const memberno =localStorage.getItem("member");
const apiUrl='http://192.168.4.6:8020/api' ;
const accessToken =localStorage.getItem("access");
console.log("ACCESS TOKEN FROM LOCAL STORAGE ", accessToken)
const authAxios =axios.create({
  // baseUrl:'http://localhost:8080/api',
  headers: {
    Authorization:`Bearer ${accessToken}`,
    
  }
})
const ShareStatement = () => {
  const [shares, setShares] = useState([]);
  const [header, setHeader] = useState([]);
  const [member, setMember] = useState([]);
  const [sum, setSum] = useState([]);
  const [totalSavings, setTotalSavings] = useState([]);
  
  //${memberNo}
  useEffect(() =>{
    authAxios.get(`${apiUrl}/v1/savings/${memberno}`)
  .then((res) => {
    
    // if (res.ok) {
    setShares(res.data);
    console.log('res dividend ', res.data);
  
  // } 
  
        
      }).catch(error =>{
        console.log(error);
      });
  
  },[])
  
  useEffect(() =>{
    authAxios.get(`${apiUrl}/v1/header/1`)
    .then((res) => {
      console.log('res header ', res.data)
        setHeader(res.data);
     
   
          
        }).catch(error=>{
          console.log(error);
        });
    
    },[])
     
    useEffect(()=> {
      authAxios.get(`${apiUrl}/v1/member/${memberno}`)
      .then((res) => {
        console.log('res member ', res.data)
        // if (res.ok) {
        setMember(res.data);
        }).catch(error =>{
          console.log(error);
        });
      },
  [])

  useEffect(()=> {
    authAxios.get(`${apiUrl}/v1/savings/sum/${memberno}`)
    .then((res) => {
      console.log('res member ', res.data)
      // if (res.ok) {
      setSum(res.data);
      }).catch(error =>{
        console.log(error);
      });
    },
[])
useEffect(()=> {
  authAxios.get(`${apiUrl}/v1/savings/sumTotal/${memberno}`)
  .then((res) => {
    console.log('res member ', res.data)
    // if (res.ok) {
    setTotalSavings(res.data);
    }).catch(error =>{
      console.log(error);
    });
  },
[])
    return (
      <div>
        {/* <p>header{header.header}</p> */}
          <table >
              <tbody>
              <tr   >
                <th className='full'> {header.header_name}</th>
                  
                  </tr>
                 
                
                  <tr   >
                
                  <th className='full'>Deposits/Savings Statement for the last 6 Months </th>
                  </tr>
                  
              <tr >
                  <th >Name:{member.holdersName}</th>
                  
                  </tr>
              </tbody>
          </table>
      <table>
          <tbody>
         
              <tr >
                  <th className='half' >member_no:{member.accNo}</th>
                  <th className='half'>tel:{member.tel1}</th>
                  </tr>
                  <tr>
                  <th>email:{member.emailAdd}</th>
                  <th>Id no:{member.idNo}</th>
                  </tr>
                  </tbody>
                  </table>
                  <table>
                      <tbody>
                  <tr>
                  <th>Print Date</th>
                  
                  </tr>
          </tbody>
  
      </table>
     
      <table >
      <tbody>
        { <tr >
          <th >
            <h3 >Date</h3>
          </th>
          <th>
            <h3 >Narration</h3>
          </th>
          <th>
            <h3 >Ref</h3>
  
          </th>
          <th>
            <h3 >Acoount</h3>
            
          </th>
          <th>
            <h3 >Sold</h3>
          </th>
          <th>
            <h3 >Bought</h3>
          </th>
          <th>
            <h3 >Running Amt</h3>
          </th>
          
        </tr> }

        
         <tr >
          <th >
            <h3 >BAL/BF</h3>
          </th>
          <th>
            <h3 ></h3>
          </th>
          <th>
            <h3 ></h3>
  
          </th>
          <th>
            <h3></h3>
            
          </th>
          <th>
            <h3 ></h3>
          </th>
          <th>
            <h3 >{sum}</h3>
          </th>
          <th>
            <h3 >{sum}</h3>
          </th>
          
        </tr>
        
  
        {shares.map(share => {
          return ( 
          <ShareStatementList
          key={share.id}
          date={share.date}
          item={share.item}
          reference={share.referenceNo}
          receipt={share.receiptNo}
          bought={share.credit}
          sold={share.debit}
         
          />
         );
          } 
        )
      }
      
      <tr>
      <th>
            <h3 >Total Amount</h3>
          </th>
          <th>
            <h3 ></h3>
          </th>
          <th>
            <h3 ></h3>
          </th>
          <th>
            <h3 ></h3>
          </th>
          <th>
            <h3 ></h3>
          </th>
          <th>
        <h3 >{totalSavings}</h3>
          </th>
          <th>
        <h3 >{totalSavings}</h3>
          </th>
          </tr>
      
      </tbody>
    </table>
    </div>
  );
    
}

export default ShareStatement