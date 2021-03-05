import React from 'react';
import PropTypes from 'prop-types';

import { Row } from 'antd';

const Body = (props) => {
  const { children, style, ...rest } = props;
  return (
    <Row
      justify="center"
      style={{
        minHeight: 'calc(100vh - 100px)',
        width: '100%',
        padding: '0 10px',
      }}
    >
      <Row
        style={{
          maxWidth: '1440px',
          width: '100%',
          padding: '20px 0px',
          ...style,
        }}
        {...rest}
      >
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
