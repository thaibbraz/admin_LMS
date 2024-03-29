import React, { useEffect, useState } from "react";
import '../App.css';

function Attendance(props) {
const [students, setStudents] = useState([])
const [date, setDate] = useState([])


useEffect(() => {
  const presentList =  props.filteredStudents.map(v => ({...v, present: false}))
  setStudents(presentList)
}, [props.filteredStudents]);

const inputChangeDate = (event) => {
  setDate(event.target.value);
}

const inputChangePresent = (id) => {
   
   let newStudentList = students.map(student => {
     if(student.id === id){
      student.present = student.present === true ? false : true;
     }
     return student   
   })
   setStudents(newStudentList)  
}

function submit(){

  let presents = students.map((student) =>
{
   let newStudent = {
      id_student: student.id,
      date: date || "",
      present : student.present
    }
    return newStudent
})

props.postAttendanceList(presents)
}


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
          <td><input name="present" checked={student.present} type="checkbox" onChange={ () => inputChangePresent(student.id)} /></td>  
        </tr>
      </thead>
        )}
      </table>

      <table className="table">
      <thead>
          <tr className="table">             
          <th scope="col">Date: <input onChange={(e) => inputChangeDate(e)} name="date" type="date"/></th>              
          </tr>
      </thead>    
      </table>
      <button type="button" className="btn btn-sm btn-primary" onClick={submit} >Submit</button>
      </div>
      </div>
); 
}
export default Attendance;