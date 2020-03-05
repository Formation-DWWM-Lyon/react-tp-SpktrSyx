import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import { ListGroup, Image, Card, Button, Row, Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Profile from '../components/Profile';

export default class DataContainer extends Component {
  state = {
    data: null
  }

  fetchData = (page) => {

    let url = `https://randomuser.me/api/?page=${page}&results=10&seed=abc&nat=fr`;

    Axios.get(url)
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.error(error));
  }

  componentDidMount = () => {
    this.fetchData();
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
      );
    }
    
    if (data.results) {
      return (
        <Container>
        <Row variant="flush" className="">
          {data.results.map((item, index) =>
            <Col sm className="mb5d-flex mb-5">
              <Card className="text-center shadow rounded">
                <Card.Header className="card-header" as="h3">{item.login.username}</Card.Header>
                <Card.Body>
                  <Image src={item.picture.large} className="text-center shadow-sm rounded" roundedCircle />
                </Card.Body>
                <ListGroup className="text-left card-infos" variant="flush">
                  <ListGroup.Item>Age : {item.dob.age}</ListGroup.Item>
                  <ListGroup.Item>Gender : {item.gender}</ListGroup.Item>
                  <ListGroup.Item>Country : {item.location.country}</ListGroup.Item>
                  <ListGroup.Item>City : {item.location.city}</ListGroup.Item>
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
            <Button className="nav-button" variant="dark" onClick={(e) =>this.fetchData(data.info.page - 1)}>Prev</Button>
            <Button className="nav-button" variant="danger" onClick={(e) => this.fetchData(1)}>Home</Button>
            <Button className="nav-button" variant="dark" onClick={(e) => this.fetchData(data.info.page + 1)}>Next</Button>
          </Row>
          </Container>
      );
    }
  }
}