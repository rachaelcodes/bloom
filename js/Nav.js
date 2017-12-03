import React, { Component } from 'react';
import styled from 'styled-components';

const colours = ['blue', 'burgundy', 'emerald', 'orange', 'pink', 'purple', 'red', 'sage'];
// const varieties = ['anenome', 'dahlia', 'eucalyptus', 'fern', 'gerbera', 'mix', 'rose'];

class Nav extends Component {
    render() {
        return(
            <nav>
                <div className="buttonrow buttonrow1">
                   {colours.map((colour)=> {return <button onClick={this.props.handleButton} key={colour+"red"} value={colour}>{colour}</button>})} 
                </div>
            </nav>
        )
    }
}

export default Nav;