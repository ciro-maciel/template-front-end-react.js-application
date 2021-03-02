import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import { Row, Col, Button, Input, Icon, Carousel, Form, BackTop } from 'antd';

import { Header, Footer } from '../../components';

const Off = (props) => {
  const {
    // form,
    // navigation,
    // navigation: { history },
  } = props;

  return (
    <>
      <Helmet>
        <title>Workspace by ciro-maciel</title>
      </Helmet>
      <Header auth={{ user: null, setSession: null }} navigation={{ location: {}, Link: () => <>s</> }} />
      <Row type="flex" justify="center">
        <BackTop visibilityHeight={300} />
      </Row>
      <Footer />
    </>
  );
};

Off.propTypes = {
  navigation: PropTypes.object,
  form: PropTypes.object,
};

export default Off;
