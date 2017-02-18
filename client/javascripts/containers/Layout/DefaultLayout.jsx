import React from 'react';
import Header from 'containers/Layout/Header';
import FlashMessages from 'containers/FlashMessages';

type Props = {
  children: React.Element<*>,
}

const DefaultLayout = (props: Props) => (
  <div className="wrapper">
    <FlashMessages />
    <Header />
    <section className="main">
      {props.children}
    </section>
  </div>
);

export default DefaultLayout;
