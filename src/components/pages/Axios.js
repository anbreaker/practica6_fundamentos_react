import React from 'react';
import axios from 'axios';

import Head from '../Head';
import Navigation from '../Navigation';
import Footer from '../Footer';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const token = `token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjU1NmVkNTQ2ZDg3NDQwNWY0NDNmMSIsImlhdCI6MTYwNTgwOTU0OCwiZXhwIjoxNjA3NTM3NTQ4fQ.5qbCyulNYQgymahmUa82BAp3p3qoWQgKLuNXUNgXkU0`;

const getAdverts = () => {
  const url = `/api/ads?${token}`;
  return client.get(url);
};

class Axios extends React.Component {
  state = {
    adverts: null,
  };

  async componentDidMount() {
    const result = await getAdverts();
    console.log(result, '<-esto');

    this.setState({adverts: result.data});
  }

  render() {
    console.log(this.state);

    const {adverts} = this.state;

    return (
      <React.Fragment>
        <Head />
        <Navigation />

        <div className="container p-4 form-sign">
          <div className="jumbotron">
            <div>{JSON.stringify(adverts)} &#60;--ver</div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Axios;