import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Row, Col, Typography } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

import { Header, Body, Footer } from 'components';

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Suporte - mOnitor</title>
      </Helmet>
      <Header />
      <Body style={{ maxWidth: '900px' }}>
        <Row style={{ justifyContent: 'center', marginBottom: '24px', width: '100%' }}>
          <Typography.Title>
            <MessageOutlined style={{ fontSize: '55px' }} />
            {'  '}
            Suporte
          </Typography.Title>
        </Row>

        <Col xs={24} md={24}>
          ;-)
        </Col>
      </Body>
      <Footer />
    </>
  );
};

export default Support;
