import { useEffect, useState } from 'react';
import React from 'react'
import ShareStatementList from './ShareStatementList';
import axios from 'axios'

const memberno =localStorage.getItem("member");
const apiUrl='http://localhost:8080/api' ;
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
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Narration</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Ref</h3>
  
          </th>
          <th>
            <h3 className="ui center aligned header">Acoount</h3>
            
          </th>
          <th>
            <h3 className="ui center aligned header">Sold</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Bought</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Running Amt</h3>
          </th>
          
        </tr> }

        
         <tr >
          <th >
            <h3 className="ui center aligned header">BAL/BF</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"></h3>
          </th>
          <th>
            <h3 className="ui center aligned header"></h3>
  
          </th>
          <th>
            <h3 className="ui center aligned header"></h3>
            
          </th>
          <th>
            <h3 className="ui center aligned header"></h3>
          </th>
          <th>
            <h3 className="ui center aligned header"></h3>
          </th>
          <th>
            <h3 className="ui center aligned header">{sum}</h3>
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
      
      
      
      </tbody>
    </table>
    </div>
  );
    
}

export default ShareStatement