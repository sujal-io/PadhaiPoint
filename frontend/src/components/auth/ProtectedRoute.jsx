import React from 'react'
import AppLayout from '../layout/AppLayout';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
    const isAuthenticated = true; // Replace with actual authentication logic
    const loading = false; // Replace with actual loading state

    if (loading) {
        return <div className='flex items-center justify-center h-screen'> Loading...</div>;
    }

  return isAuthenticated ? (
    <AppLayout>
        <Outlet />
    </AppLayout>

  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute