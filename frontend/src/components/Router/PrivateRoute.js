import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
}