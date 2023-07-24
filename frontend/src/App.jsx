import { useState } from 'react'
import {RegistrationForm, TeacherProfileForm, LoginForm, TeacherProfile} from './components'
import './App.css'
import { UserProvider } from './contexts/UserContext';

function App() {

  return (
    <>
     <UserProvider>
      <LoginForm />
     <TeacherProfile />
    </UserProvider>
    </>
  )
}

export default App
