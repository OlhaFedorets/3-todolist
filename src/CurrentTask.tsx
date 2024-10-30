import React from 'react';
import {TaskType} from "./App";
import {v1} from "uuid";

type CurrentTaskType = {
    removeTaskHandler:()=>void
    isDone: boolean
    title: string
}

export const CurrentTask = ({removeTaskHandler, isDone, title}: CurrentTaskType) => {
    return (
        <>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
            {/*<Button title={'x'} onClick={() => removeTask(task.id)}/>*/}
            <button onClick={removeTaskHandler}>x</button>
        </>
    );
};

