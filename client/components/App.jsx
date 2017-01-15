import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className="container grid-960">
        <div className="columns">
          <section>
            <Link to="/gifts">
              Hello React HMR !!!!!!!!
            </Link>
            <Link to="/gifts">
              Hello React HMR !!!!!!!!
            </Link>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
