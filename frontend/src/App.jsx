import React from 'react';
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Footer } from './components'; // Import the Footer component here
import './App.css';
import { UserProvider } from './contexts';

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Pages.homePage />} />
          <Route path="/registerHome" element={<Pages.RegisterHome />} />
          <Route path="/student/register" element={<Pages.RegisterStudent />} />
          <Route path="/teacher/register" element={<Pages.registerTeacher />} />
          <Route path="/student/dashboard" element={<Pages.studentPage />} />
          <Route path="/teacher/dashboard" element={<Pages.teacherPage />} />
          <Route path="/flashCard" element={<Pages.flashCard />} />
          <Route path="/student/your-flashcards" element={<Pages.userFlashcardReview />} />
          <Route path="/teacher/profile" element={<Pages.teacherProfile />} />
          <Route path="/updateTeacherProfile" element={<Pages.updateProfileTeacher />} />
          <Route path="student/flashCard" element={<Pages.flashCard />} />
          <Route path="/login" element={<Pages.login />} />
          <Route path="/message" element={<Pages.messagePage/>}/>
          <Route path="/about" element={<Pages.about/>}/>
          <Route path="/createFlashCard" element={<Pages.createFlashCard/>}/>
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
