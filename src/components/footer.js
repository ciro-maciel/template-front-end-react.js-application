import React from 'react';

import { Row, Col } from 'antd';

import { Link } from 'components';

export default function () {
  return (
    <Row
      style={{
        borderTop: '1px solid #ddd',
        height: '40px',
        width: '100%',
        padding: '0 8px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Row style={{ maxWidth: '1440px', width: '100%', height: '100%' }}>
        <Col md={12} xs={12} style={{ display: 'flex', alignItems: 'center' }}>
          <small>© 2021 ciro-maciel</small>
          <span className="hide-on-sm" style={{ margin: '0 5px' }}>
            |
          </span>
          <Link className="hide-on-sm" to="/terms">
            <small>Termos</small>
          </Link>
          <span className="hide-on-sm" style={{ margin: '0 5px' }}>
            |
          </span>
          <Link className="hide-on-sm" to="/privacy">
            <small>Política de Privacidade</small>
          </Link>
        </Col>
        <Col md={12} xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <div>
            <small className="hide-on-sm"> feito com</small>
            <small> ❤️ por </small>
            <Link to="https://ciro-maciel.me" target="_blank">
              <small>ciro-maciel.me</small>
            </Link>
          </div>
        </Col>
      </Row>
    </Row>
  );
}
