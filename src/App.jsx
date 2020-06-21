import React from 'react';
import { Header } from './cmps/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MyApp } from './pages/MyApp';

export function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={MyApp} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}