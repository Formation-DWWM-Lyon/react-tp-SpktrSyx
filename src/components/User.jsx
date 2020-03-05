import React from 'react';
import { Card, ListGroup, Image, } from 'react-bootstrap';

const User = ({ gender, country, email, city, age, login, picture, registered }) =>
<Card>
  <Card.Header as="h3">USERNAME {login.username}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Profile</Card.Subtitle>
    </Card.Body>
  <ListGroup variant="flush">
    <Image src={picture.large} roundedCircle/>
    {/* A FAIRE */}
    <ListGroup.Item>Age : {age}</ListGroup.Item>
    <ListGroup.Item>Gender : {gender}</ListGroup.Item>
    <ListGroup.Item>Country : {country}</ListGroup.Item>
    <ListGroup.Item>City : {city}</ListGroup.Item>
    <ListGroup.Item>Email : {email}</ListGroup.Item>
   </ListGroup> 
  <Card.Footer>
    <small className="text-muted">
      Registered {new Date(registered).toDateString() }
      {/* A FAIRE */}
    </small>
  </Card.Footer>
</Card>

export default User;