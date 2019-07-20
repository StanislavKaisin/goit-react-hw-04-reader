import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Reader from '../publicationsReader/Reader/Reader';
import PageNotFound from '../publicationsReader/PageNotFound/PageNotFound';
import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Reader} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
