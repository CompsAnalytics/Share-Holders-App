import React ,{useEffect,useState}from "react";
import Loans from "../Loans/Loans";
import './Loans.css';
import axios from 'axios';
import { useCallback } from "react";

const apiUrl='192.168.4.6:8020/api' ;
const accessToken =localStorage.getItem("access");
console.log("ACCESS TOKEN FROM LOCAL STORAGE ", accessToken)
const authAxios =axios.create({
  baseUrl:apiUrl,
  headers: {
    Authorization:`Bearer ${accessToken}`
  }
})
function LoanList(props) {
 
  const[loans,setLoans]= useState([]);
  const [requestError,setRequestError] =useState([]);
  // useEffect(()=>{
  //   fetch("http://localhost:8080/api/v1/loan")
  //   .then(res => res.json())
  //   .then(data => {setLoans(data);
      
  //   });
  // },[]);
 
  const fetchData =useCallback(async ()=>{
    try{
     const result= await authAxios.get(`/v1/loan`)
    setLoans(result.data);
    } catch (err){
    setRequestError(err.message);
    }
  });
  fetchData();

  // function handleDeleteItem(deletedLoan) {
  //   const updatedItems = loans.filter((loan) => loan.id !== deletedLoan.id);
  //   setLoans(updatedItems);
  // }

  // function handleUpdateItem(updatedLoan) {
  //   const updatedItems = loans.map((loan) => {
  //     if (loan.id === updatedLoan.id) {
  //       return updatedLoan;
  //     } else {
  //       return loan;
  //     }
  //   });
  //   setLoans(updatedItems);
  // }
  return (
    <table >
      <tbody>
        { <tr >
          <th >
            <h3 className="ui center aligned header">Id</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Mem No</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Mem Name</h3>

          </th>
          <th>
            <h3 className="ui center aligned header">category</h3>
            
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          {/* <th>
            <h3 className="ui center aligned header">Edit</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th> */}
        </tr> }

        {loans.map(loan => {
          return (
          <Loans
          key={loan.id}
          id={loan.id}
          memberno={loan.memberno}
          member={loan.member}
          category={loan.category}
          amount={loan.amount}
          // onUpdateItem={handleUpdateItem}
          // onDeleteItem={handleDeleteItem}
          />
        );
          }
        ) 
      }
      
      
      
      </tbody>
    </table>
    
  );
}

export default LoanList;