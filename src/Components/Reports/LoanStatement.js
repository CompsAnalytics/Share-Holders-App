import React from 'react'
import LoanStatementList from './LoanStatementList';
import { useEffect,useState } from 'react';


const LoanStatement = ({memNo}) => {
    
    const [loans, setLoans] = useState([]);
    const [header, setHeader] = useState([]);
    const [member, setMember] = useState([]);
    useEffect(() =>{
    fetch(`http://localhost:8080/api/v1/instant/${memNo}`)
    .then((res) => {
      if (res.ok) {
      res.json().then((loans) => setLoans(loans));
    } 
    
          
        });
    
    },[])
    
    useEffect(() =>{
      fetch("http://localhost:8080/api/v1/header")
      .then((res) => {
        if (res.ok) {
          res.json() .then((header) => setHeader(header));
      } 
     
            
          });
      
      },[])
       
      useEffect(()=> {
        fetch("http://localhost:8001/member/1")
        .then((response) => {
            if (response.ok) {
              response.json().then((member) => setMember(member));
            }
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
                    <th >Name:{member.holders_name}</th>
                    </tr>
                </tbody>
            </table>
        <table>
            <tbody>
           
                <tr>
                    <th className='half' >member_no:{member.acc_no}</th>
                    <th className='half'>tel:{member.tel1}</th>
                    </tr>
                    <tr>
                    <th>email:{member.email_add}</th>
                    <th>Id no:{member.id_no}</th>
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
              <h3 className="ui center aligned header">Loan No</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Purpose</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Sdate</h3>
    
            </th>
            <th>
              <h3 className="ui center aligned header">Edate</h3>
              
            </th>
            <th>
              <h3 className="ui center aligned header">Period</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Original Amount</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Debit</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Credits</h3>
            </th>
          </tr> }
    
          {loans.map(loan => {
            return (
            <LoanStatementList
            key={loan.id}
            id={loan.id}
            loanno={loan.loan_no}
            purpose={loan.purpose}
            cdate={loan.cdate}
            sdate={loan.sdate}
            period={loan.period}
            amount={loan.amount}
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