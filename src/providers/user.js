import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext(null);

const { Provider } = UserContext;

const initialState = () => {
  return localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState());

  const select = (token) => {
    if (token) {
      if (token.value) {
        try {
          localStorage.setItem('token', token.value);

          token = token.user;
        } catch (error) {
          // invalid token format
        }
      }

      localStorage.setItem('user', JSON.stringify(token));
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }

    setUser(token);
  };

  return <Provider value={{ data: user, select }}>{children}</Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
