
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'

import Login from './login/login.js'
import Dashboard from './dashboard/Dashboard.js'
import Positions from './positions/Positions.js'

import '../css/index.css'
const Routing = ()=>{
   
    return(
      <Routes>
         <Route path="/login" element={<Login/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/positions" element={<Positions/>} />
      </Routes>
    )
  }
  
  function Index() {
    return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
  }

  
  export default Index;
  