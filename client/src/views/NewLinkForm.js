import React,  { useEffect, useState } from "react";
import '../App.css';

const EmptyForm = {
    title: "", 
    url: "",
    description: "",
    cat_id: "",
    user_id: ""
};

function NewLinkForm(props) {
    const [formData, setFormData] = useState(EmptyForm);
    const [links, setLinks] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories();
    }, []);
    
    function handleChange(event) {
        let { name, value } = event.target;
        setFormData(formData => ({...formData, [name]: value}));

    }

    function handleSubmit(event) {
        event.preventDefault();
        addLink(formData)
        setFormData(EmptyForm);
    }

    async function addLink(newLink) {
      newLink.user_id = props.userId;
      console.log("quem é vc?", newLink.user_id)
      let options = {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(newLink)
      }
    
      try { 
        let response = await fetch("/links", options);
        if (response.ok) {
          let data = await response.json();
          setLinks(data);
        } else {
          console.log(`Server error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`);
      }
    }

    const getCategories = () => {
      fetch(`/categories`)
      .then(response => response.json())
      .then(categories => {
        setCategories(categories);
      })
      .catch(error => {
        console.log(error);
      });
    };


return (
    <div className="NewLinkForm">
      <div className="row">
        <div className="col-md-6">
        <form onSubmit={handleSubmit} className="Body">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" name="title" 
            value={formData.title}
            onChange={handleChange} className="form-control" id="exampleInputEmail1" /> 
          </div>
          <div className="mb-3">
            <label className="form-label">URL</label>
            <input      
            type="url" 
            name="url" 
            value={formData.url}
            onChange={handleChange} className="form-control" id="exampleInputEmail1" />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input  
            type="text" 
            name="description" 
            value={formData.description}
            onChange={handleChange} className="form-control" id="exampleInputEmail1" />
          </div>
          <div className="space-div form-group">
            <select onChange={handleChange} name="cat_id" class="form-control" id="exampleFormControlSelect1">
              <option>Select category</option>
              {categories.map(category =>
              <option value={category.id} key={category.id}>{category.name}</option>)}
            </select>  
          </div>
          <div className="space-div">
            <button type="submit" className="btn btn-dark">Submit</button>
          </div>
        </form>
        </div>
      </div>

    </div>
);
}

export default NewLinkForm; 