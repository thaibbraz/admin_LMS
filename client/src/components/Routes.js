import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LinkApp from '../views/LinkApp';
import Activities from '../views/Activities';
import Attendance from '../views/Attendance';
import Login from '../views/Login';
import AuthenticatedRoute from './AuthenticatedRoute';

function Routes (props){
    return (
      <Switch>
    <Route path="/" exact>
      <LinkApp setFilteredStudents={props.setFilteredStudents} 
        filteredStudents={props.filteredStudents}/>
    </Route>
    <AuthenticatedRoute path="/activities">
      <Activities filteredStudents={props.filteredStudents} />
    </AuthenticatedRoute>
    <AuthenticatedRoute path="/attendance">
      <Attendance postAttendance={props.postAttendance} filteredStudents={props.filteredStudents} />
    </AuthenticatedRoute>
    <Route path="/login">
      <Login  loginCb={(u, p) => props.loginCb(u, p)} 
            loginError={props.loginError}  />
    </Route>
    {/* <Route path="/users">
      <UsersView userId={props.loggedIn.id}
      getFilteredLinks={props.getFilteredLinks}
      filteredLinks={props.filteredLinks}
      setFilteredLinks={props.setFilteredLinks}/>
    </Route> */}
    <AuthenticatedRoute path="/current/user">
    </AuthenticatedRoute>

    </Switch>
    )
}

export default Routes;