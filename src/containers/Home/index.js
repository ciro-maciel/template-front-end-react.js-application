import React from 'react';
import { Helmet } from 'react-helmet-async';

import { BackTop } from 'antd';

import { Header, Body, Footer } from 'components';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>... by ciro-maciel</title>
      </Helmet>
      <Header />
      <Body>
        <BackTop visibilityHeight={300} />
      </Body>
      <Footer />
    </>
  );
};

export default Home;
