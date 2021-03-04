import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { Row, Col, Typography, Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, CheckOutlined } from '@ant-design/icons';

import { Header, Body, Footer, Widget, Link } from 'components';

import { useUser, useNetInfo } from 'hooks';

import { images } from 'utils';

const Auth = () => {
  const user = useUser();
  const netInfo = useNetInfo();

  const [values, setValues] = useState({ email: new URLSearchParams(location.search).get('email') });

  return (
    <>
      <Helmet>
        <title>Faça login em sua conta - ...</title>
      </Helmet>
      <Header />
      <Body>
        <Row type="flex" gutter={16} justify="center" style={{ alignItems: 'center' }}>
          <Col xs={24} md={12} lg={8}>
            <div style={{ textAlign: 'center', margin: '30px 0' }}>
              <img src={images.userWelcome} alt="" style={{ width: '250px' }} />
            </div>
            <Typography.Title level={3}>Construído para Pessoas</Typography.Title>
            <Typography.Paragraph>
              Ao clicar em “Login com e-mail” acima, você reconhece que leu, compreendeu e concorda com os{' '}
              <Link to="/terms">Termos</Link> e <Link to="/privacy">Política de Privacidade</Link>.
            </Typography.Paragraph>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Widget>
              <Widget.Header>
                <Widget.Header.Icon>
                  <UserOutlined />
                </Widget.Header.Icon>
                <Widget.Header.Text>Autenticação</Widget.Header.Text>
              </Widget.Header>
              <Widget.Body>
                <div style={{ textAlign: 'center' }}>
                  <Typography.Title level={3}>Faça login em sua conta</Typography.Title>
                </div>
                <Form>
                  <Form.Item>
                    <Input
                      prefix={<MailOutlined />}
                      placeholder="Email"
                      // onChange={({ target: { value } }) =>
                      //   setValues({ ...values, email: value, requested: false, token: '' })
                      // }
                    />
                  </Form.Item>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>
                      Login com Email
                    </Button>
                  </div>
                </Form>
              </Widget.Body>
            </Widget>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '8px',
              }}
            >
              <span>Não tem conta? Basta inserir seu email</span>
            </div>
          </Col>
        </Row>
      </Body>
      <Footer />
    </>
  );
};

export default Auth;
