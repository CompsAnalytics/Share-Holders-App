import React from 'react'
import { useEffect,useState } from 'react';
import Gurantorship from './Gurantorship';

const GurantorList = (member_no) => {
    const [guarantors, setGuarantors] = useState([]);
    const [header, setHeader] = useState([]);
    const [member, setMember] = useState([]);
    useEffect(() =>{
    fetch(`http://localhost:8080/api/v1/instant/${member_no}`)
    .then((res) => {
      if (res.ok) {
      res.json().then((guarantors) => setGuarantors(guarantors));
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
                <tr   >
                    <th className='full'>Guarontorship Statement Summary</th>
                    </tr>
                <tr >
                    <th >Name:{member.holders_name}</th>
                    </tr>
                </tbody>
            </table>
        <table>
            <tbody>
           
                <tr >
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
       
        <table >
        <tbody>
          { <tr >
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th >
              <h3 className="ui center aligned header">Loan No</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Loan Type</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Name</h3>
    
            </th>
            <th>
              <h3 className="ui center aligned header">Loan Amount</h3>
              
            </th>
            <th>
              <h3 className="ui center aligned header"> AmtGuaranteed</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Loan Balance</h3>
            </th>
            <th>
              <h3 className="ui center aligned header"> Guarantor Level</h3>
            </th>
            
          </tr> }
    
          {guarantors.map(guarantor => {
            return (
            <Gurantorship
            key={guarantor.id}
            id={guarantor.id}
            date={guarantor.date}
            loanno={guarantor.loan_no}
            purpose={guarantor.lpurpose}
            member={guarantor.member_name}
            amount={guarantor.lamount}
            gamount={guarantor.amtg}
            
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