import React from 'react'

const Gurantorship = ({date,loanno,purpose,member,amount,gamount,outstanding,gtype}) => {
  return (
    <tr>
        <th className='th1'>{date}</th>
        <th className='th1'>{loanno}</th>
        <th className='th1'>{purpose}</th>
        <th className='th1'>{member}</th>
        <th className='th1'>{amount.toLocaleString("en-Ke")}</th>
        <th className='th1'>{gamount.toLocaleString("en-Ke")}</th>
        <th className='th1'>{outstanding.toLocaleString("en-Ke")}</th>
        <th className='th1'>{gtype}</th>
    </tr>
  )
}

export default Gurantorship