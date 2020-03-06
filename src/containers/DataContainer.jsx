import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import PeopleList from '../components/PeopleList';

export default class DataContainer extends Component {
  state = {
    data: null
  }

  componentDidMount = () => {
    this.fetchData();
  }

  fetchData = (page) => {
    this.setState({ data: null });
    const now = new Date();
    const seed = now.getMinutes();
    let url = `https://randomuser.me/api/?page=${page}&results=10&seed=${seed}&nat=fr`;

    Axios.get(url)
      .then(response => this.setState({ data: response.data }))
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
      );
    }
    
    if (data.results) {
      return (
        <PeopleList
        people={data.results}
        fetchData={this.fetchData}
      />
      );
    }
  }
}