import { Route, Routes } from 'react-router-dom';
import { Home } from '../Page/Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './route/RestrictedRoute';
import { Login } from 'Page/Login/Login';
import { SignUp } from 'Page/SingUp/SignUp';
import { PrivateRoute } from './route/PrivateRoute';
import { Contacts } from 'Page/Contacts/Contacts';
import { useCurrentUserQuery } from 'redux/UsersApi/usersApi';

export const App = () => {
  const data = useCurrentUserQuery();
  console.log('auth', data);

  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Routes>
      <Route path="/" element={<SharedLayout isSuccess={data.isSuccess} />}>
        <Route index element={<Home isSuccess={data.isSuccess} />} />
        <Route
          path="/registration"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
        />
      </Route>
    </Routes>
  );
};
