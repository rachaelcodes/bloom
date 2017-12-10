import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav.js';
import FlowerItem from './flower-item';
import model from './flower_object';
import styled from 'styled-components';
import Isotope from 'isotope-layout';


const Container = styled.div`
margin-top: 0;
position: absolute;
background: whitesmoke; 
background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
min-height: 100vh;
width: 100vw;
overflow: scroll;
`;

const Header = styled.header`
width: 100%;
-webkit-box-shadow: 3px 3px 10px 0px rgba(187,187,187,1);
-moz-box-shadow: 3px 3px 10px 0px rgba(187,187,187,1);
box-shadow: 3px 3px 10px 0px rgba(187,187,187,1);
`;

const Content = styled.section`
width: 90%;
height: contain;
margin: auto;
`;

const Sizer = styled.div`
width: 100%;
`;

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {filter: '*'};

    this.handleButton = this.handleButton.bind(this);

  }

  componentWillUpdate(nextProps, nextState) {
    var iso = Isotope.data( document.getElementById('grid') );
    console.log(iso);

    iso.arrange({
      filter: '*'
    });
    iso.reloadItems();

    iso.arrange({
      filter: `${nextState.filter}`
    });

    
  }

  handleButton(button){
    console.log(button.target.value);
    this.setState({
      filter: `.${button.target.value}`
    })
  }

  render() {
    return (
     <Container>
        <Header className="App-header">
          <Nav handleButton={this.handleButton}/>
        </Header>
        <Content className="grid" id="grid" ref="grid" data-isotope={`{ "itemSelector": ".griditem", "layoutMode": "fitRows" }`}>
          <Sizer className='gridsizer' />
           {Object.keys(model).map((flowerType)=> {return (
            <FlowerItem flower={flowerType} key={flowerType} colour={model[flowerType]["colour"]} variety={model[flowerType]["variety"]}/>  
          )})} 
        </Content>
      </Container>
    );
  }
}

export default App;
