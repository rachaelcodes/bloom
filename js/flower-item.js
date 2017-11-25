import React, { Component } from 'react';
import styled from 'styled-components';

const FlowerContainer=styled.div`
height: 200px;
width: 200px;
background-color: black; 
margin: 5px;
position: relative;
display: flex;
border-radius: 5px;
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
            <FlowerContainer className="griditem">
                <FlowerDiv flower={this.props.flower}/>
            </FlowerContainer>
        );
    }
}

export default FlowerItem;