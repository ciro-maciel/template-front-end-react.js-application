import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { network } from '@ciro-maciel/utility';

import { MainProvider } from 'providers';
import { worker } from 'utils';

import Routes from './routes';

import './assets/css/style.css';

const Index = () => {
  network.info.load();
  worker();

  return (
    <MainProvider>
      <Routes />
    </MainProvider>
  );
};

render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.getElementById('container')
);
