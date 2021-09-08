import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LinkApp from '../views/LinkApp';
import Activities from '../views/Activities';
import Attendance from '../views/Attendance';

function Routes (props){
    return (
      <Switch>
    <Route path="/" exact>
      <LinkApp setFilteredStudents={props.setFilteredStudents} 
        filteredStudents={props.filteredStudents}/>
    </Route>
    <Route path="/activities">
      <Activities filteredStudents={props.filteredStudents} />
    </Route>
    <Route path="/attendance">
      <Attendance  filteredStudents={props.filteredStudents} />
    </Route>
    {/* <Route path="/users">
      <UsersView userId={props.loggedIn.id}
      getFilteredLinks={props.getFilteredLinks}
      filteredLinks={props.filteredLinks}
      setFilteredLinks={props.setFilteredLinks}/>
    </Route> */}
    <Route path="/current/user">
    </Route>

    </Switch>
    )
}

export default Routes;