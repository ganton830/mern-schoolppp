import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import { authHeader } from "../../../helpers/auth-header";
import { Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

class TableEditPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        email: '',
      }
    };

    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
  }
  componentDidMount() {
    this.loadUserDataById();
  }

  loadUserDataById() {

    fetch('http://127.0.0.1:3003/user/' + this.props.match.params.id, this.requestOptions)
      .then(response => response.json())
      .then(response => {
        this.setState({ user: response.data })
      });
  }

  onChange = (e) => {
    const state = this.state.user
    state[e.target.name] = e.target.value;
    this.setState({ user: state });
  }

  onEditSubmit(e) {
    e.preventDefault();

    const { username, email } = this.state.user;
    const { dispatch } = this.props;
    if (username && email) {
      this.edit(username, email);
    }
  }

  edit(username, email) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email })
    };
    return fetch('http://127.0.0.1:3003/user/' + this.props.match.params.id, requestOptions)
      .then(response => {
        this.props.history.push("/");
      })
  }

  render() {

    return (
      <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">
        <div className="col-lg-12 mb-3">
          <WidgetComponent header='Edit User' className='shadow-01 mb-4' excerpt=''>
            <form className="container" onSubmit={this.onEditSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom01">User Name</label>
                  <input type="text" className="form-control" placeholder="User name" name="username" onChange={this.onChange} value={this.state.user.username} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom02">Email</label>
                  <input type="text" className="form-control" placeholder="Email" onChange={this.onChange} name="email" value={this.state.user.email} required />
                </div>
              </div>
              <button className="btn btn-primary" type="submit">Update</button>
            </form>
          </WidgetComponent>
        </div>
      </div>
    );
  }
}

export default TableEditPage;
