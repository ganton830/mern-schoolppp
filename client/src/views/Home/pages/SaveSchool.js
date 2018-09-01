import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import { authHeader } from "../../../helpers/auth-header";

class SaveSchoolPage extends Component {

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
    this.loadSchoolByIdData();
  }

  loadSchoolByIdData() {
    fetch('http://127.0.0.1:3003/schools/' + this.props.match.params.id, this.requestOptions)
      .then(response => response.json())
      .then(response => {
        this.setState({ school: response.data })
      });
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
            <WidgetComponent header='Save School Data' className='shadow-01 mb-4' excerpt=''>
              <form className="container" onSubmit={this.onSaveSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label className="col-form-label">School</label>
                    <select className="form-control">
                      <option>Choose</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label className="col-form-label">year</label>
                    <select className="form-control">
                      <option>Choose</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label className="col-form-label">month</label>
                    <select className="form-control">
                      <option>Choose</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label className="col-form-label">week</label>
                    <select className="form-control">
                      <option>Choose</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="col-form-label">Electro euro</label>
                    <input type="elecEuro" className="form-control" placeholder="Electro euro" />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="col-form-label">Electro Kwh</label>
                    <input type="elecKwh" className="form-control" placeholder="Electro Kwh" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="col-form-label">Heating euro</label>
                    <input type="heatEuro" className="form-control" placeholder="Heating euro" />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="col-form-label">Heating Kwh</label>
                    <input type="heatKwh" className="form-control" placeholder="Heating Kwh" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="col-form-label">Water euro</label>
                    <input type="waterEuro" className="form-control" placeholder="Water euro" />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="col-form-label">Water Kwh</label>
                    <input type="waterLiter" className="form-control" placeholder="Water Kwh" />
                  </div>
                </div>


                <button type="submit" className="btn btn-primary">Save</button>
              </form>
            </WidgetComponent>
          </div>

        </div>
      </div>
    );
  }
}

export default SaveSchoolPage;
