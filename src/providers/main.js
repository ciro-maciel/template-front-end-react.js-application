import React from 'react';
import PropTypes from 'prop-types';

import { HelmetProvider } from 'react-helmet-async';

import { AccountProvider, StoreProvider } from '.';

const MainProvider = ({ children }) => (
  <StoreProvider>
    <AccountProvider>
      <HelmetProvider>{children}</HelmetProvider>
    </AccountProvider>
  </StoreProvider>
);

MainProvider.propTypes = {
  children: PropTypes.node,
};

export default MainProvider;
