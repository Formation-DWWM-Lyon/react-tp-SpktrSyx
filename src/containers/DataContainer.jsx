import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import PeopleList from '../components/PeopleList';

export default class DataContainer extends Component {
  state = {
    data: null
  }

  fetchData = (page) => {
    const now = new Date();
    const seed = now.getMinutes();
    let url = `https://randomuser.me/api/?page=${page}&results=10&seed=${seed}&nat=fr`;
    this.setState({ data: null });
    
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
        <PeopleList people={data.results} />
      );
    }
  }
}