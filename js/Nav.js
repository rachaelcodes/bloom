import React, { Component } from 'react';
import styled from 'styled-components';

const colours = ['blue', 'burgundy', 'emerald', 'orange', 'pink', 'purple', 'red', 'sage'];
// const varieties = ['anenome', 'dahlia', 'eucalyptus', 'fern', 'gerbera', 'mix', 'rose'];

const hexColours = {
    blue: '#302BA3',
    burgundy: '#922E4C',
    emerald: '#537A23',
    orange: '#EB6032',
    pink: '#E03F83',
    purple: '#8F74D7',
    red: '#E54431',
    sage: '#6395A6'};

const NavBar = styled.nav`
background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
padding: 0.25rem 0;
width: 100%;
`;

const Button = styled.button`
overflow: hidden;

padding: 8px 8px;
margin: 6px;

text-align: center;

border: 0 none;
border-radius: 3px;

font-size: 13px;
font-weight: 500;

color: whitesmoke;

background-color: ${p=> p.background}
`;

class Nav extends Component {
    render() {
        return(
            <NavBar>
                <div className="buttonrow buttonrow1">
                   {colours.map((colour)=> {return <Button onClick={this.props.handleButton} key={colour+"flowers"} value={colour} background={hexColours[colour]}>{colour}</Button>})} 
                </div>
            </NavBar>
        )
    }
}

export default Nav;