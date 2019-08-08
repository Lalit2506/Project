import React, {useState, useEffect} from "react";
import Axios from "axios";

function Show(props) {
    const [task, setTask] =useState();

    useEffect(() => {
        Axios.get(`/api/tasks/${props.match.params.id}`)
          .then(result => {
            console.log(result);
            setTask(result.data);
          })
          .catch(err => console.error(err));
      }, [props]);
    
      return (
        <div className="container">
          <header>
            <h1>{task && task.title}</h1>
          </header>
    
          <div>
            {task && task.detail}
          </div>
        </div>
      );
}

export default Show;