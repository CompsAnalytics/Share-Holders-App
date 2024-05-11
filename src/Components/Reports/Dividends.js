import React from 'react'

const Dividends = ({date,item,reference,dividend,paid,sumTotal}) => {

  //  function sumBy(values, key) {
  //    return values.reduce((total, value) => total += value[key], 0)
  //  }
    
  return (
   <tr>
    
    <th>{date}</th>
    <th>{item}</th>
    <th>{reference}</th>
    <th>{dividend}</th>
    <th>{paid}</th>
    <th>{sumTotal}</th>
   
   </tr>
  )
}

export default Dividends