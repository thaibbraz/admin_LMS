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

const postAttendance = (studentList) => {
// let options = {
//         method: "POST",
//       }
//       try {
//         console.log(id)
//         let response = await fetch(`/students/${id}`, options);
//         if (response.ok) {
//           let data = await response.json();
          
//         } else {
//           console.log(`Server error: ${response.status} ${response.statusText}`);
//         }
//       } catch (err) {
//         console.log(`Network error: ${err.message}`);
//       }
    
}

  
const getFilteredStudents = () => {

  let userId = cohort.name
  console.log(userId)
  fetch(`/students?user_id=${userId}`)
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
      postAttendance={postAttendance}/>
      
    </div>
  );
}




