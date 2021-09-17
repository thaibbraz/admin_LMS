import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(event) {
        let { name, value } = event.target;
        switch (name) {
            case 'usernameInput':
                setUsername(value);
                break;
            case 'passwordInput':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.loginCb(username, password);
    }

  return (
         <div className="LoginView row">
             <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong">
          <div className="card-body p-6 text-center">

            <h3 className="mb-5">Sign in</h3>
 
            {
                    props.loginError && (
                        <div className="alert alert-danger">{props.loginError}</div>
                    )
                }
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                <input type="text" name="usernameInput" id="typeEmailX" required className="form-control form-control-lg" value={username} onChange={handleChange}/>
                {/* <input className="email" id="typeEmailX" class="form-control form-control-lg" /> */}
                <label className="form-label" for="typeEmailX">Username</label>
                </div>

                <div className="form-outline mb-4">
                <input              id="typePasswordX"
                                    type="password"
                                    name="passwordInput"
                                    required
                                    className="form-control form-control-lg"
                                    value={password}
                                    onChange={handleChange}
                                />
                {/* <input type="password" id="typePasswordX" className="form-control form-control-lg" /> */}
                <label className="form-label" for="typePasswordX">Password</label>
                </div>

            
                <div className="form-check d-flex justify-content-start mb-4">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                />
                <label className="form-check-label" for="form1Example3"> Remember password </label>
                </div>

                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                <hr className="my-4"/>
            </form>   
          </div>
        </div>
      </div>
    </div>
  </div>
            {/* <div className="col-4 offset-4">
                <h2>Login</h2>
                
                {
                    props.loginError && (
                        <div className="alert alert-danger">{props.loginError}</div>
                    )
                }

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username
                            <input
                                type="text"
                                name="usernameInput"
                                required
                                className="form-control"
                                value={username}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Password
                            <input
                                type="password"
                                name="passwordInput"
                                required
                                className="form-control"
                                value={password}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div> */}
        </div>
  );
}




