import React from 'react'

const LoanStatementList = ({loanno,purpose,cdate,sdate,period,amount,outstanding}) => {
  return (
    
    <tr>
    
    <th className='th1'>{loanno}</th>
    <th className='th1'>{purpose}</th>
    <th className='th1'>{cdate}</th>
    <th className='th1'>{sdate}</th>
    <th className='th1'>{period}</th>
    <th className='th1'>{amount.toLocaleString("en-Ke")}</th>
    <th className='th1'>{outstanding.toLocaleString("en-Ke")}</th>
  </tr>
  )
}

export default LoanStatementList