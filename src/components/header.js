import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';

import { images } from 'utils';

const Header = ({ navigation: { Link, history } }) => {
  return (
    <Row
      type="flex"
      style={{
        borderBottom: '1px solid #ddd',
        height: '60px',
        width: '100%',
        padding: '0 10px',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Col span={24} style={{ alignItems: 'center', display: 'flex' }}>
        <div>
          <Link to="/">
            <img src={images.logo} alt="Workspace - ciro-maciel.me" width="150px" />
          </Link>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Link
            className="hide-on-mobile-sm"
            to="/#"
            onClick={(e) => {
              e.preventDefault();

              if (
                document.querySelector('#Smallchat > iframe') &&
                document.querySelector('#Smallchat > iframe').contentWindow.document.querySelector('.Launcher-icon')
              ) {
                document
                  .querySelector('#Smallchat > iframe')
                  .contentWindow.document.querySelector('.Launcher-icon')
                  .querySelector('.Launcher-icon')
                  .click();
              }
            }}
          >
            Suporte
          </Link>
          <span className="hide-on-mobile-md" style={{ margin: '0 5px' }}>
            |
          </span>
          <Link className="hide-on-mobile-md" to="/#price">
            Preços
          </Link>
          <span className="hide-on-mobile-md" style={{ margin: '0 5px' }}>
            |
          </span>
          <Link className="hide-on-mobile-md" to="/auth">
            comece Já
          </Link>
          <span className="hide-on-mobile-md" style={{ margin: '0 5px' }}>
            |
          </span>
          <Link className="hide-on-mobile-md" to="/changelog">
            o que há de Novo?
          </Link>
          <span className="hide-on-mobile-md" style={{ margin: '0 5px' }}>
            |
          </span>
          <a className="hide-on-mobile-md" href="https://ciro-maciel.me/" target="_blank">
            sobre Nós
          </a>
        </div>
      </Col>
    </Row>
  );
};

Header.propTypes = {
  navigation: PropTypes.object,
};

export default Header;
