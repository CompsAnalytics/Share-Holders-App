import React from 'react'

const Dividends = ({date,item,reference,dividend,paid}) => {

  
    
  return (
   <tr>
    
    <th>{date}</th>
    <th>{item}</th>
    <th>{reference}</th>
    <th>{dividend}</th>
    <th>{paid}</th>
    <th></th>
   </tr>
  )
}

export default Dividends