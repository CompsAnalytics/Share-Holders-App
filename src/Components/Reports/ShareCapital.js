import React from 'react'
import axios from 'axios'
import ShareCapitalList from './ShareCapitalList';
import { useEffect,useState } from 'react';
import { saveAs } from "file-saver";

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
const ShareCapital = () => {
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "sharecapital.pdf"
    );
  };

  const [shares, setShares] = useState([]);
  const [header, setHeader] = useState([]);
  const [member, setMember] = useState([]);
  const [totalShareCapital,setTotalShareCapital]= useState([]);
  
  //${memberNo}
  useEffect(() =>{
    authAxios.get(`/api/v1/shareCapital/${memberno}`)
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
    authAxios.get(`/api/v1/shareCapital/sumTotal/${memberno}`)
    .then((res) => {
      console.log('res member ', res.data)
      // if (res.ok) {
        setTotalShareCapital(res.data);
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
                <th className='full'> member No{memberno}</th>
                  
                  </tr>
                  <tr   >
                
                  <th className='full'>Share Capital Statement</th>
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
            <h3>Ref</h3>
  
          </th>
          <th>
            <h3 >Account</h3>
            
          </th>
          <th>
            <h3 >Wdrawn</h3>
          </th>
          <th>
            <h3 >Savings</h3>
          </th>
          <th>
            <h3 >Running Amt</h3>
          </th>
          
        </tr> }
        
  
        {shares.map(share => {
          return ( 
          <ShareCapitalList
          key={share.id}
          date={share.date}
          item={share.item}
          reference={share.referenceNo}
          receipt={share.receiptNo}
          wdrawn={share.debit}
          savings={share.credit}
         
         
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
            
          </th>
          <th>
            
          </th>
          <th>
            
          </th>
          <th>
           
          </th>
          <th>
        <h3 >{totalShareCapital}</h3>
          </th>
          <th>
        <h3 >{totalShareCapital}</h3>
          </th>
          </tr>
      </tbody>
    </table>
    {/* <button onClick={saveFile}>download</button> */}
    </div>
  );
    
}

export default ShareCapital