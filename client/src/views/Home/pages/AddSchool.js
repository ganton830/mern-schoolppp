import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import { authHeader } from "../../../helpers/auth-header";

class AddSchoolsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      school: {
        schoolName: '',
        schoolData: {
          year: '',
          month: '',
          week: ''
        }
      }
    };

    this.onAddSubmit = this.onAddSubmit.bind(this);
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
  }
  componentWillMount() {
    // this.loadUserData();
  }

  onAddSubmit(e) {
    e.preventDefault();
    const { schoolName, schoolData } = this.state.school;
    const { dispatch } = this.props;

    this.add(schoolName, schoolData);

  }

  onChange = (e) => {
    const state = this.state.school
    state[e.target.name] = e.target.value;
    this.setState({ school: state });
  }


  add(schoolName, schoolData) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ schoolName, schoolData })
    };
    return fetch('http://127.0.0.1:3003/schools/', requestOptions)
      .then(response => {
        this.props.history.push("/");
      })
  }

  render() {

    return (
      <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">

        <div className="row">

          <div className="col-lg-12 mb-3">
            <WidgetComponent header='Add School' className='shadow-01' excerpt=''>
              <form className="container" onSubmit={this.onAddSubmit}>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="validationCustom01">Add School</label>
                    <input type="text" className="form-control" placeholder="Enter School Name" onChange={this.onChange} value={this.state.school.schoolName} name="schoolName" required />
                  </div>
                </div>
                <button className="btn btn-primary" type="submit">Save</button>
              </form>
            </WidgetComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default AddSchoolsPage;
