import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AddLoanForm from './Components/Loans/AddLoanForm';
import LoanList from './Components/Loans/LoanList';
import Notes from './Components/Notes/Notes'
import Questions from './Components/Notes/question';
import Login from './Components/Authentication/Login';
import reportWebVitals from './reportWebVitals';
import AddMemberForm from './Components/Authentication/AddMemberForm';
import MemberDetails from './Components/Authentication/MemberDetails';
import UpdateLoanData from './Components/Loans/UpdateLoanData';
import SplitDividend from './Components/Loans/SplitDividend';
import SignUp from './Components/Authentication/SignUp';
import Instant from './Components/Loans/Instant';
import ChangePassword from './Components/Authentication/ChangePassword';
import DividendList from './Components/Reports/DividendList';
import Home from './Components/Landing-Page/Home';
import LoanStatement from './Components/Reports/LoanStatement';
import GurantorList from './Components/Reports/GurantorList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path ="/SignUp" element={<SignUp/>}/>
            <Route path ="/ChangePassword" element={<ChangePassword />}/>
             <Route path="/app" element={<App/>}> 
            <Route path="/app/AddLoanForm" element={<AddLoanForm/>}/>
            <Route path="/app/LoanList" element={<LoanList/>}/>
            <Route path="/app/Notes" element={<Notes/>}/>
            <Route path="/app/Questions" element={<Questions/>}/>
            <Route path="/app/Login" element={<Login/>}/>
            <Route path ="/app/AddMemberForm" element={<AddMemberForm />}/>
            <Route path ="/app/MemberDetails" element={<MemberDetails />}/>
            <Route path ="/app/UpdateLoanData" element={<UpdateLoanData />}/>
            <Route path ="/app/SplitDividend" element={<SplitDividend />}/>
            <Route path ="/app/Instant" element={<Instant />}/>
            <Route path ="/app/DividendList" element={<DividendList />}/>
            <Route path ="/app/LoanStatement" element={<LoanStatement />}/>
            <Route path ="/app/GurantorList" element={<GurantorList />}/>
        </Route>
        
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
