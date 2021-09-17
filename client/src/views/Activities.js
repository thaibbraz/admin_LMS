import React, { useEffect, useState } from "react";
import '../App.css';

function Activities(props) {
const [activities, setActivities] = useState([
    " introduction-and-dev-environment",
    " variables-and-operators",
    " conditionals",
    " objects",
    " arrays",
    " loops",
    " looping-through-objects",
    " looping-through-arrays",
    " functions",
    " higher-order-functions",
    " closures",
    " classes",
    " queues-and-stacks",
    " linked-lists",
    " recursion",
    " trees",
    " graphs",
    " DOM",
    "Milestone Four",
    " Vue",
    " React"
]);





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
    <div className="table-act">
    <div className="table-responsive">
      <table className="table table-hover table-bordered table-sm ">
      <thead>
          <tr className="table-warning">
             <th scope="col">Student</th>
           
            {activities.map(a => <th scope="col">{a}</th>)}
            <th scope="col">Grade</th>
            <th scope="col">{}</th>
          </tr>
      </thead> 
      {props.filteredStudents && props.filteredStudents.map(filteredStudents =>
      <thead>
        <tr className="table-light">           
          <td> {filteredStudents.name}</td>
          {activities.map(a => 
          <td contenteditable='true'></td>)}   
          <td contenteditable='true'></td>
          <td><button type="button" className="btn btn-success btn-sm">Export .csv</button></td> 
          
        </tr>
      </thead>
      )}
      </table>
      </div>
      </div>
); 
}
export default Activities;