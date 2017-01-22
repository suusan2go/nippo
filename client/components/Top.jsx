import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

class Top extends React.Component {
  render() {
    return (
      <section>
        <div className="container grid-960">
          <div className="jumbotron text-center">
            <h1>家族で日報を書こう</h1>
            <p>Nippoは家族のための日報サービスです</p>
            <p>
              <Link to="/articles" className="btn btn-primary btn-raised">
                日報の一覧を確認する
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Top;
