import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom"

function Index(props) {
    const [subtasks, setsubTasks] = useState([]);
    useEffect(() => {
        Axios.get("/api/subtasks", {taskID: props.match.params.id})
        .then(result => setsubTasks(result.data))
        .catch(err => console.error(err))
    }, []);

    return (
        <div className="container">
            <header>
                <h1>All To Do List</h1>
            </header>

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {subtasks.map(subtask => (
                        <tr key={subtask._id}>
                            <td>
                                <Link to={`/subtasks/${subtask._id}`}>{subtask.title}</Link>
                            </td>
                            <td>{subtask.status}</td>
                            <td>{subtask.author && subtask.author.firstName} {subtask.author && subtask.author.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default Index;