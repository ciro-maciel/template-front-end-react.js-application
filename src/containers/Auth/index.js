import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { Header, Body, Footer } from 'components';

const Auth = (props) => {
  return (
    <>
      <Helmet>
        <title>{t('auth:2bd933c.d')} - Workspace</title>
      </Helmet>
      <Header auth={{ user: null, setSession: null }} navigation={navigation} />
      <Body></Body>
      <Footer />
    </>
  );
};

Auth.propTypes = {
  form: PropTypes.object,
  user: PropTypes.object,
  navigation: PropTypes.object,
};

export default Auth;
