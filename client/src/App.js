import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import Local from './helpers/Local';
import Api from './helpers/Api';
import { useHistory } from 'react-router-dom';


export default function App() {
const [cohort, setCohort] = useState({});
const [filteredStudents, setFilteredStudents] = useState([]);
const [user, setUser] = useState(Local.getUser());
const [loginErrorMsg, setLoginErrorMsg] = useState('');
const history = useHistory();
// Este useEffect é chamado quando o loggedIn termina de alterar seu estado
useEffect(() => {
  getFilteredStudents();
}, [cohort])


async function postAttendance(student) {
    let options = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(student)
    }
    
    try {      
      let response = await fetch('/attendance',options);
      if (response.ok){
        let data = await response.json();
        console.log(data)
      } else{
        console.log(`Server error: ${response.status} ${response.statusText}`)
      }
    }catch (err) {
     console.log(`Network error: ${err.message}`);
   }
 };
    
 const postAttendanceList = (students) => {
   console.log(students)
  students.map(student => postAttendance(student))

 }

  
const getFilteredStudents = () => {

  let userId = cohort.name
  console.log(userId)
  fetch(`/students?cohort=${userId}`)
  .then(response => response.json())
  .then(links => {
    setFilteredStudents(links);
  })
  .catch(error => {
    console.log(error);
  });
};

const handleSelectCohort = (u) => {
  setCohort(u);
}
async function doLogin(username, password) {
  let response = await Api.loginUser(username, password);
  if (response.ok) {
      Local.saveUserInfo(response.data.token, response.data.user);
      setUser(response.data.user);
      setLoginErrorMsg('');
      history.push('/');
  } else {
      setLoginErrorMsg('Login failed');
  }
}

function doLogout() {
  Local.removeUserInfo();
  setUser(null);
  history.push('/login');
}

  return (
    <div className="App">
      <Navbar logoutCb={doLogout} user={user} handleSelectCohort={handleSelectCohort}/>
      <Routes cohort={cohort}
      setFilteredStudents={setFilteredStudents}
      filteredStudents={filteredStudents} 
      loginCb={(u, p) => doLogin(u, p)}
      loginError={loginErrorMsg} 
      postAttendanceList={postAttendanceList}/>      
    </div>
  );
}




