import React from 'react'

const LoanStatementList = ({loanno,purpose,cdate,sdate,period,amount,outstanding}) => {
  return (
    
    <tr>
    
    <th>{loanno}</th>
    <th>{purpose}</th>
    <th>{cdate}</th>
    <th>{sdate}</th>
    <th>{period}</th>
    <th>{amount}</th>
    <th>{outstanding}</th>
  </tr>
  )
}

export default LoanStatementList