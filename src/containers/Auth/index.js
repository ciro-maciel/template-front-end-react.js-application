import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { useHistory } from 'react-router-dom';

import { Row, Col, Typography, Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, CheckOutlined, LockOutlined } from '@ant-design/icons';

import { useFetch } from 'use-http';

import { Header, Body, Footer, Widget, Link } from 'components';

import { useAccount, useNetInfo } from 'hooks';

import { mutations } from './graphql';

import { images } from 'utils';

const Auth = () => {
  const account = useAccount();
  const netInfo = useNetInfo();
  const history = useHistory();
  const request = useFetch();

  const [values, setValues] = useState({ email: new URLSearchParams(location.search).get('email') });

  return (
    <>
      <Helmet>
        <title>Faça login em sua conta - ...</title>
      </Helmet>
      <Header />
      <Body gutter={16} style={{ alignContent: 'center', justifyContent: 'center' }}>
        <Col xs={24} md={12} lg={8}>
          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <img src={images.welcome} alt="" style={{ width: '250px' }} />
          </div>
          <Typography.Title level={3}>Construído para Pessoas</Typography.Title>
          <Typography.Paragraph>
            Ao clicar em “Login com e-mail” acima, você reconhece que leu, compreendeu e concorda com os{' '}
            <Link to="/terms">Termos</Link> e <Link to="/privacy">Política de Privacidade</Link>.
          </Typography.Paragraph>
        </Col>
        <Col xs={24} md={12} lg={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
              <Form
                initialValues={{
                  token: values.token,
                }}
                onFinish={() => {
                  if (values.email && !values.token) {
                    request
                      .query(mutations.SET_TOKEN_REQUEST, { email: values.email })
                      .then(({ tokenRequest }) => tokenRequest && setValues({ ...values, requested: tokenRequest }));
                  } else if (values.email && values.token) {
                    request
                      .query(mutations.SET_TOKEN_VALIDATE, {
                        validate: {
                          email: values.email,
                          token: values.token,
                          type: 'auth',
                          netInfo,
                        },
                      })
                      .then(({ tokenValidate }) => {
                        if (tokenValidate.code === 200) {
                          account.select(tokenValidate);
                          history.push('/dashboard');
                        }
                      });
                  }
                }}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Este campo é obrigatório' },
                    {
                      type: 'email',
                      message: 'Informe um email válido!',
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="informe seu Email"
                    onChange={({ target: { value } }) =>
                      setValues({ ...values, email: value, requested: false, token: '' })
                    }
                  />
                </Form.Item>
                {!values.requested ? (
                  <Row justify="center">
                    <Button type="primary" htmlType="submit" icon={<CheckOutlined />} loading={request.loading}>
                      Login com Email
                    </Button>
                  </Row>
                ) : (
                  <>
                    <Typography.Paragraph type="warning" style={{ textAlign: 'center' }}>
                      Acabamos de enviar a você um código de login temporário.
                      <br />
                      Verifique sua caixa de entrada.
                    </Typography.Paragraph>
                    <Form.Item
                      name="token"
                      rules={[
                        { min: 16, message: 'Insira um código de login válido!' },
                        { required: true, message: 'Este campo é obrigatório' },
                      ]}
                    >
                      <Input
                        prefix={<LockOutlined />}
                        type="text"
                        maxLength={16}
                        placeholder="Cole o seu código de login"
                        onChange={({ target: { value } }) => setValues({ ...values, token: value })}
                      />
                    </Form.Item>
                    <Row justify="center">
                      <Button type="primary" htmlType="submit" icon={<CheckOutlined />} loading={request.loading}>
                        Continue com o código de login
                      </Button>
                    </Row>
                  </>
                )}
              </Form>
            </Widget.Body>
          </Widget>
          <Row justify="end">
            <Typography.Text>Não tem conta? Basta inserir seu email</Typography.Text>
          </Row>
        </Col>
      </Body>
      <Footer />
    </>
  );
};

export default Auth;
