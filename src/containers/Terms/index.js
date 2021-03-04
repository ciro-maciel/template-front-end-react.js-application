import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Row, Col, Typography } from 'antd';

import { Header, Body, Footer } from 'components';

const Privecy = () => {
  return (
    <>
      <Helmet>
        <title>Termos - ...</title>
      </Helmet>
      <Header />
      <Body>
        <Row gutter={12} style={{ maxWidth: '900px', width: '100%', padding: '20px 0', alignContent: 'flex-start' }}>
          <Col xs={24} md={24} className="changelog">
            <Typography.Title>Termos</Typography.Title>

            <Typography.Paragraph>Esperamos que você goste de ler sobre nosso trabalho!</Typography.Paragraph>
          </Col>
        </Row>
      </Body>
      <Footer />
    </>
  );
};

export default Privecy;
