import React from 'react';

import { Row, Col } from 'antd';

export default function() {
  return (
    <Row type="flex" justify="center" position="static">
      <Col md={12} xs={12} />
      <Col md={12} xs={12} style={{ alignItems: 'center', display: 'flex' }}>
        <div style={{ marginLeft: 'auto', fontSize: '11px' }}>
          <span className="hide-on-mobile-sm"> feito com</span>
          <span> ❤️ por </span>
          <a href="https://ciro-maciel.me" target="_blank" rel="noreferrer">
            <strong>ciro-maciel.me</strong>
          </a>
        </div>
      </Col>
    </Row>
  );
}
