import React from 'react'
import WithdrawableStatementList from './WithdrawableStatementList';
import { useEffect,useState } from 'react';
import axios from 'axios'
const memberno =localStorage.getItem("member");
//const apiUrl='http://192.168.4.6:8020/api' ;
const accessToken =localStorage.getItem("access");
console.log("ACCESS TOKEN FROM LOCAL STORAGE ", accessToken)
const authAxios =axios.create({
  // baseUrl:'http://localhost:8080/api',
  headers: {
    Authorization:`Bearer ${accessToken}`,
    
  }
})

const WithdrawableStatement = () => {
    
    const [withdrwables, setWithdrwables] = useState([]);
    const [header, setHeader] = useState([]);
    const [member, setMember] = useState([]);
    useEffect(() =>{
      authAxios.get(`/api/v1/withDrawable/${memberno}`)
      .then((res) => {
        console.log('res header ', res.data)
        setWithdrwables(res.data.data);
       
     
            
          }).catch(error=>{
            console.log(error);
          });
      
      },[])
    
      useEffect(() =>{
        authAxios.get(`/api/v1/header/1`)
        .then((res) => {
          console.log('res header ', res.data)
            setHeader(res.data);
         
       
              
            }).catch(error=>{
              console.log(error);
            });
        
        },[])
       
      useEffect(()=> {
        authAxios.get(`/api/v1/member/${memberno}`)
        .then((res) => {
          console.log('res member ', res.data)
          // if (res.ok) {
          setMember(res.data);
          }).catch(error =>{
            console.log(error);
          });
        },
    [])
    
      return (
        <div>
          <h2>W/drawable DepositStatement </h2>
            
                
               
           
       
        <table>
        <tbody>


        <tr>
                    <th >Name:{member.holdersName}</th>
                    <th  style={{borderRight:"1px solid"}} ></th>
                    <th>Print Date :{withdrwables.curDate}</th>
                    
                    </tr>
               
       
           
                <tr>
                    <th  >Member_no:{member.accNo}</th>
                    {/* <th  ></th> */}
                  <th  style={{borderRight:"1px solid"}} ></th>
                    <th >Tel:{member.tel1}</th>
                    </tr>
                    <tr>
                    <th>Email:{member.emailAdd}</th>
                    {/* <th  ></th> */}
                  <th  style={{borderRight:"1px solid"}} ></th>
                    <th>Id no:{member.idNo}</th>
                    </tr>
                   
                    
                    
          { <tr>
            <th className='th1'>
              <h3 >Acc No</h3>
            </th>
            <th className='th1'>
              <h3 >Name</h3>
            </th>
            <th className='th1'>
              <h3 >Reg date</h3>
    
            </th>
            <th className='th1'>
              <h3 >Total</h3>
              
            </th>
            
            {/* <th>
              <h3 className="ui center aligned header">Credits</h3>
            </th> */}
          </tr> }
    
          {withdrwables.map(withdrwable => {
            return (
            <WithdrawableStatementList
            
            accno={withdrwable.accNo}
            holdername={withdrwable.holdersName}
            rdate={withdrwable.regDate}
            outstanding={withdrwable.outStanding}
            />
          );
            }
          ) 
        }
        
        
        
        </tbody>
      </table>
      </div>
    );
}

export default WithdrawableStatement