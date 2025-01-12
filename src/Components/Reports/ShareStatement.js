import { useEffect, useState } from 'react';
import React from 'react'
import ShareStatementList from './ShareStatementList';
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
const ShareStatement = () => {
  const [shares, setShares] = useState([]);
  const [header, setHeader] = useState([]);
  const [member, setMember] = useState([]);
  const [sum, setSum] = useState([]);
  const [totalSavings, setTotalSavings] = useState([]);
  
  //${memberNo}
  useEffect(() =>{
    authAxios.get(`/api/v1/savings/${memberno}`)
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

  useEffect(()=> {
    authAxios.get(`/api/v1/savings/sum/${memberno}`)
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
  authAxios.get(`/api/v1/savings/sumTotal/${memberno}`)
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
        <div className='head'>
       <h2 >Deposits/Savings Statement for the last 6  Months</h2>
       </div>
      
      <table >
      <tbody>
       
              <tr >
                  <th >Name:{member.holdersName}</th>
                  <th  ></th>
                  <th  ></th>
                  <th  ></th>
                  <th  ></th>
                  <th  ></th>
                  <th  ></th>
                  </tr>
               
                  <tr>
                  <th  >Member_no:{member.accNo}</th>
                  <th  ></th>
                  <th  style={{borderRight:"1px solid"}} ></th>
                  <th >Tel:{member.tel1}</th>
                  </tr>
                  <tr>
                  <th >Email:{member.emailAdd}</th>
                  <th  ></th>
                  <th style={{borderRight:"1px solid"}}  ></th>
                  <th >Id no:{member.idNo}</th>
                  </tr>
                  <tr>
                  <th >Print Date</th>
                  </tr>
        { <tr >
          <th className='th1'  >
            <h3 >Input Date</h3>
          </th>
          <th className='th1'>
            <h3 >Narration</h3>
          </th>
          <th className='th1'>
            <h3 >Ref</h3>
  
          </th>
          
          <th className='th1'>
            <h3 >Savings</h3>
          </th>
          <th className='th1'>
            <h3 >Running Amt</h3>
          </th>
          
        </tr> }

        
         
  
        {shares.map(share => {
          return ( 
          <ShareStatementList
         // key={share.id}
          date={share.inputDate}
          item={share.narration}
          reference={share.refNo}
          savings={share.savings}
          runningtotal={share.runningTotal}
         
          />
         );
          } 
        )
      }
      
      <tr>
      <th className='th1'>
            <h3 >Total Amount</h3>
          </th>
          <th className='th1'>
            <h3 ></h3>
          </th>
          
         
          <th className='th1'>
            <h3 ></h3>
          </th>
          <th className='th1'>
        <h3 >{totalSavings.toLocaleString("en-Ke")}</h3>
          </th>
          <th className='th1'>
        <h3 >{totalSavings.toLocaleString("en-Ke")}</h3>
          </th>
          </tr>
      
      </tbody>
    </table>
    </div>
  );
    
}

export default ShareStatement