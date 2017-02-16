import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import menus from './config/menu.json';


export default class Navbar extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
           collapsed : true
        };

    }

    handleClick() {
        window.location = '/';
    }
    toggleCollapse(){
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }
    
    isActive  = (currentPath, menuPath) => (currentPath.indexOf(menuPath) > -1) ;

    render() {
        const user = "Tanos";
        const {history} = this.props;
        const {location} = history;
        const {collapsed} = this.state;

        const navClass = collapsed ? "collapse" : "";

        return ( 
            <Wrapper>
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" onClick = { this.toggleCollapse.bind(this) }>
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Button class="navbar-brand" onClick = { this.handleClick.bind(this) }> RateFlix </Button>    
                    </div>
                    <div class={"navbar-collapse " + navClass } id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            { 
                                menus
                                    .map(menu => 
                                        <li className= { this.isActive(location.pathname,menu.route) ? "active" : ""}
                                             key={menu.title}>
                                            <Link to={menu.route}> {menu.title} 
                                            </Link>
                                        </li>
                                    )
                            }
                        </ul> 
                        <ul class ="nav navbar-nav navbar-right">
                            <li>
                                <StyledLink>{user}</StyledLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </nav>
            </Wrapper>
        );
    }
}

const Button = styled.button `
  background: red;
  color: white;
  font-size: 1.5em;
  margin: .2em;
  padding: 0.1em .25em;
  border: 2px solid white;
  border-radius: 3px;
  position:relative; 
  height: 40px;
`;

const Wrapper = styled.header `
  padding: 5px;
`;


const SearchInput = styled.input `
  font-size: 1em;
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 1px;
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
        margin: 0.25em 0;
        font-family: Helvetica, Arial, sans-serif;

        &:hover {
            text-decoration: underline;
        };
        `;