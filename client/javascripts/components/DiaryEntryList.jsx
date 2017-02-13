import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

type Props = {
  actions: { fetchDiaryEntries: Action, clearDiaryEntries: Action },
  diaryEntries: Array<{
    title: string,
    body: string,
  }>
}

class DiaryEntryList extends React.Component {
  componentWillMount() {
    this.props.actions.fetchDiaryEntries();
  }

  componentWillUnmount() {
    this.props.actions.clearDiaryEntries();
  }


  props: Props

  render() {
    const { diaryEntries } = this.props;
    return (
      <div className="container-fluid">
        <Helmet title="DiaryEntryList" />
        <section className="row">
          <div className="col-sm-2 col-sm-offset-10">
            <div className="pull-right">
              <Link to="/diaries/new" className="btn btn-primary btn-raised">日報を書く</Link>
            </div>
          </div>
        </section>
        <div className="list-group">
          {
            diaryEntries.map(diaryEntry => (
              <div>
                <div className="list-group-item">
                  <div className="row-picture">
                    <img className="circle" src="http://lorempixel.com/56/56/people/1" alt="icon" />
                  </div>
                  <div className="row-content">
                    <h4 className="list-group-item-heading">{diaryEntry.title}</h4>
                    <p className="list-group-item-text">{diaryEntry.body}</p>
                  </div>
                </div>
                <div className="list-group-separator" />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default DiaryEntryList;
