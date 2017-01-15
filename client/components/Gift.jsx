import React from 'react';
import Helmet from 'react-helmet';
import Card from 'components/common/Card';

class App extends React.Component {
  render() {
    return (
      <div className="container grid-960">
        <Helmet title="Gift" />
        <div className="columns">
          <div className="columns">
            <div className="column col-4 col-sm-12">
              <Card />
            </div>
            <div className="column col-4 col-sm-12">
              <Card />
            </div>
            <div className="column col-4 col-sm-12">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
