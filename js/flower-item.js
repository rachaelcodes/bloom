import React, { Component } from 'react';
import styled from 'styled-components';

const FlowerContainer=styled.div`
height: 200px;
width: 200px;
background-color: #ffffff; 
margin: 5px 5px 7px;
position: relative;
display: flex;
-webkit-box-shadow: 3px 3px 10px 0px rgba(187,187,187,1);
-moz-box-shadow: 3px 3px 10px 0px rgba(187,187,187,1);
box-shadow: 3px 3px 10px 0px rgba(187,187,187,1);
`;

const FlowerDiv = styled.div.attrs({
    backgroundimage: props => props.flower
})`
    display: inline-block;
    height: 90%;
    width: 90%;
    overflow: hidden;
    margin: auto;
    background-image: url(public/images/${props => props.flower}.jpg)};
    background-size: cover;
`;


class FlowerItem extends Component{
    render(){
        return (
            <FlowerContainer className={`griditem ${this.props.colour} ${this.props.variety}`}>
                <FlowerDiv flower={this.props.flower}/>
            </FlowerContainer>
        );
    }
}

export default FlowerItem;