import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const user = localStorage.getItem('user') !== 'undefiend' ||
   localStorage.getItem('user') !== null 
   ? JSON.parse(localStorage.getItem('user')) 
   : null;
  return (
    user && user.aud ? <Outlet /> : <Navigate to="login" />
  )
}
export default PrivateRoutes