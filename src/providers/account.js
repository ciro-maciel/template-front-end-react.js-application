import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AccountContext = createContext(null);

const { Provider } = AccountContext;

const initialState = () => {
  return localStorage.getItem('account') && JSON.parse(localStorage.getItem('account'));
};

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(initialState());

  const select = (token) => {
    if (token) {
      if (token.value) {
        try {
          localStorage.setItem('token', token.value);

          token = token.account;
        } catch (error) {
          // invalid token format
        }
      }

      localStorage.setItem('account', JSON.stringify(token));
    } else {
      localStorage.removeItem('account');
      localStorage.removeItem('token');
    }

    setAccount(token);
  };

  return <Provider value={{ data: account, select }}>{children}</Provider>;
};

AccountProvider.propTypes = {
  children: PropTypes.node,
};
