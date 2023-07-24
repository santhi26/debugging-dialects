import React from 'react'
import * as Pages from './pages';
import {Routes, Route} from 'react-router-dom';
import {Header} from './components';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Pages.homePage />} /> 
          <Route path="/registerHome" element={<Pages.registerHome />} /> 
          <Route path="/student" element={<Pages.studentPage />} /> 
          <Route path="/teacher" element={<Pages.teacherPage />} /> 
          <Route path="/flashCard" element={<Pages.flashCard />} /> 
        </Route>
      </Routes>
    </>
  )
}

export default App
