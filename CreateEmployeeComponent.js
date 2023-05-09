import React, { Component } from "react";
import EmployeeServices from "../services/EmployeeServices";
export class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      firstname: "",
      lastname: "",
      email: "",
    }
    this.changeEmployeeIdHandler = this.changeEmployeeIdHandler.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
  }

  changeFirstNameHandler = (e) => {
    this.setState({ firstname: e.target.value });
  };
  changeLastNameHandler = (e)=>{
    this.setState({lastname:e.target.value});
  }
  changeEmailHandler = (e)=>{
    this.setState({email:e.target.value});
  }
  changeEmployeeIdHandler = (e)=>{
    this.setState({id:e.target.value});
  }

  saveOrUpdateEmployee = (e)=>{
    e.preventDefault();
    let employee = {firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email};
    console.log('employee ===> '+JSON.stringify(employee));
    EmployeeServices.createEmployee(employee).then((res)=>{
        console.log(res);
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card-header">
                <h1>Create EmployeeComponent</h1>
              </div>
              <div className="card-body">
                <form>
                <div className="form-group">
                  <label>Employee Id:</label>
                  <input
                    placeholder="Enter Employee Id"
                    name="id"
                    className="form-control"
                    value={this.state.id}
                    onChange={this.changeEmployeeIdHandler}
                  />
                </div>               
                 <div className="form-group">
                  <label>First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstname"
                    className="form-control"
                    value={this.state.firstname}
                    onChange={this.changeFirstNameHandler}
                  />
                </div>

                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="lastname"
                    className="form-control"
                    value={this.state.lastname}
                    onChange={this.changeLastNameHandler}
                  />
                </div>

                <div className="form-group">
                  <label>Email Id:</label>
                  <input
                    placeholder="Emaid Id"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.changeEmailHandler}
                  />
                </div>
                <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                <button className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;
