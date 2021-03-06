import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Row, Col, Typography } from 'antd';

import { Converter } from 'showdown';

import { Header, Body, Footer } from 'components';

import { images, func } from 'utils';

const markdownChangelogB64 = require(process.env.CHANGELOG_PATH);
const markdownConverter = new Converter();

const Changelog = () => {
  return (
    <>
      <Helmet>
        <title>o que há de Novo? - ...</title>
      </Helmet>
      <Header />
      <Body gutter={12} style={{ maxWidth: '900px', alignItems: 'flex-start' }}>
        <Col xs={24} md={14}>
          <Typography.Title>o que há de Novo?</Typography.Title>

          <Typography.Paragraph>
            Trabalhamos para construir um ótimo produto com uma ótima equipe. Achamos que um grande produto é aquele que
            fornece valor para os usuários, resolvendo uma dor real.
          </Typography.Paragraph>

          <Typography.Paragraph>
            Estamos em desenvolvimento ativo e temos feito atualizações regularmente desde o lançamento para melhor
            atender às suas necessidades.
          </Typography.Paragraph>

          <Typography.Paragraph>Esperamos que você goste de ler sobre nosso trabalho!</Typography.Paragraph>
        </Col>
        <Col xs={24} md={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          <img src={images.changelog} style={{ maxWidth: '270px', maxHeight: '203px' }} alt="" />
        </Col>
        <Col span={24} style={{ marginTop: '20px' }}>
          <div
            dangerouslySetInnerHTML={{
              __html: markdownConverter.makeHtml(func.parseMarkDown(markdownChangelogB64)),
            }}
          />
        </Col>
      </Body>
      <Footer />
    </>
  );
};

export default Changelog;
