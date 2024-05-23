import React from 'react';
import Header from './header';
import Headliner from './headliner';
import Blurbs from './blurbs'
import Footer from './footer'
import MeetGreet from './meet&greet';

export default class Home extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
      <>
        <Header />
        <Headliner />
        <Blurbs />
        <MeetGreet />
        <Footer />
      </>
    );
  }
}