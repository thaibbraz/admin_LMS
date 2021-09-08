import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './components/Routes';
import Navbar from './components/Navbar';

export default function App() {
const [cohort, setCohort] = useState({});

// Este useEffect é chamado quando o loggedIn termina de alterar seu estado
useEffect(() => {
  getFilteredStudents();
}, [cohort])

const [filteredStudents, setFilteredStudents] = useState([])

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

  return (
    <div className="App">
      <Navbar handleSelectCohort={handleSelectCohort}/>
      <Routes cohort={cohort}
      setFilteredStudents={setFilteredStudents}
      filteredStudents={filteredStudents} />
      
    </div>
  );
}




