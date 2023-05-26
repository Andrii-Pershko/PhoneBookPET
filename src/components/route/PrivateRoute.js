import { Navigate } from 'react-router-dom';
import { useCurrentUserQuery } from 'redux/UsersApi/usersApi';
// import { selectIsLoggedIn } from 'redux/selectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isSuccess } = useCurrentUserQuery();
  // const isSuccess = true;

  return !isSuccess ? <Navigate to={redirectTo} /> : Component;
};
