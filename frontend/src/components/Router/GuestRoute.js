import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function GuestRoute() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    console.log(isAuthenticated)
    return isAuthenticated ? <Navigate to="/profile" /> : <Outlet />;
}