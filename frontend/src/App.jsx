import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ProfilePage from './pages/Profile/ProfilePage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import DocumentListPage from './pages/Documents/DocumentListPage';
import DocumentDetailPage from './pages/Documents/DocumentDetailPage';
import FlashcardsListPage from './pages/Flashcards/FlashcardsListPage';
import FlashcardPage from './pages/Flashcards/FlashcardPage';
import QuizTakePage from './pages/Quizzes/QuizTakePage';
import QuizResultPage from './pages/Quizzes/QuizResultPage';

const App = () => {
  const isAuthenticated = true; // Replace with actual authentication logic
  const loading = false; // Replace with actual loading state

  if (loading) {
    return <div className='flex items-center justify-center h-screen'> Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />

        {/* Protected Routes */}
        < Route element={<ProtectedRoute/>}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/documents" element={<DocumentListPage/>} />
            <Route path="/documents/:id" element={<DocumentDetailPage/>} />
            <Route path="/flashcards" element={<FlashcardsListPage/>} />
            <Route path="/flashcards/:id/flashcards" element={<FlashcardPage/>} />
            <Route path="/quizzes/:quizId" element={<QuizTakePage/>} />
            <Route path="/quizzes/quizId/results" element={<QuizResultPage/>} />
        </Route>

            <Route path="*" element={<NotFoundPage/>} />

      </Routes>
    </Router>
  );
}

export default App