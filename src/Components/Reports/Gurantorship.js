import React from 'react'

const Gurantorship = ({date,loanno,purpose,member,amount,gamount,outstanding,gtype}) => {
  return (
    <tr>
        <th>{date}</th>
        <th>{loanno}</th>
        <th>{purpose}</th>
        <th>{member}</th>
        <th>{amount}</th>
        <th>{gamount}</th>
        <th>{outstanding}</th>
        <th>{gtype}</th>
    </tr>
  )
}

export default Gurantorship