import React, {useState, useEffect} from "react";
import Axios from "axios";

function Show(props) {
    const [subtask, setsubTask] =useState();

    useEffect(() => {
        Axios.get(`/api/subtasks/${props.match.params.id}`, {taskID: props.match.params.id})
          .then(result => {
            console.log(result);
            setsubTask(result.data);
          })
          .catch(err => console.error(err));
      }, [props]);
    
      return (
        <div className="container">
          <header>
            <h1>{subtask && subtask.title}</h1>
          </header>
    
          <div>
            {subtask && subtask.detail}
          </div>
        </div>
      );
}

export default Show;