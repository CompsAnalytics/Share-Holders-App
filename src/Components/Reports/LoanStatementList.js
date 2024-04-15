import React from 'react'

const LoanStatementList = ({id,loan_no,purpose,cdate,sdate,period,amount}) => {
  return (
    
    <tr>
    <td>{id}</td>
    <td>{loan_no}</td>
    <td>{purpose}</td>
    <td>{cdate}</td>
    <td>{sdate}</td>
    <td>{period}</td>
    <td>{amount}</td>
    
  </tr>
  )
}

export default LoanStatementList