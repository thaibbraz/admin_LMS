import React, { useEffect, useState } from "react";
import '../App.css';

function Attendance(props) {
const [attendance, setAttendance] = useState([
  
])
//   useEffect(() => {
//     props.getFilteredLinks();
//   }, [props.userId]);
  

//   async function deleteLink(id) {
//     let options = {
//       method: "DELETE",
//     }
//     try {
//       console.log(id)
//       let response = await fetch(`/links/${id}`, options);
//       if (response.ok) {
//         let data = await response.json();
//         props.setFilteredLinks(data);
//       } else {
//         console.log(`Server error: ${response.status} ${response.statusText}`);
//       }
//     } catch (err) {
//       console.log(`Network error: ${err.message}`);
//     }
//     }
return (    
    <div className="container">
    <div className="table-responsive">
      <table className="table table-hover table-bordered table-sm ">
      <thead>
          <tr className="table-warning">
             <th scope="col">Student</th>
           
            {/* {activities.map(a => <th scope="col">{a}</th>)} */}
            {/* <th scope="col"></th> */}
            <th scope="col">Present</th>
          </tr>
      </thead> 
      {props.filteredStudents && props.filteredStudents.map(filteredStudents =>
      <thead>
        <tr className="table-light">           
          <td> {filteredStudents.name}</td>
          {/* <td></td> 
          */}
          {/* {activities.map(a => <td>{}</td>)}    */}
          <td><input type="checkbox"/></td>  
        </tr>
      </thead>
        )}
      </table>

      <table className="table">
      <thead>
          <tr className="table">             
             <th scope="col">Date: <input type="date"/></th>         
          </tr>
      </thead>    
      </table>
      <button type="button" className="btn btn-sm btn-primary">Submit</button>
      </div>
      </div>
); 
}
export default Attendance;