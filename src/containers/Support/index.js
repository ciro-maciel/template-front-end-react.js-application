import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Row, Col, Typography } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

import { Header, Body, Footer } from 'components';

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Suporte - RiLi Application Template</title>
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
          <Typography.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vivamus arcu felis bibendum ut. Ullamcorper sit amet risus nullam eget felis eget nunc.
            Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Varius quam quisque id diam vel
            quam elementum pulvinar etiam.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Elementum tempus egestas sed sed risus pretium. Arcu felis bibendum ut tristique et egestas. In hac
            habitasse platea dictumst vestibulum rhoncus est. Elementum integer enim neque volutpat ac tincidunt vitae
            semper. Lacus vel facilisis volutpat est velit egestas dui. Sodales ut eu sem integer vitae justo eget
            magna. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Aliquet nibh praesent
            tristique magna sit amet purus. At lectus urna duis convallis convallis tellus id interdum. Eu ultrices
            vitae auctor eu. Vitae sapien pellentesque habitant morbi tristique senectus.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Ut porttitor leo a diam sollicitudin tempor id. Ultrices vitae auctor eu augue ut lectus arcu. Tellus
            pellentesque eu tincidunt tortor aliquam nulla. Amet tellus cras adipiscing enim. Leo duis ut diam quam
            nulla porttitor.
          </Typography.Paragraph>
          <Typography.Paragraph></Typography.Paragraph>
          <Typography.Paragraph></Typography.Paragraph>
        </Col>
      </Body>
      <Footer />
    </>
  );
};

export default Support;
