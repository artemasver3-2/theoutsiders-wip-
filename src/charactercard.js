import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCharacterDiv = styled.div`
width: 65%;
border: solid 2px rgba(98, 171, 55, .5);
color: white;
margin: 0 auto;
padding: 1%;
border-radius: 15px;
margin-bottom: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: justify;

@media only screen and (max-width : 460px)  {
  width: 85%;
  margin-bottom: 2.5rem;
  margin-top: -1.5rem;
  border-radius: 10px;
};
`;

const StyledCharacterName = styled.h6`
font-family: Bebas Neue;
font-size: 2.75rem;
color: white;
letter-spacing: .5rem;
margin-top: -1px;
margin-bottom: 1rem;

@media only screen and (max-width : 460px)  {
  font-size: 1.5rem;
  padding: 2px;
  text-align: center;
  margin-top: 1rem;
};
`;

const StyledCharacterSection = styled.section`
width: 85%;
text-align: justify;
margin: 0 auto;
padding-bottom: .5rem;

@media only screen and (max-width : 460px)  {
  width: 85%;
};
`;

const StyledCharacterSpan = styled.span`
color: white;
font-size: 1rem;
padding: 1rem;
font-family: Lexend, sans-serif;
letter-spacing: 2px; 

@media only screen and (max-width : 460px)  {
  font-size: .75rem;
  letter-spacing: 1px;
};
`;

const StyledCharacterLink = styled(Link)`
color:#980002;
font-family: Saira Extra Condensed, sans-serif;
font-size: 1.5rem;
letter-spacing: .15rem;
text-decoration: none;

@media only screen and (max-width : 460px)  {
  font-size: 1rem;
  padding: 2px;
  text-align: center;
};
`;


export default class CharacterCard extends React.Component {
  constructor(props) {
    super(props) 
    this.name = props.name;
    this.info = props.info;
    this.link = props.link;
  }
  render() {
    return (
        <StyledCharacterDiv>
            <StyledCharacterName>{this.props.name}</StyledCharacterName>
            <StyledCharacterSection>
                <StyledCharacterSpan>{this.props.info}</StyledCharacterSpan>
            </StyledCharacterSection>
            <StyledCharacterLink to={this.props.link}>READ MORE ABOUT {this.props.name.toUpperCase()}</StyledCharacterLink>
        </StyledCharacterDiv>
    );
  }
}