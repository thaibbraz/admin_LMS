import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Students from '../views/Students';
import StudentView from '../views/StudentView';
import Activities from '../views/Activities';
import Attendance from '../views/Attendance';
import Login from '../views/Login';
import AuthenticatedRoute from './AuthenticatedRoute';
import NonAuthenticatedRoute from './NonAuthenticatedRoute';

function Routes (props){
    return (
      <Switch>
    <AuthenticatedRoute path="/" exact>
      <Students setFilteredStudents={props.setFilteredStudents} 
        filteredStudents={props.filteredStudents}/>
    </AuthenticatedRoute>
    <AuthenticatedRoute path="/activities">
      <Activities filteredStudents={props.filteredStudents} />
    </AuthenticatedRoute>
    <AuthenticatedRoute path="/attendance">
      <Attendance postAttendanceList={props.postAttendanceList} filteredStudents={props.filteredStudents} />
    </AuthenticatedRoute>
    <NonAuthenticatedRoute path="/login" >
      <Login loginCb={(u, p) => props.loginCb(u, p)} 
            loginError={props.loginError}  />
    </NonAuthenticatedRoute>
    <Route path="/students/:user_id">
      <StudentView />
    </Route>
    <AuthenticatedRoute path="/current/user">
    </AuthenticatedRoute>

    </Switch>
    )
}

export default Routes;