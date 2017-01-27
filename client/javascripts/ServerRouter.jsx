import React from 'react';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import reducers from 'reducers';
import routes from 'routes';

const store = configureStore(reducers);
const renderReact = require('hypernova-react').renderReact;

class ServerRouter extends React.Component {
  render() {
    let error;
    let redirectLocation;
    let routeProps;

    const { location } = this.props;

    match({ routes, location }, (_error, _redirectLocation, _routeProps) => {
      error = _error;
      redirectLocation = _redirectLocation;
      routeProps = _routeProps;
    });

    if (error || redirectLocation) return { error, redirectLocation };

    return (
      <Provider store={store}>
        <RouterContext {...routeProps} />
      </Provider>
    );
  }
}

ServerRouter.propTypes = {
  location: React.PropTypes.string.isRequired,
};

export default renderReact('AppRouter', ServerRouter);
