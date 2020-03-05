import React from 'react';
import { Image, Container } from 'react-bootstrap';
import { fMonopoly } from './image';
import DataContainer from './containers/DataContainer';

const App = () => 
  <Container>
    <h1 className="title d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
    <Image src={fMonopoly} />
     Dev can be social to
    </h1> 
    <DataContainer />
  </Container>
  

export default App;
