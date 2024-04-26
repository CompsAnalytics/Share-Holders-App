import React, { useEffect, useState } from 'react'
import Dividends from "../Reports/Dividends";
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
const DividendList = () => {
const [dividends, setDividends] = useState([]);
const [header, setHeader] = useState([]);
const [member, setMember] = useState([]);

//${memberNo}
useEffect(() =>{
  authAxios.get(`${apiUrl}/v1/dividendPayable/${memberno}`)
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


  return (
    <div>
      {/* <p>header{header.header}</p> */}
        <table >
            <tbody>
            <tr   >
               <th className='full'> <p>{header.organisationName}</p><break></break><p>Address:{header.boxNo} {header.postalCode}</p><p><break></break>Tel:{header.mainTelNo}{header.otherTelNo}</p><break></break>Email:{header.email} Website:{header.website}<p></p>
                </th>  
                </tr>
                
                <tr   >
              
                <th className='full'>Dividend Statement</th>
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
          <h3 className="ui center aligned header">Dividend</h3>
          
        </th>
        <th>
          <h3 className="ui center aligned header">Paid</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Running Amt</h3>
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