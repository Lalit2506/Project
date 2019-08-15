import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom"

function Index() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        Axios.get("/api/tasks")
        .then(result => setTasks(result.data))
        .catch(err => console.error(err))
    }, []);console.log(tasks._id)
    
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
                    {tasks.map(task => (
                        <tr key={task._id}>
                            <td>
                                <Link to={`/tasks/${task._id}/subtasks`}>{task.title}</Link>
                            </td>
                            <td>{task.status}</td>
                            <td>{task.author && task.author.firstName} {task.author && task.author.lastName}</td>
                            <td>
                                <Link to = {`/tasks/${task._id}/edit`}>edit</Link>
                                |
                                <Link to = {`/tasks/${task._id}/destroy`}>delete</Link>
                                |
                                <Link to = {`/tasks/${task._id}/subtasks/new`}>Add</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default Index;