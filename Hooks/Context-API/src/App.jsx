import React, { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


const App = () => {
     return(
     <UserContextProvider>
      <h1>LEARNING CONTEXT-API</h1>
      <Login></Login>
      <Profile></Profile>
      </UserContextProvider>
     )
}

export default App

 