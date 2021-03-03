import React from 'react';

import { Row, Col } from 'antd';

export default function() {
  return (
    <Row
      type="flex"
      style={{
        borderTop: '1px solid #ddd',
        height: '40px',
        width: '100%',
        padding: '0 10px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Row style={{ maxWidth: '1440px', width: '100%', height: '100%', padding: '0 10px' }}>
        <Col md={12} xs={12} />
        <Col md={12} xs={12} style={{ alignItems: 'center', display: 'flex' }}>
          <div style={{ marginLeft: 'auto', fontSize: '11px' }}>
            <span className="hide-on-sm"> feito com</span>
            <span> ❤️ por </span>
            <a href="https://ciro-maciel.me" target="_blank" rel="noreferrer">
              <strong>ciro-maciel.me</strong>
            </a>
          </div>
        </Col>
      </Row>
    </Row>
  );
}
