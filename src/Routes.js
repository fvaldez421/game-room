import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/Home';

const Routes = () => (
  <Router>
    <Route exact to='/' component={HomePage} />
    {/* <Route exact to='/' component={} /> */}
    {/* <Route exact to='/' component={} /> */}
    {/* <Route exact to='/' component={} /> */}
    {/* <Route exact to='/' component={} /> */}

  </Router>
)


export default Routes;
