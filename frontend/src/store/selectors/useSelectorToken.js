import { useSelector } from 'react-redux';

export const token = useSelector(state => state.auth.token);
