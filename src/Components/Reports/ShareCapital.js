import React from 'react'
import axios from 'axios'

const memberno =localStorage.getItem("member");
const apiUrl='http://localhost:8080/api' ;
const accessToken =localStorage.getItem("access");
console.log("ACCESS TOKEN FROM LOCAL STORAGE ", accessToken)
const authAxios =axios.create({
  // baseUrl:'http://localhost:8080/api',
  headers: {
    Authorization:`Bearer ${accessToken}`,
    
  }
})
const ShareCapital = () => {

  const [shares, setShares] = useState([]);
  const [header, setHeader] = useState([]);
  const [member, setMember] = useState([]);
  
  //${memberNo}
  useEffect(() =>{
    authAxios.get(`${apiUrl}/v1/shareCapital/${memberno}`)
  .then((res) => {
    
    // if (res.ok) {
    setShares(res.data);
    console.log('res dividend ', res.data);
  
  // } 
  
        
      }).catch(error =>{
        console.log(error);
      });
  
  },[])
  
  useEffect(() =>{
    authAxios.get(`${apiUrl}/v1/header`)
    .then((res) => {
      console.log('res header ', res.data)
        setHeader(res.data);
     
   
          
        }).catch(error=>{
          console.log(error);
        });
    
    },[])
     
    useEffect(()=> {
      authAxios.get(`${apiUrl}/v1/member/${memberno}`)
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
        {/* <p>header{header.header}</p> */}
          <table >
              <tbody>
              <tr   >
                <th className='full'> header{header.header_name}</th>
                  
                  </tr>
                  <tr   >
                <th className='full'> member No{memberno}</th>
                  
                  </tr>
                  <tr   >
                
                  <th className='full'>Dividend Statement</th>
                  </tr>
                  
              <tr >
                  <th >Name:{member.holdersName}</th>
                  
                  </tr>
              </tbody>
          </table>
      <table>
          <tbody>
         
              <tr >
                  <th className='half' >member_no:{member.accNo}</th>
                  <th className='half'>tel:{member.tel1}</th>
                  </tr>
                  <tr>
                  <th>email:{member.emailAdd}</th>
                  <th>Id no:{member.idNo}</th>
                  </tr>
                  </tbody>
                  </table>
                  <table>
                      <tbody>
                  <tr>
                  <th>Print Date</th>
                  
                  </tr>
          </tbody>
  
      </table>
     
      <table >
      <tbody>
        { <tr >
          <th >
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Narration</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Ref</h3>
  
          </th>
          <th>
            <h3 className="ui center aligned header">Account</h3>
            
          </th>
          <th>
            <h3 className="ui center aligned header">Wdrawn</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Savings</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Running Amt</h3>
          </th>
          
        </tr> }
        
  
        {shares.map(share => {
          return ( 
          <ShareStatementList
          key={share.id}
          date={share.date}
          item={share.item}
          reference={share.referenceNo}
          receipt={share.receiptNo}
          wdrawn={share.debit}
          savings={share.credit}
         
         
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

export default ShareCapital