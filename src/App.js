import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { fMonopoly } from './image';
import DataContainer from './containers/DataContainer';

const App = () => 
  <Container>
    <Row sm className="mb5d-flex mb-5">
      <Col>
        <h1 className="title d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
        <Image src={fMonopoly} />
        Dev can be social to
        </h1> 
      </Col>
    </Row>
    <DataContainer />
  </Container>
  

export default App;
