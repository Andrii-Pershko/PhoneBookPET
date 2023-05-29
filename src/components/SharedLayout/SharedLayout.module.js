import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 0;
  margin-bottom: 50px;
  border-bottom: 1px solid rgb(91, 218, 154);

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  font-size: 25px;
  text-transform: uppercase;
`;

export const Link = styled(NavLink)`
  padding: 0px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 22px;
  &.active {
    color: rgb(91, 218, 154);
  }
`;
