import React from 'react';
import styled from 'styled-components'
import Card from './card';

const StyledHeader = styled.header`
background-color: #000000;
min-height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: 2px solid #033806;
`;

const StyledTitle = styled.h1`
font-size: 4.5rem;
font-family: Bebas Neue;
color: #62ab37;
text-decoration: none;
letter-spacing: .2rem;
margin-top: .5rem;
`;


const StyledSubtitle = styled.h2`
font-size: 2rem;
font-style: italic;
font-family: Kristi;
color: white;
margin-top: -4.5rem;
margin-left: 20rem;
letter-spacing: 2px;
`;


export default class AlexDrake extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
        <>
       <StyledHeader><StyledTitle>The Outsiders</StyledTitle>
       <StyledSubtitle>Ebixia's most wanted heros</StyledSubtitle></StyledHeader>

       <div className='main-body'>
        <Card 
            title="Inside The Mind Of"
            subtitle="Alex [REDACTED] Drake?"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis."
            />
       </div>
       </>
    );
  }
}