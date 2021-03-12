import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Row, Col, Typography } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

import { Header, Body, Footer } from 'components';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - mOnitor</title>
      </Helmet>
      <Header />
      <Body style={{ maxWidth: '900px' }}>
        <Col xs={24} md={24}>
          ;-)
        </Col>
      </Body>
      <Footer />
    </>
  );
};

export default Dashboard;
