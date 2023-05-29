import { Route, Routes } from 'react-router-dom';
import { SignUp } from '../pages/SingUp/SignUp';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from '../pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/operations';
import { Contacts } from 'pages/Contacts/Contacts';
import { PrivateRoute } from './PrivateRoute';
import { PageNotFound } from 'pages/PageNotFound';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsRefreshing } from 'redux/selectors';
import { RingLoader } from 'react-spinners';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefresh) {
    return (
      <RingLoader
        cssOverride={{
          margin: '50px auto',
        }}
        color="#00de52"
      />
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

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
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    );
  }
};
