import React from 'react';
import PropTypes from 'prop-types';

import { HelmetProvider } from 'react-helmet-async';

import { UserProvider, StoreProvider } from '.';

const MainProvider = ({ children }) => (
  <StoreProvider>
    <UserProvider>
      <HelmetProvider>{children}</HelmetProvider>
    </UserProvider>
  </StoreProvider>
);

MainProvider.propTypes = {
  children: PropTypes.node,
};

export default MainProvider;
