import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={HomePage}/>
      <Route exact path={'/upload'} component={UploadPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Switch>
  );
};

export default Routes;
