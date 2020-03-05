import React from 'react';
import { Card, ListGroup, } from 'react-bootstrap';

const User = ({ username, gender, country, city, age, login, picture, registered }) =>
<Card>
  <Card.Header as="h3">USERNAME {login}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Profile</Card.Subtitle>
    </Card.Body>
  <ListGroup variant="flush">
    <ListGroup.Item>PHOTO {picture}</ListGroup.Item>
    {/* A FAIRE */}
    <ListGroup.Item>Age : {age }</ListGroup.Item>
    <ListGroup.Item>Gender : {gender}</ListGroup.Item>
    <ListGroup.Item>Country : {country}</ListGroup.Item>
    <ListGroup.Item>City : {city}</ListGroup.Item>
   </ListGroup> 
  <Card.Footer>
    <small className="text-muted">
      Registered {new Date(registered).toDateString() }
      {/* A FAIRE */}
    </small>
  </Card.Footer>
</Card>

export default User;