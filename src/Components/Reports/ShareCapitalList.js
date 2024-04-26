import React from 'react'

const ShareCapitalList = ({date,item,reference,receipt,wdrawn,savings}) => {
  return (
   
    <tr>
    
    <th>{date}</th>
    <th>{item}</th>
    <th>{reference}</th>
    <th>{receipt}</th>
    <th>{wdrawn}</th>
    <th>{savings}</th>
    <th></th>
   </tr>
  )
}

export default ShareCapitalList