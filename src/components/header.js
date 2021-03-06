import React from 'react';

import { Row, Col, Dropdown, Menu } from 'antd';
import { UserOutlined, LogoutOutlined, DashboardOutlined, CommentOutlined, DownOutlined } from '@ant-design/icons';

import { useHistory } from 'react-router-dom';

import { useAccount } from 'hooks';

import { Link } from 'components';

import { images } from 'utils';

const Header = () => {
  const account = useAccount();
  const history = useHistory();

  return (
    <Row
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
          {!account.data ? (
            <div>
              <Link className="hide-on-sm" to="/support">
                Suporte
              </Link>
              <span className="hide-on-sm" style={{ margin: '0 5px' }}>
                |
              </span>
              <Link className="hide-on-sm" to="/price">
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
            <Dropdown
              trigger={['click']}
              overlay={
                <Menu>
                  <Menu.Item key="dashboard">
                    <Link to="/dashboard">
                      <DashboardOutlined /> Dashboard
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="support">
                    <Link to="/support">
                      <CommentOutlined /> Suporte
                    </Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item
                    key="logout"
                    onClick={() => {
                      user.select();
                      history.push('/');
                    }}
                  >
                    <Link>
                      <LogoutOutlined /> Desconectar
                    </Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="about">
                    <Link to="http://ciro-maciel.me/" target="_blank">
                      sobre o mOnitor
                    </Link>
                  </Menu.Item>
                </Menu>
              }
              placement="bottomCenter"
            >
              <Link>
                <UserOutlined style={{ fontSize: '18px' }} />
                {` `}
                {account.data.email}
                {` `}
                <DownOutlined />
              </Link>
            </Dropdown>
          )}
        </Col>
      </Row>
    </Row>
  );
};

export default Header;
