import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

// import { utility } from '@ciro-maciel/utility';

import { MainProvider } from './providers';
import { worker } from './utils';

import Routes from './routes';

import 'antd/dist/antd.css';
import './assets/css/style.css';

const Index = () => {
  // utility.network.info.load();
  worker();

  return (
    <MainProvider>
      <Routes />
    </MainProvider>
  );
};

// https://github.com/facebookincubator/create-react-app/issues/1765
// https://reacttraining.com/react-router/web/api/HashRouter
render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.getElementById('container')
);
