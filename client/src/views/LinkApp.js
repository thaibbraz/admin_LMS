import React from 'react';
import '../App.css';

function LinkApp(props) {

    return (
      <div class="container">
        <div class="row">
          <div class="col-12">
      <table className="table table-striped table-bordered">
      <thead>
          <tr className="table">
            <th scope="col"> #</th>
            <th scope="col">Name</th>
            <th scope="col">github name</th>
          </tr>
      </thead> 
      {props.filteredStudents && props.filteredStudents.map(filteredStudents =>
      <thead>
        <tr className="table">
           <th scope="col">{filteredStudents.id}</th>
          <td>{filteredStudents.name}</td>
          <td>{filteredStudents.surname}</td> 
          <td><button type="button" className="btn btn-warning btn-sm">Edit</button><button type="button" className="btn btn-danger btn-sm">Delete</button></td> 
          
        </tr>
      </thead>
      )}
      </table>
          </div>
        </div>
      </div>
    );
}

export default LinkApp;