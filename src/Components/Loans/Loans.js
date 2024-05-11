//import {Link} from 'react-router-dom';
//import UpdateLoanData from './UpdateLoanData';

function Loan({id,memberno,member,category,amount,loan}) {
  // function handleDelete(){
  //   fetch(`http://localhost:8001/loandetails/${id}`, {
  //   method: "DELETE"
  //   })
  //   .then((r) => r.json)
  //   .then(() => onDeleteItem(loan))
  // }

  
  
  return (
      <tr>
        <td>{id}</td>
        <td>{memberno}</td>
        <td>{member}</td>
        <td>{category}</td>
        <td>{amount}</td>
        {/* <td><button> <Link to='/UpdateLoanData' state={{"Data": {...id, ...memberno, ...member, ...category, ...amount}}}>Edit</Link></button></td>
        <td><button onClick={handleDelete}>Delete</button></td> */}
      </tr>
    );
  }
  
  export default Loan;
  