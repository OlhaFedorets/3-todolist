// useRef

// import {FilterValuesType, TaskType} from "./App";
// import {Button} from "./Button";
// import {useRef} from "react";
//
// type PropsType = {
//     title: string
//     tasks: TaskType[]
//     removeTask: (taskId: string) => void
//     changeFilter: (filter: FilterValuesType) => void
//     addTask: (newTitle: string) => void
// }
//
// export const Todolist = ({title, tasks, removeTask, changeFilter, addTask}: PropsType) => {
//
//     const inputRef = useRef<HTMLInputElement>(null)
//
//
//     return (
//         <div>
//             <h3>{title}</h3>
//             <div>
//                 <input ref={inputRef}/>
//                 <Button title={'+'} onClick={() => {
//                     if (inputRef.current) {
//                         addTask(inputRef.current.value)
//                         inputRef.current.value = ''
//                     }
//                 }
//                 }/>
//             </div>
//             {
//                 tasks.length === 0
//                     ? <p>Тасок нет</p>
//                     : <ul>
//                         {tasks.map(task => {
//                              return (
//                                 <li key={task.id}>
//                                     <input type="checkbox" checked={task.isDone}/>
//                                     <span>{task.title}</span>
//                                     <Button title={'x'} onClick={() => removeTask(task.id)}/>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//             }
//             <div>
//                 <Button title={'All'} onClick={() => changeFilter('all')}/>
//                 <Button title={'Active'} onClick={() => changeFilter('active')}/>
//                 <Button title={'Completed'} onClick={() => changeFilter('completed')}/>
//             </div>
//         </div>
//     )
// }


//------------------------------------------------------------------------------------------

// useState

// import {FilterValuesType, TaskType} from "./App";
// import {Button} from "./Button";
// import {useState} from "react";
//
//
// type PropsType = {
//     title: string
//     tasks: TaskType[]
//     removeTask: (taskId: string) => void
//     changeFilter: (filter: FilterValuesType) => void
//     addTask: (newTitle: string) => void
// }
//
// export const Todolist = ({title, tasks, removeTask, changeFilter, addTask}: PropsType) => {
//
//     const [newTitle, setNewTitle] = useState('')
//     console.log(newTitle)
//
//     return (
//         <div>
//             <h3>{title}</h3>
//             <div>
//                 <input
//                     onKeyDown={(e)=> {
//                        if (e.key === 'Enter') {
//                            addTask(newTitle)
//                            setNewTitle('')
//                        }
//                     }}
//                     value={newTitle}
//                     onChange={(event)=>setNewTitle(event.currentTarget.value)}
//                 />
//                 <Button title={'+'} onClick={() => {
//                     addTask(newTitle);
//                     setNewTitle('')
//                 }}/>
//             </div>
//             {
//                 tasks.length === 0
//                     ? <p>Тасок нет</p>
//                     : <ul>
//                         {tasks.map(task => {
//                             return (
//                                 <li key={task.id}>
//                                     <input type="checkbox" checked={task.isDone}/>
//                                     <span>{task.title}</span>
//                                     <Button title={'x'} onClick={() => removeTask(task.id)}/>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//             }
//             <div>
//                 <Button title={'All'} onClick={() => changeFilter('all')}/>
//                 <Button title={'Active'} onClick={() => changeFilter('active')}/>
//                 <Button title={'Completed'} onClick={() => changeFilter('completed')}/>
//             </div>
//         </div>
//     )
// }


//------------------------------------------------------------
//с выносом функций

import {FilterValuesType, TaskType} from "./App";
import {useState, KeyboardEvent, ChangeEvent} from "react";
import {Button} from "./Button";
import {CurrentTask} from "./CurrentTask";


type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask}: PropsType) => {

    const [newTitle, setNewTitle] = useState('')
    console.log(newTitle)

    // const changeFilterAll = () => {
    //     changeFilter('all')
    // }
    //
    // const changeFilterActive = () => {
    //     changeFilter('active')
    // }
    //
    // const changeFilterCompleted = () => {
    //     changeFilter('completed')
    // }

    const changeFilterHandler = (valueFilter: FilterValuesType) => {
        changeFilter(valueFilter)
    }

    // const removeTaskHandler = (taskId: string) => removeTask(taskId)

    const addTaskHandler = () => {
        addTask(newTitle);
        setNewTitle('')
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement> ) => {
        if (e.key === 'Enter') {
            // addTask(newTitle)
            // setNewTitle('')
            addTaskHandler()
        }
    }

    const mappedTasks = tasks.map(task => {
        const removeTaskHandler = () => removeTask(task.id)
        return (
            <li key={task.id}>
                <CurrentTask removeTaskHandler = {removeTaskHandler}
                             isDone={task.isDone}
                             title={task.title}
                />
                {/*<input type="checkbox" checked={task.isDone}/>*/}
                {/*<span>{task.title}</span>*/}
                {/*/!*<Button title={'x'} onClick={() => removeTask(task.id)}/>*!/*/}
                {/*<button onClick={removeTaskHandler}>x</button>*/}
            </li>
        )
    })

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    onKeyDown={onKeyDownHandler}
                    value={newTitle}
                    onChange={onChangeHandler}
                />
                {/*<Button title={'+'} onClick={() => {*/}
                {/*    addTask(newTitle);*/}
                {/*    setNewTitle('')*/}
                {/*}}/>*/}
                <button onClick={addTaskHandler}>+</button>
            </div>
            {
                tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <ul>{mappedTasks}</ul>
            }
            <div>
                {/*<Button title={'All'} onClick={() => changeFilter('all')}/>*/}
                {/*<Button title={'Active'} onClick={() => changeFilter('active')}/>*/}
                {/*<Button title={'Completed'} onClick={() => changeFilter('completed')}/>*/}

                {/*<button onClick={changeFilterAll}>All</button>*/}
                {/*<button onClick={changeFilterActive}>Active</button>*/}
                {/*<button onClick={changeFilterCompleted}>Completed</button>*/}

                <button onClick={() => changeFilterHandler('all')}>All</button>
                <button onClick={() => changeFilterHandler('active')}>Active</button>
                <Button onClick={() => changeFilterHandler('completed')} title={'Completed'}/>

                {/*<button onClick={() => changeFilterHandler('completed')}>Completed</button>*/}
            </div>
        </div>
    )
}