import { useState } from 'react'
import {RegistrationForm, TeacherProfileForm, LoginForm, TeacherProfile} from './components'
import './App.css'
import { UserProvider } from './contexts';

function App() {

  return (
    <>
     <UserProvider>
      <LoginForm />
    </UserProvider>
    </>
  )
}

export default App
