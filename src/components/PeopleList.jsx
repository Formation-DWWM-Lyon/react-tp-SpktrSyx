import React from 'react';
import { Container, Col, Card, Image, ListGroup, Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


const PeopleList = ({ people, fetchData }) =>
  <Container>
    <Row className="justify-content-center">
      <Button className="nav-button" variant="dark"
        onClick={fetchData}>
        Actualiser
      </Button>
    </Row>
    <Row variant="flush" className="">
      {people.map((person, index) =>
        <Col sm className="mb5d-flex mb-5">
          <Card key={index} className="text-center shadow rounded">
            <Card.Header className="card-header" as="h3">{person.login.username}</Card.Header>
            <Card.Body>
              <Image src={person.picture.large} className="text-center shadow-sm rounded" roundedCircle />
            </Card.Body>
            <ListGroup className="text-left card-infos" variant="flush">
              <ListGroup.Item>Age : {person.dob.age}</ListGroup.Item>
              <ListGroup.Item>Gender : {person.gender}</ListGroup.Item>
              <ListGroup.Item>Country : {person.location.country}</ListGroup.Item>
              <ListGroup.Item>City : {person.location.city}</ListGroup.Item>
            </ListGroup>
            <Card.Footer>
              {/* <ListGroup.Item>Email : {item.email}</ListGroup.Item> */}
              <Button variant="danger">
                See profile
                  </Button>

              {/* <Link to={`/${index}`}>
          <Button variant="primary">
            Back to list
          </Button>
        </Link>
        <Profile {...data} /> */}

            </Card.Footer>
          </Card>
        </Col>
      )}
    </Row>
    {/* <p className="justify-content-center align-items-center">{data.info.page}</p> */}
    <Row className="justify-content-center">
      {/* <Button className="nav-button" variant="dark" 
      onClick={(e) => this.fetchData(people.info.page - 1)}>Prev</Button>
      <Button className="nav-button" variant="danger" 
      onClick={(e) => this.fetchData(1)}>Home</Button>
      <Button className="nav-button" variant="dark" 
      onClick={(e) => this.fetchData(people.info.page + 1)}>Next</Button> */}
    </Row>
  </Container>;

export default PeopleList;