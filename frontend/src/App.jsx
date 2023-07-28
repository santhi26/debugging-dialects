import React from 'react';
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Footer } from './components';
import './App.css';
import { UserProvider } from './contexts';

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Pages.homePage />} />
          <Route path="/register" element={<Pages.RegisterHome />} />
          <Route path="/student/register" element={<Pages.RegisterStudent />} />
          <Route path="/teacher/register" element={<Pages.registerTeacher />} />
          <Route path="/teacher/list" element={<Pages.teachersList/>} />
          <Route path="/student/dashboard" element={<Pages.studentPage />} />
          <Route path="/teacher/dashboard" element={<Pages.teacherPage />} />
          <Route path="/student/flashcards/" element={<Pages.FlashcardDash />} />
          <Route path="/student/flashcards/getold" element={<Pages.flashCard />} />
          <Route path="/student/flashcards/yours" element={<Pages.userFlashcardReview />} />
          <Route path="/student/flashcards/default" element={<Pages.FlashcardReview />} />
          <Route path="/teacher/profile" element={<Pages.teacherProfile />} />
          <Route path="/updateTeacherProfile" element={<Pages.updateProfileTeacher />} />
          <Route path="/login" element={<Pages.login />} />
          <Route path="/message" element={<Pages.messagePage/>}/>
          <Route path="/about" element={<Pages.about/>}/>
          <Route path="/student/flashcards/create" element={<Pages.createFlashCard/>}/>
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
