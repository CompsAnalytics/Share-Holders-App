import React, { useEffect, useState } from 'react'
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
const MemberDetails = () => {
    const [member,setMember] = useState([])
    const [totalSavings,setTotalSavings] = useState([])
    const [totalDividendPayable,setTotalDividendPayable] = useState([])
    const [totalShareCapital,setTotalShareCapital] = useState([])
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

useEffect(()=> {
  authAxios.get(`/api/v1/dividendPayable/sumTotal/${memberno}`)
  .then((res) => {
    console.log('res member ', res.data)
    // if (res.ok) {
      setTotalDividendPayable(res.data);
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
      <table>
          <tbody>
          <tr >
                  <th className='half' >Welcome to Metropolitan Sacco App,{member.holdersName}</th>
                  </tr>
              <tr >
                  <th className='half' >Member No:{member.accNo}</th>
                  </tr>
                  <tr>
                  <th className='half'>Mobile No:{member.tel1}</th>
                  </tr>
                  <tr>
                  <th>Email:{member.emailAdd}</th>
                  </tr>
                  <tr>
                  <th>Id no:{member.idNo}</th>
                  </tr>
                  <tr>
                  <th> Savings:{totalSavings}</th>
                  </tr>
                  <tr>
                  <th> Share Capital:{totalShareCapital}</th>
                  </tr>
                  <tr>
                  <th> Dividend Payable:{totalDividendPayable}</th>
                  </tr>
                  </tbody>
                  </table>
                  
                     
        

    </div>
  )
}

export default MemberDetails