import React, { Component } from 'react';
import FlowerItem from './flower-item';
import model from './flower_object';
import styled from 'styled-components';
import Isotope from 'isotope-layout';

const isotopeFunction = () => {
  const elem = document.querySelector('.grid');
  const iso = new Isotope( elem, {
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
};

const Container = styled.div`
margin-top: 0;
position: absolute;
background: #bc4e9c; 
background: -webkit-linear-gradient(to bottom, #f80759, #bc4e9c);  
background: linear-gradient(to bottom, #f80759, #bc4e9c); 
min-height: 100vh;
width: 100vw;
`;

const Header = styled.header`
background: black;
color: #f80759;
text-align: center;
padding: 0.25rem 0;
width: 80%;
margin: .5rem auto;
border-radius: 5px;
`;

const Content = styled.section`
width: 80%;
height: contain;
`;

const Sizer = styled.div`
width: 100%;
`;

class App extends Component {

  componentDidMount(){
    isotopeFunction();
  }

  render() {
    return (
     <Container>
        <Header className="App-header">
          <h1 className="App-title">Bloomin' Marvellous</h1>
        </Header>
        <Content className="grid">
          <Sizer classname="grid-sizer" />
           {Object.keys(model).map((flowerType)=> {return (
            <FlowerItem className="grid-item" flower={flowerType} key={flowerType}/>  
          )})} 
        </Content>
      </Container>
    );
  }
}

export default App;
