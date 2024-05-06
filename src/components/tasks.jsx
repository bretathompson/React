import React, {Component} from 'react';
import { getTasks } from '../services/fakeTaskService-1';

class Tasks extends Component {
    state = {
      tasks: getTasks()
    };

    handleDelete = task => {
        const updatedTasks = this.state.tasks.filter(t => t._id !== task._id);
        this.setState({ tasks: updatedTasks });
    };

    render ()  {
        const { length: count } = this.state.tasks;

        if (count === 0) 
            return <p>There are no tasks in the database.</p>;

        return (
            <React.Fragment>
                <p>Showing {this.state.tasks.length} tasks in the database.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Task</th>
                            <th>Category</th>
                            <th>Severity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.tasks.map(task => (                    
                            <tr key={task._id}>
                                <td>{task.title}</td>
                                <td>{task.task}</td>
                                <td>{task.category}</td>
                                <td>{task.severity.name}</td>
                                <td>
                                    <button onClick={() => this.handleDelete(task) } className='btn btn-danger btn-sm'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Tasks;

  
    
