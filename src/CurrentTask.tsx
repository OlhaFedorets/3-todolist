import React from 'react';

type CurrentTaskType = {

}

export const CurrentTask = () => {
    return (
        <>
            <input type="checkbox" checked={task.isDone}/>
            <span>{task.title}</span>
            {/*<Button title={'x'} onClick={() => removeTask(task.id)}/>*/}
            <button onClick={removeTaskHandler}>x</button>
        </>
    );
};

