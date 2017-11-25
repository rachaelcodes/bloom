import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlowerItem from './flower-item';
import model from './flower_object';
import styled from 'styled-components';
import Isotope from 'isotope-layout';


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
max-width: 500px;
margin: .5rem auto;
border-radius: 5px;
`;

const Content = styled.section`
width: 80%;
height: contain;
margin: auto;
`;

const Sizer = styled.div`
width: 100%;
`;

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {isotope: null};

    this.isoOptions = {
      itemSelector: '.griditem',
        layoutMode: 'masonry',
        masonry: {
          columnWidth: '.gridsizer'
        }
    };
  }



  // componentDidMount(){
  //   if (!this.state.isotope) {
  //     this.setState({
  //       isotope: this.isotopeFunction()
  //     });
  //   } else {
  //     iso.reloadItems();
  //   }
  // }

  // componenteDidUpdate(){
  //   if (this.state.isotope) {
  //     iso.reloadItems();
  //     iso.layout();
  //   }
  // }

  // isotopeFunction() {
  //   this.iso = new Isotope(ReactDOM.findDOMNode(this.refs.grid), this.isoOptions);
  // }

  render() {
    return (
     <Container>
        <Header className="App-header">
          <h1 className="App-title">Bloomin' Marvellous</h1>
        </Header>
        <Content className="grid" id="grid" ref="grid" data-isotope='{ "itemSelector": ".griditem", "layoutMode": "fitRows" }'>
          <Sizer className='gridsizer' />
           {Object.keys(model).map((flowerType)=> {return (
            <FlowerItem flower={flowerType} key={flowerType}/>  
          )})} 
        </Content>
      </Container>
    );
  }
}

export default App;
