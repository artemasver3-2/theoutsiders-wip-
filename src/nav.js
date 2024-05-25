import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCharacterLink = styled(Link)`
color:white;
font-family: Saira Extra Condensed, sans-serif;
font-size: 1.5rem;
letter-spacing: .15rem;
text-decoration: none;

@media only screen and (max-width : 460px)  {
  font-size: 1rem;
  margin-bottom: 2px;
};
`;

export default class Nav extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
        <nav>
          <StyledCharacterLink to="/">HOME ||</StyledCharacterLink>&nbsp;
          <StyledCharacterLink to="/">HERE ||</StyledCharacterLink>&nbsp;
          <StyledCharacterLink to="/">THERE</StyledCharacterLink>
        </nav>
    );
  }
}