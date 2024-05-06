import React from 'react'
import LoanStatementList from './LoanStatementList';
import { useEffect,useState } from 'react';
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

const LoanStatement = () => {
    
    const [loans, setLoans] = useState([]);
    const [header, setHeader] = useState([]);
    const [member, setMember] = useState([]);
    useEffect(() =>{
      authAxios.get(`${apiUrl}/v1/instant/${memberno}`)
      .then((res) => {
        console.log('res header ', res.data)
          setLoans(res.data.data);
       
     
            
          }).catch(error=>{
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
          <p>{header.header}</p>
            <table >
                <tbody>
                <tr>
                    <th className='full'>Member Statement Summary</th>
                    </tr>
                <tr>
                    <th >Name:{member.holdersName}</th>
                    </tr>
                </tbody>
            </table>
        <table>
            <tbody>
           
                <tr>
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
                    <th>Shares</th>
                    <th>Shares</th>
                    </tr>
            </tbody>
    
        </table>
       
        <table>
        <tbody>
          { <tr>
            <th>
              <h3 >Loan No</h3>
            </th>
            <th>
              <h3 >Purpose</h3>
            </th>
            <th>
              <h3 >Sdate</h3>
    
            </th>
            <th>
              <h3 >Edate</h3>
              
            </th>
            <th>
              <h3 >Period</h3>
            </th>
            <th>
              <h3>Original Amount</h3>
            </th>
            <th>
              <h3 >Balance</h3>
            </th>
            {/* <th>
              <h3 className="ui center aligned header">Credits</h3>
            </th> */}
          </tr> }
    
          {loans.map(loan => {
            return (
            <LoanStatementList
            key={loan.id}
            loanno={loan.loanNo}
            purpose={loan.loanPurpose}
            cdate={loan.startDate}
            sdate={loan.endDate}
            period={loan.period}
            amount={loan.amount}
            outstanding={loan.outStanding}
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

export default LoanStatement