import React from 'react'

const Dividends = ({date,item,reference,dividend,paid}) => {

  
    
  return (
   <tr>
    
    <td>{date}</td>
    <td>{item}</td>
    <td>{reference}</td>
    <td>{dividend}</td>
    <td>{paid}</td>
   </tr>
  )
}

export default Dividends