import React from 'react';

import { Row } from 'antd';

export default function(props) {
  const { children, style } = props;
  return (
    <Row
      type="flex"
      justify="center"
      position="static"
      style={{
        minHeight: 'calc(100vh - 100px)',
        width: '100%',
        ...style,
      }}
    >
      {children}
    </Row>
  );
}
