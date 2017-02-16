import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';

const Button = styled.button `
  background: red;
  color: white;
  font-size: 2em;
  margin: .5em;
  padding: 0.25em .5em;
  border: 2px solid white;
  border-radius: 3px;
  position:relative; 
`;

const Wrapper = styled.header `
  padding: 5px;
  background: Red;
`;


const SearchInput = styled.input `
  font-size: 1em;
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  float: right;
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

const Title = styled.h1 `
  font-size: 1.5em;
  color: white;
  float: right;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
        color: tomato;
        display: block;
        margin: 0.5em 0;
        font-family: Helvetica, Arial, sans-serif;

        &:hover {
            text-decoration: underline;
        };
        float: right;
        `;

export default class Header extends React.Component {

    constructor() {
        super();

    }

    handleClick(e) {
        window.location = '/';
    }

    render() {
        const user = "Tanos";
        return ( 
            <Wrapper>
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Button class="navbar-brand" onClick = { this.handleClick.bind(this) }> RateFlix </Button>    
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li>
                                <Link to="about">About</Link>
                            </li>
                            <li>
                                <Link to="userprofile">User Profile</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                        </ul>
                        <StyledLink>{user}</StyledLink>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </nav>
            </Wrapper>
        );
    }
}