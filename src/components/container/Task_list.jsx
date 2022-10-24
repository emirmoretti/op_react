import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/Task';


const TaskListComponent = () => {

    const defaultTask = new Task('react', 'realizar tarea', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('cambiar estado de tarea')
    }

    return (
        <div>
            <div>
                <p>your taks:</p>
                <TaskComponent task={defaultTask} />
            </div>
        </div>
    );
};


export default TaskListComponent;
