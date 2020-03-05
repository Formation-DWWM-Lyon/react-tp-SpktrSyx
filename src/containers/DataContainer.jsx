import React, { Component } from 'react';
import Axios from 'axios';
import User from '../components/User';
import Loader from 'react-loader-spinner';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

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
    const { data, } = this.state;
    
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
          <ListGroup>
            {data.results.map( (item, index) =>
              <ListGroup.Item>{item.name.first} {item.name.last}</ListGroup.Item>
            )}
          </ListGroup>
        );
      }
    
    // return <User {...data}/>;
  }
}