import React, { useState} from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

function New(props) {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    function handleSubmit (event) {
        event.preventDefault();

        Axios.post(`/api/subtasks`, {
            subtask: {
                title: inputs.title,
                detail: inputs.detail,
                status: inputs.status,
                task: props.match.params.id
            }
        })
        .then(resp => setRedirect(true))
        .catch(err => console.log(err));
    }

    function handleInputChange (event) {
        event.persist();
        // const name = event.target.name;
        // const value = event.target.value;
        const {name, value} = event.target;

        setInputs(inputs => {
            inputs[name] = value;
            return inputs;
        });
    }

    if(redirect) return <Redirect to="/tasks" />
    return (
        <div className = "container">
            <header>
                <h1>New To Do List</h1>
            </header>

            <div>
                <form onSubmit= {handleSubmit}>
                  <div className="form-group">
                      <label>Title</label>
                      <input className="form-control" name="title" required = "required" onChange = {handleInputChange} />
                  </div>

                  <div className="form-group">
                      <label>Details</label>
                      <input className="form-control" name="detail" required = "required" onChange = {handleInputChange} />
                  </div>

                  <div className="form-group">
                      <label>Status</label>
                      <select className="form-control" name="status" required = "required" onChange = {handleInputChange} >
                      <option value = "Done">Done</option>
                      <option value = "On-Going">On-Going</option>
                      </select>
                  </div>

                  <div className="form-group">
                      <button className = "btn btn-dark" type= "submit">Submit</button>
                  </div>
                </form>
            </div>
        </div>
    );
}

export default New; 