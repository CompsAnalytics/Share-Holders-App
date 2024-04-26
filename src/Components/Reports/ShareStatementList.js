import React from 'react'

const ShareStatementList = ({date,item,reference,receipt,sold,bought}) => {
  //var total = 0;
  // $("th:nth-child(6)").each(function( index ) {
  //   total = parseInt($(this).text()) + parseInt(total);
  //   $(this).next('th').text(total);
  // })

  return (
    
        <tr>
    
    <th>{date}</th>
    <th>{item}</th>
    <th>{reference}</th>
    <th>{receipt}</th>
    <th>{sold}</th>
    <th>{bought}</th>

    <th></th>
   </tr>
  )
        
        
  
}

export default ShareStatementList