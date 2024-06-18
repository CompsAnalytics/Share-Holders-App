import React from 'react'

const Dividends = ({date,item,reference,dividend,paid,sumTotal}) => {

  //  function sumBy(values, key) {
  //    return values.reduce((total, value) => total += value[key], 0)
  //  }
    
  return (
   <tr>
    
    <th className='th1'>{date}</th>
    <th className='th1'>{item}</th>
    <th className='th1'>{reference}</th>
    <th className='th1'>{dividend.toLocaleString("en-Ke")}</th>
    <th className='th1'>{paid.toLocaleString("en-Ke")}</th>
    <th className='th1'>{sumTotal.toLocaleString("en-Ke")}</th>
   
   </tr>
  )
}

export default Dividends