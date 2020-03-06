import React from 'react';
import { Container, Col, Card, Image, ListGroup, Button, Pagination } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


const ProfileCard = ({ people, methods, page }) =>
  <Container>
    <Row className="justify-content-center">
      <Button className="refresh-button" variant="dark"
        onClick={methods.fetchData}>
        Refresh
      </Button>
    </Row>
    <Row variant="flush" className="">
      {people.map((person, index) =>
        <Col sm className="mb5d-flex mb-5 identity">
          <Card key={index} className="text-center rounded identity-card card-1">
            <Card.Header className="card-header" as="h4">{person.login.username}</Card.Header>
            <Card.Body>
              <Image src={person.picture.large} className="shadow-sm rounded picture-card" roundedCircle />
            </Card.Body>
            <ListGroup className="text-left card-infos" variant="flush">
              <ListGroup.Item>Age : {person.dob.age}</ListGroup.Item>
              <ListGroup.Item>Gender : {person.gender}</ListGroup.Item>
              <ListGroup.Item>Country : {person.location.country}</ListGroup.Item>
              <ListGroup.Item>City : {person.location.city}</ListGroup.Item>
            </ListGroup>
            <Card.Footer>
              <Button variant="danger">
                See profile
                  </Button>
            </Card.Footer>
          </Card>
        </Col>
      )}
    </Row>
    <Pagination className="justify-content-center">
      <Pagination.Prev className="nav-button next-prev" variant="dark" 
      onClick={methods.prevPage} disabled={page === 1}></Pagination.Prev>
      <Button className="nav-button" variant="danger" 
      onClick={(e) => this.fetchData(1)}>Home</Button>
      <Pagination.Next className="nav-button next-prev" variant="dark" 
      onClick={methods.nextPage}></Pagination.Next>
    </Pagination>
  </Container>;

export default ProfileCard;