import React from 'react';
import PropTypes from 'prop-types';

import { Row } from 'antd';

const Body = (props) => {
  const { children, style } = props;
  return (
    <Row
      type="flex"
      justify="center"
      style={{
        minHeight: 'calc(100vh - 100px)',
        width: '100%',
        ...style,
      }}
    >
      <Row type="flex" style={{ maxWidth: '1440px', width: '100%', padding: '0 10px', justifyContent: 'center' }}>
        {children}
      </Row>
    </Row>
  );
};

Body.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object,
};

export default Body;
