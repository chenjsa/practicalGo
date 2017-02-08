import React, { PropTypes } from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';

import Layout from './routes/layout';
import Dashbord from './routes/dashbord';
import Post from './routes/post.js';
import Article from './routes/article.js';

export default function ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout} >
        <IndexRedirect to="article" />
        <Route path="article" component={Article} />
        <Route path="post" component={Post} />
        <Route path="dashbord" component={Dashbord} />
      </Route>
    </Router>
  );
}
