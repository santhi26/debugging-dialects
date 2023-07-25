import React from 'react'
import * as Pages from './pages';
import {Routes, Route} from 'react-router-dom';
import {Header} from './components';
import './App.css'
import { UserProvider } from './contexts';
import {TeacherProfile} from './components';

function App() {
  return (
    <>
     <UserProvider>
        <Routes>
          <Route path="/" element={<Header />} >
            <Route index element={<Pages.homePage />} /> 
            <Route path="/registerHome" element={<Pages.registerHome />} /> 
            <Route path="/student" element={<Pages.studentPage />} /> 
            <Route path="/teacher" element={<Pages.teacherPage />} /> 
            <Route path="/flashCard" element={<Pages.flashCard />} /> 
            <Route path="/userflashcards" element={<Pages.userFlashcardReview />} /> 
            <Route path="/login" element={<Pages.login />} />
            <Route path="/message" element={<Pages.messagePage/>}/>
          </Route>
        </Routes>
     </UserProvider>    
    </>
  )
}

export default App
