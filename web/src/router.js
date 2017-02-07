import React, { PropTypes } from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';


import Layout from './routes/layout';
import Dashbord from './routes/dashbord';

export default function ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout} >
        <IndexRedirect to="dashbord" />
        <Route path="dashbord" component={Dashbord} />
      </Route>
    </Router>
  );
}
