import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import ProfileCard from '../components/ProfileCard';

export default class DataContainer extends Component {
  state = {
    data: null,
    page: 1,
  }

  componentDidMount = () => {
    this.fetchData();
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchData();
    }
  }

  fetchData = (page = this.state.page) => {
    const now = new Date();
    const seed = now.getMinutes();
    this.setState({ data: null });
    Axios.get(`https://randomuser.me/api/?page=${page}&results=10&seed=${seed}&nat=fr`)
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.error(error));
  }

  nextPage = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  }

  prevPage = () => {
    const { page } = this.state;
    if (page <= 1) {
      return;
    }
    this.setState({ page: page - 1 });
  }

  methods = {
    fetchData: this.fetchData,
    nextPage: this.nextPage,
    prevPage: this.prevPage,
  }

  render = () => {
    const { data, page } = this.state;

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
        <ProfileCard
          people={data.results}
          methods={this.methods}
          page={page}
        />
      );
    }
  }
}