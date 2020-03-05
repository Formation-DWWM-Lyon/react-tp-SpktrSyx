import React, { Component } from 'react';
import Axios from 'axios';
import User from '../components/User';
import Loader from 'react-loader-spinner';
import { ListGroup, ListGroupItem, Image, Card, Button, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class DataContainer extends Component {
  state = {
    data: null 
  }

  componentDidMount = () => {
    console.log("Le composant Container vient juste d'être monté!");
    Axios.get('https://randomuser.me/api/?page=1&results=10&seed=abc&nat=fr')
    .then(response =>  this.setState({ data: response.data }))
    .catch(error => console.error(error));
  }
  
  render = () => {
    const { data } = this.state;
    
    if (!data) {
      return (
          <div className="text-center">
            <Loader
              type="Rings"
              color="#FFCF39"
              height={100}
              width={100}
            />
          </div>
        );;
    }
    
    console.log(data.results);
    if (data.results) {
        return (
          <Row variant="flush" className="">
            {data.results.map( (item, index) =>
    <Col sm>
    <Card className="text-center">
      <Card.Header as="h3">{item.login.username}</Card.Header>
      <Card.Body><Image src={item.picture.large} roundedCircle/></Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>Age : {item.dob.age}</ListGroup.Item>
        <ListGroup.Item>Gender : {item.gender}</ListGroup.Item>
        <ListGroup.Item>Country : {item.location.country}</ListGroup.Item>
        <ListGroup.Item>City : {item.location.city}</ListGroup.Item>
      </ListGroup> 
      <Card.Footer>
        {/* <ListGroup.Item>Email : {item.email}</ListGroup.Item> */}
        <Button variant="primary">See profile</Button>
      </Card.Footer> 
    </Card>
    </Col>
    )}
          </Row>
        );
      }
    
    return <User {...data}/>;
  }
}