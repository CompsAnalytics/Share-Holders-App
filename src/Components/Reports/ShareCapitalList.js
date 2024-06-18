import React from 'react'

const ShareCapitalList = ({date,item,reference,receipt,wdrawn,savings}) => {
  return (
   
    <tr>
    
    <th className='th1'>{date}</th>
    <th className='th1'>{item}</th>
    <th className='th1'>{reference}</th>
    <th className='th1'>{receipt}</th>
    <th className='th1'>{wdrawn.toLocaleString("en-Ke")}</th>
    <th className='th1'>{savings.toLocaleString("en-Ke")}</th>
    <th className='th1'>{savings.toLocaleString("en-Ke")}</th>
    <th className='th1'></th>
   </tr>
  )
}

export default ShareCapitalList