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
   
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
    { props.user ?   
      (  <>
              <a className="navbar-brand" style={{ color: 'white' }}>Codeop</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  {/* <li className="nav-item active">
                  <NavLink to="/" exact className="nav-link" >Students</NavLink>
                  </li> */}
                  <li className="nav-item">
                  <NavLink to="/activities"  className="nav-link">Activities</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink to="/"  className="nav-link">Students</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink to="/attendance"  className="nav-link">Attendance</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {selectedCohort ? <>{selectedCohort.name}</> : 'Select cohort'}
                  </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {cohorts.map(u => <option onClick={(event) => handleSelectChange(u)}>{u.name} </option>)}         
                    </div>
                  </li>
                  
                </ul>
                <div className="form-inline my-2 my-lg-0">
                  {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
                  <button className="btn btn-outline-light my-2 my-sm-0"  style={{ cursor: 'pointer' }} onClick={props.logoutCb} >Log out</button>
                </div>
              </div>
              </>
          ) 
      :
       (   <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="form-inline my-2 my-lg-0">
            
              <a className="navbar-brand" style={{ color: 'white' }}>Codeop</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>           
                                
                            
                  </div> 
            </div> 
       )
    }
     </nav>
    
);









{/* 
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        
       
             {
                props.user
                    ?   
                        ( <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav my-2 my-lg-0">
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
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/students">Profile ({props.user.username})</NavLink>
                                </li>
                                <li className="nav-item">
                                   
                                    <span className="nav-link" style={{ cursor: 'pointer' }} onClick={props.logoutCb}>Logout</span>
                                </li>
                            </ul>
                            
                            </div>
                        )
                    :
                        (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                            </ul>
                        )
            }
         
      </nav>
   
       */}
       
    
}
export default Navbar;