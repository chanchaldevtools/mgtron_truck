// src/assets/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ 
  type = 'protected', // 'protected' or 'auth'
  redirectPath = '/',
  children 
}) => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  
  // For authentication pages (login/otp) - redirect to home if already logged in
  if (type === 'auth' && isAuthenticated) {
    return <Navigate to="/home" replace />;
  }
  
  // For protected pages - redirect to login if not authenticated
  if (type === 'protected' && !isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;