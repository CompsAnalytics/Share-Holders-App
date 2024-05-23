//import { LaptopOutlined } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import React from 'react';
import './Navbar.css'
import "antd/dist/antd.min.css"
import { Link, NavLink, Outlet } from 'react-router-dom';
const memberno =localStorage.getItem("member");
const { Header, Content, Sider } = Layout;



const Navbar = () => (
  <Layout>
    <Header className="header" style={{width: 1300}}>
      <div className="logo"  />
      <Menu theme="dark" mode="horizontal"  />
      <NavLink  className="navlink" style={{
          padding: '0 24px 24px', float:"left"
        }} >Sacco Web App</NavLink>
      {/* <NavLink to="/AddLoanForm" style={{
          padding: '0 24px 24px',
        }}>Home</NavLink> */}
      <NavLink className='hidden' to="/app/Notes" style={{
          padding: '0 24px 24px',
        }}>Notes</NavLink>
      <NavLink className='hidden' to="/app/Questions" style={{
          padding: '0 24px 24px',
        }}>Questioners</NavLink>
        
      <NavLink  className='logbtn' to="/" style={{
          padding: '0 24px 24px', float: 'right'
        }}>Log Out</NavLink>
        <NavLink   className='hidden'
        >Member No {memberno} <p id='memno' style={{
          backgroundcolor: 'red',width:'10px'
        }} text/></NavLink>
    </Header>
    <Layout>
      <Sider width={150} className="site-layout-background">
        <Menu
          mode="inline"
          //defaultSelectedKeys={['1']}
          //defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
        
          
        >

         
         
         {/* <Menu.Item>

            
            <Link to="/app/AddMemberForm"> Create New Member</Link>
          </Menu.Item>
          <Menu.Item>
           <Link to="/app/AddLoanForm"> Register Loan </Link>
           </Menu.Item>
           <Menu.Item>
           <Link to="/app/LoanList"> Applied Loan List</Link>
          </Menu.Item>
          <Menu.Item>
           <Link to="/app/SplitDividend"> Split Dividend</Link>
          </Menu.Item> */}
          <Menu.Item>
           <Link to="/app/MemberDetails"> Member Profile</Link>
          </Menu.Item>
          {/* <Menu.Item>
           <Link to="/app/Instant"> Instant</Link>
          </Menu.Item> */}
          <Menu.Item>
           <Link to="/app/DividendList"> Dividend List</Link>
          </Menu.Item>
          <Menu.Item>
           <Link to="/app/LoanStatement"> Loan Stmt List</Link>
          </Menu.Item>
          <Menu.Item>
           <Link to="/app/GurantorList">Gurantor List</Link>
          </Menu.Item>
          <Menu.Item>
           <Link to="/app/ShareCapital">Share Capital List</Link>
          </Menu.Item>
          <Menu.Item>
           <Link to="/app/ShareStatement">Share Statement</Link>
          </Menu.Item>
            </Menu>

           
      </Sider>

      
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        
        <Content
          className="site-layout-background"
          style={{
            width: 1000,
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >


          
          
          <Outlet/>
        
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default Navbar;
