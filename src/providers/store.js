import React from 'react';
import PropTypes from 'prop-types';

import { notification } from 'antd';

import { Provider } from 'use-http';

const { GRAPHQL_URL } = process.env;

const StoreProvider = ({ children }) => {
  const token = localStorage.getItem('token');

  // https://use-http.com/#/?id=options
  const options = {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
    cachePolicy: 'no-cache',
    interceptors: {
      response: async ({ response }) => {
        response.data = response.data.data && response.data.data;

        return response;
      },
    },
    onError: () =>
      notification.error({
        message: 'Desculpe, algo deu errado',
        description: 'Estamos trabalhando nisso e vamos consertá-lo o mais rápido possível.',
        duration: 0,
      }),
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
