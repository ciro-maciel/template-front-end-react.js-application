import React from 'react';

import { Row, Col } from 'antd';

import { useUser } from 'hooks';

import { Link } from 'components';

import { images } from 'utils';

const Header = () => {
  const user = useUser();

  return (
    <Row
      type="flex"
      style={{
        borderBottom: '1px solid #ddd',
        height: '60px',
        width: '100%',
        padding: '0 10px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Row style={{ maxWidth: '1440px', width: '100%', height: '100%', padding: '0 10px' }}>
        <Col span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <Link to="/">
              <img src={images.logo} alt="... - ciro-maciel.me" width="130px" />
            </Link>
          </div>
          {!user.data ? (
            <div>
              <Link className="hide-on-sm" to="/#">
                Suporte
              </Link>
              <span className="hide-on-sm" style={{ margin: '0 5px' }}>
                |
              </span>
              <Link className="hide-on-sm" to="/#price">
                Preços
              </Link>
              <span className="hide-on-sm" style={{ margin: '0 5px' }}>
                |
              </span>
              <Link to="/auth">comece Já</Link>
              <span className="hide-on-sm" style={{ margin: '0 5px' }}>
                |
              </span>
              <Link className="hide-on-sm" to="/changelog">
                o que há de Novo?
              </Link>
              <span className="hide-on-sm" style={{ margin: '0 5px' }}>
                |
              </span>
              <Link className="hide-on-sm" to="https://ciro-maciel.me/" target="_blank">
                sobre Nós
              </Link>
            </div>
          ) : (
            <div>ds</div>
          )}
        </Col>
      </Row>
    </Row>
  );
};

export default Header;
