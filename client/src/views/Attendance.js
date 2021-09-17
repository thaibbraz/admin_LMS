import React, { useEffect, useState } from "react";
import '../App.css';

function Attendance(props) {
const [students, setStudents] = useState([])
const [date, setDate] = useState([])


useEffect(() => {
  const presentList =  props.filteredStudents.map(v => ({...v, attendant: false}))
  setStudents(presentList)
}, [props.filteredStudents]);

const inputChangeDate = (event) => {
  setDate(event.target.value);
}

const inputChangePresent = (id) =>{
   
   let newStudentList = students.map(student => {
     if(student.id === id){
      student.attendant = student.attendant === true ? false : true;
     }
     return student   
   })
   setStudents(newStudentList)  
}

function submit(){
  props.postAttendance(students)
}

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
      {students && students.map(student =>
      <thead>
        <tr className="table-light">           
          <td> {student.name}</td>
          {/* <td></td>*/}
          {/* {activities.map(a => <td>{}</td>)}    */}
          <td><input name="present" checked={student.attendant} type="checkbox" onChange={ () => inputChangePresent(student.id)} /></td>  
        </tr>
      </thead>
        )}
      </table>

      <table className="table">
      <thead>
          <tr className="table">             
          <th  scope="col">Date: <input onChange={(e) => inputChangeDate(e)} name="date" type="date"/></th>              
          </tr>
      </thead>    
      </table>
      <button type="button" className="btn btn-sm btn-primary" onClick={submit} >Submit</button>
      </div>
      </div>
); 
}
export default Attendance;