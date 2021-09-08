import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar (props) {
  const [cohorts, setCohorts] = useState([])
  const [selectedCohort, setselectedCohort] = useState()

  useEffect(() => { 
    getCohort();
  }, []);

  const getCohort = () => {
    fetch('/cohorts')
      .then(response => response.json())
      .then(cohort => {
        setCohorts(cohort);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSelectChange = (u) => {
    setselectedCohort(u)
    props.handleSelectCohort(u); 
  }
    return (

      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink to="/" exact className="nav-link" >Students</NavLink>
          </li>
          <li className="nav-item">
        <NavLink to="/activities"  className="nav-link" >Activities</NavLink>
        </li>        

            <li className="nav-item">
              <NavLink className="nav-link" to="/attendance">Attendance</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/links/new"></NavLink>
            </li>
            <NavLink to="/students"></NavLink>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {selectedCohort ? <>{selectedCohort.name}</> : 'Select cohort'}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">      
              {cohorts.map(u => 
                <option onClick={(event) => handleSelectChange(u)}>{u.name} </option>)}         
        </div>
      </li>
     
          
            
          </ul>
        </div>
      </nav>
   
      
    )
}
export default Navbar;