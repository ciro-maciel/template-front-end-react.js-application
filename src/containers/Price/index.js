import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Row, Col, Typography, Alert, Card, Button } from 'antd';

import { Header, Body, Footer, Link } from 'components';

const Price = () => {
  return (
    <>
      <Helmet>
        <title>Preços - mOnitor </title>
      </Helmet>
      <Header />
      <Body style={{ maxWidth: '1200px', flexDirection: 'column', alignItems: 'center' }}>
        <Row style={{ display: 'inline', textAlign: 'center' }}>
          <Typography.Title level={3}>Preços</Typography.Title>
          <Typography.Title>Planos para todas as necessidades</Typography.Title>
        </Row>

        <Row style={{ padding: '32px 0', flexDirection: 'column', maxWidth: '900px', width: '100%' }}>
          <Alert
            message="mOnitor agora é gratuito para o uso Pessoal"
            description={
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                <br />
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.
              </>
            }
            type="success"
            showIcon
          />
        </Row>

        <Row gutter={16} style={{ background: 'rgb(236, 236, 236)', padding: '16px' }}>
          <Col xs={24} md={6}>
            <Card title={<Typography.Title>Free</Typography.Title>} style={{ textAlign: 'center', height: '100%' }}>
              <span>
                Basico para uso Pessoal
                <br />
                Investimos em seu crescimento &nbsp;
              </span>

              <ul style={{ textAlign: 'left', margin: '16px 0' }}>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
              </ul>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <strong style={{ fontSize: '25px' }}>{`R$0`}</strong>
                &nbsp;
                <small>/ por mês</small>
              </div>

              <Button type="primary" style={{ margin: '8px 0', width: '100%' }}>
                Comece agora mesmo
              </Button>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card title={<Typography.Title>Maker</Typography.Title>} style={{ textAlign: 'center', height: '100%' }}>
              <span>Funcionalidades profissionais para você crescer</span>

              <ul style={{ textAlign: 'left', margin: '16px 0' }}>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
              </ul>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <strong style={{ fontSize: '25px' }}>{`R$0`}</strong>
                &nbsp;
                <small>/ por mês</small>
              </div>

              <Button type="primary" style={{ margin: '8px 0', width: '100%' }}>
                Escolher esse Plano
              </Button>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card title={<Typography.Title>Startup</Typography.Title>} style={{ textAlign: 'center', height: '100%' }}>
              <span>Damos suporte para o crescimento de sua Empresa</span>

              <ul style={{ textAlign: 'left', margin: '16px 0' }}>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
              </ul>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <strong style={{ fontSize: '25px' }}>{`R$0`}</strong>
                &nbsp;
                <small>/ por mês</small>
              </div>

              <Button type="primary" style={{ margin: '8px 0', width: '100%' }}>
                Escolher esse Plano
              </Button>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card title={<Typography.Title>Business</Typography.Title>} style={{ textAlign: 'center', height: '100%' }}>
              <span>Todas as nossas melhores ferramentas, suporte e serviços</span>

              <ul style={{ textAlign: 'left', margin: '16px 0' }}>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
                <li>veritatis et quasi architecto</li>
              </ul>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <strong style={{ fontSize: '25px' }}>{`R$0`}</strong>
                &nbsp;
                <small>/ por mês</small>
              </div>

              <Button type="primary" style={{ margin: '8px 0', width: '100%' }}>
                Escolher esse Plano
              </Button>
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ padding: '32px 0', maxWidth: '1000px', width: '100%' }}>
          <Row style={{ display: 'block', width: '100%', textAlign: 'center' }}>
            <Typography.Title>Respostas a algumas perguntas que você possa ter</Typography.Title>
          </Row>

          <Col xs={24} md={12}>
            <Typography.Title level={3}>Quem mantém o mOnitor?</Typography.Title>
            <Typography.Paragraph>
              Sou 👨🏽‍🏫Empreendedor em Pessoas e 👨🏽‍💻Engenheiro de software em uma Família fantástica (equipe 👨🏽👩🏻👦🏻), somos
              apaixonados por tecnologia e inovação. Você pode entrar em contato comigo através do do meu{' '}
              <Link to="https://ciro-maciel.me/">site</Link>.
            </Typography.Paragraph>
            <Typography.Title level={3}>Como eu posso pagar?</Typography.Title>
            <Typography.Paragraph>
              Você pode pagar com seu cartão Visa, Maestro, MasterCard, Discover, Diners Club ou American Express.
            </Typography.Paragraph>
            <Typography.Title level={3}>E se eu quiser mudar meu plano?</Typography.Title>
            <Typography.Paragraph>
              Quando você atualiza seu plano, as alterações são aplicadas imediatamente. Quando você faz o downgrade do
              seu plano, as alterações são aplicadas no final do seu ciclo de faturamento atual.
            </Typography.Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Typography.Title level={3}>Posso cancelar minha assinatura a qualquer momento?</Typography.Title>
            <Typography.Paragraph>
              Pode apostar! Você pode cancelar sua assinatura nas configurações da conta. Você também pode optar por
              excluir sua conta por completo.
            </Typography.Paragraph>

            <Typography.Title level={3}>Se eu não gostar do mOnitor, posso solicitar um reembolso?</Typography.Title>
            <Typography.Paragraph>
              Caso você não esteja satisfeito com o serviço, você pode solicitar um reembolso em 10 dias a partir do seu
              último pagamento.
            </Typography.Paragraph>
          </Col>
        </Row>
      </Body>
      <Footer />
    </>
  );
};

export default Price;
