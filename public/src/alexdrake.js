import React from 'react';
import styled from 'styled-components'
import AlexCard from './alexcard';
import './alex.css';
import Nav from './nav';

const StyledHeader = styled.header`
background-color: #000000;
min-height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: 2px solid #00492e;
`;

const StyledTitle = styled.h1`
font-size: 4.5rem;
font-family: Bebas Neue;
color: #00492e;
text-decoration: none;
letter-spacing: rem;
margin-top: 1rem;
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
const StyledFooter = styled.footer`
background-color: #000000;
min-height: 15vh;
border-top: 2px solid #00492e;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const StyledFooterSpan1 = styled.span`
font-size: 1.75rem;
font-family: Bebas Neue;
color: white;
letter-spacing: 2px;
`;

const StyledFooterSpan2 = styled.span`
font-size: 2rem;
font-family: Pacifico;
color: #00492e;
letter-spacing: 2px;
margin-top: -12px;
margin-bottom:-1rem;
`;


export default class AlexDrake extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
        <div className='alex-page-div'>
      <StyledHeader>
        <StyledTitle>The Outsiders</StyledTitle>
        <StyledSubtitle>Ebixia's most wanted heros</StyledSubtitle>
        <Nav />
      </StyledHeader>

       <div className='alex-body'>
        <AlexCard 
         title="Inside The Mind Of"
         subtitle="Alex [REDACTED] Drake?"
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. "
        />

        <AlexCard 
         title="The Leader Himself"
         subtitle="something something?"
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. "
        />
       </div>

       <div className='alex-body'>
        <AlexCard 
         title="Broody Boy"
         subtitle="why so serious?"
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. "
        />
       </div>

       <StyledFooter>
            <StyledFooterSpan1>Outsider NewsLetter Property of:</StyledFooterSpan1><StyledFooterSpan2>Eleanor Dragon</StyledFooterSpan2>
       </StyledFooter>
       </div>
    );
  }
}