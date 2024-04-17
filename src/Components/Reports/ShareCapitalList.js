import React from 'react'

const ShareCapitalList = ({date,item,reference,receipt,wdrawn,savings}) => {
  return (
   
    <tr>
    
    <td>{date}</td>
    <td>{item}</td>
    <td>{reference}</td>
    <td>{receipt}</td>
    <td>{wdrawn}</td>
    <td>{savings}</td>
   </tr>
  )
}

export default ShareCapitalList