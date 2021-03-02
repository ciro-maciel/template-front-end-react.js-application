import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'use-http';

const { GRAPHQL_URL } = process.env;

const StoreProvider = ({ children }) => {
  const token = localStorage.getItem('token');

  const options = {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };

  return (
    <Provider url={GRAPHQL_URL} options={options}>
      {children}
    </Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node,
};

export default StoreProvider;
