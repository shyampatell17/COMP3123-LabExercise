import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios
      .get(`https://randomuser.me/api/?results=10`)
      .then((res) => {
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch((err) => console.error("Error fetching data:", err));
  }

  render() {
    return (
      <div className="container my-5">
        <h2 className="text-center text-white bg-success py-3 rounded">User List</h2>
        {this.state.persons.map((person) => (
          <div className="card mb-4 bg-info text-white border-0 rounded" key={person.login.uuid}>
            <div className="card-body d-flex">
              {/* Profile Image and Button */}
              <div className="text-center me-4">
                <img
                  src={person.picture.large}
                  alt={`${person.name.first} ${person.name.last}`}
                  className="rounded-circle mb-3"
                  style={{ width: "120px", height: "120px" }}
                />
                <button className="btn btn-light btn-sm">Details</button>
              </div>

              {/* User Details */}
              <div>
                <h5>
                  {person.name.title} {person.name.first} {person.name.last}
                </h5>
                <p className="mb-1">
                  <strong>Username:</strong> {person.login.username}
                </p>
                <p className="mb-1">
                  <strong>Gender:</strong> {person.gender}
                </p>
                <p className="mb-1">
                  <strong>Address:</strong> {person.location.street.number}{" "}
                  {person.location.street.name}, {person.location.city},{" "}
                  {person.location.state}, {person.location.country}
                </p>
                <p className="mb-1">
                  <strong>Email:</strong> {person.email}
                </p>
                <p className="mb-1">
                  <strong>Phone:</strong> {person.phone}
                </p>
                <p className="mb-1">
                  <strong>Cell:</strong> {person.cell}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;
