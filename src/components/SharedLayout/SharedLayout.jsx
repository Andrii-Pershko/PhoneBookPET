import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.module.js';

export const SharedLayout = ({ isSuccess }) => {
  return (
    <Container>
      <Header>
        <Logo>You Contacts Book</Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          {isSuccess ? (
            <Link to="/contacts"> Contacts</Link>
          ) : (
            <>
              <Link to="/registration">Sign Up</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};
