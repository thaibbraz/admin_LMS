import React, { useState } from "react";
import '../App.css';

const EmptyInput = {
  firstname: "",
  lastname: "",
  id: "",
}
function UsersForm () {
    const [user, addUser] = useState([]);
    const [input, setInput] = useState(EmptyInput)

    const inputChange = (event) => {
      const { name, value } = event.target;
      setInput(input => ({ ...input, [name]: value }));
    }

    const inputSubmit = async (event) => {
      console.log("bateu?")
      event.preventDefault();
      await createUser(input);
      setInput(EmptyInput);
    }

    async function createUser(newUser) {
      let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      }
      try {
        let response = await fetch('/user', options);
        if (response.ok) {
          let data = await response.json();
          addUser([...user, data]);
          
        } else {
          console.log(`Server error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`)
      }
    }


    return (
    <div>
      <div>
      <form className="form" onSubmit={inputSubmit}>
        <div className="form-group">
          <label className="label" for="firstname">First Name</label>
          <input value={input.firstname} onChange={inputChange} name="firstname" type="text" required></input>
        </div>
          
        <div className="form-group">
          <label className="label" for="lastname">Last name</label>
          <input value={input.lastname} onChange={inputChange} name="lastname" type="text" required></input>
        </div>
        <div className="row">
        <div className="col-3">
          <button type="submit" className="btn-lg float-right btn btn-dark">Submit</button>
          </div>
          </div>
        </form>
        </div>
    </div>

    ) 
}
export default UsersForm;