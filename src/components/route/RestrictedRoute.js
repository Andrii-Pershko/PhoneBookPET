// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useCurrentUserQuery } from 'redux/UsersApi/usersApi';
// import { selectIsLoggedIn } from 'redux/selectors';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isSuccess } = useCurrentUserQuery();
  // const isSuccess = true;

  return isSuccess ? <Navigate to={redirectTo} /> : Component;
};
