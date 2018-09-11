import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import history from './history';
import MenuAppBar from './MenuAppBar';
import Dashboard from './Dashboard';

const BasicExample = () => (
  <Router history={history}>
    <div>
      <CssBaseline />
      <MenuAppBar classes={{}} />

      <Route exact path="/" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;
