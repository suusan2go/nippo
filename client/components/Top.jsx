import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

class Top extends React.Component {
  render() {
    return (
      <div className="container grid-960">
        <div className="jumbotron">
          <h1>家族で日報を書こう</h1>
          <p>
            Nippoは家族のための日報サービスです
          </p>
          <p>
            <Link to="/articles" className="btn btn-primary btn-raised">
            日報の一覧を確認する
          </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Top;
