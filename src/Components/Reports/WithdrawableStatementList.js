import React from 'react'

const WithdrawableStatementList = ({accno,holdername,rdate,outstanding}) => {
  return (
    
    <tr>
    
    <th className='th1'>{accno}</th>
    <th className='th1'>{holdername}</th>
    <th className='th1'>{rdate}</th>
    <th className='th1'>{outstanding.toLocaleString("en-Ke")}</th>
    
    
  </tr>
  )
}

export default WithdrawableStatementList