import React from 'react';
import Card from './card'


export default class Headliner extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
        <div className='main-div'>
            <Card 
            title="INSERT BLURBS HERE MAYBE" 
            subtitle="blllluuuuurrrbbbbbbsssss" 
            info="My name is, my name is what, my name is who, my name chicka chicka i need to sleep more" />
        </div>
    );
  }
}