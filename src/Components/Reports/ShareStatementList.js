import React from 'react'

const ShareStatementList = ({date,item,reference,savings,runningtotal}) => {
  //var total = 0;
  // $("th:nth-child(6)").each(function( index ) {
  //   total = parseInt($(this).text()) + parseInt(total);
  //   $(this).next('th').text(total);
  // })

  return (
    
        <tr>
    
    <th className='th1'>{date}</th>
    <th className='th1'>{item}</th>
    <th className='th1'>{reference}</th>
    <th className='th1'>{savings.toLocaleString("en-Ke")}</th>
    <th className='th1'>{runningtotal.toLocaleString("en-Ke")}</th>
     
    <th></th>
   </tr>
  )
        
        
  
}

export default ShareStatementList