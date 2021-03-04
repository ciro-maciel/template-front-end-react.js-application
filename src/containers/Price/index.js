import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Row, Col, Typography, List } from 'antd';

import { Header, Body, Footer } from 'components';

const Price = () => {
  return (
    <>
      <Helmet>
        <title>Preços - ...</title>
      </Helmet>
      <Header />
      <Body>
        <Row gutter={12} style={{ maxWidth: '900px', width: '100%', padding: '20px 0', alignContent: 'flex-start' }}>
          <Col xs={24} md={24} className="changelog">
            <Typography.Title>Preços</Typography.Title>
          </Col>
        </Row>
      </Body>
      <Footer />
    </>
  );
};

export default Price;
