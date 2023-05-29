import { useNavigate } from 'react-router-dom';
import css from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { logOut } from 'redux/operations';

export const Home = () => {
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const nameUser = useSelector(selectUser);

  console.log('nameUser', nameUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  if (isLogin) {
    return (
      <section className={css.sectionHome}>
        <div className={css.homeBox}>
          <h1>{nameUser.name} you are authorized!</h1>
          <p>You can</p>
          <div className={css.buttonBox}>
            <button
              className={css.button}
              onClick={() => navigate('/contacts', { replace: true })}
            >
              Go to Contacts
            </button>
            <p className={css.pusher}>or</p>
            <button
              style={{ width: '176px' }}
              className={`${css.button} ${css.buttonOut}`}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <h1>Welcome to contact book app</h1>
      <section className={css.sectionHome}>
        <div className={css.homeBox}>
          <p style={{ marginBottom: '10px', fontSize: '22px' }}>You can</p>
          <div className={css.buttonBox}>
            <button
              className={css.button}
              onClick={() => navigate('/registration', { replace: true })}
            >
              Sign Up
            </button>
            <p className={css.pusher}>or</p>
            <button
              style={{ width: '108px' }}
              className={css.button}
              onClick={() => navigate('/login', { replace: true })}
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
