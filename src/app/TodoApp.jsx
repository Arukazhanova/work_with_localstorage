import React, {useEffect, useState} from 'react';
import '../App.css';
const TodoApp = () => {
    const [taskInput, setTaskInput] = useState('');
    const [todos, setTodos] = useState([]);

    const deleteTask = (index) => {
        const newTasks=[...todos];
        newTasks.splice(index, 1);
        setTodos(newTasks);
    }



    useEffect(() => {
        const saved=localStorage.getItem('todos');
        if (saved){
            setTodos(JSON.parse(saved));
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);
    return (
        <div>
            <form action="">
                <input onChange={(e)=> setTaskInput(e.target.value) } value={taskInput}  type="text"/>
            </form>
            <button className='button' onClick={()=>{ if(taskInput.trim()!==''){ setTodos([...todos, taskInput]);
                setTaskInput('');}}} >Добавить задачу</button>
            <div>
                <ul className='ul' >{todos.map((task, index) => (
                    <li className='li' key={index}>{task} <button className='button' onClick={()=>deleteTask(index)}>Delete</button></li>
                    ))}
                    </ul>

            </div>

        </div>
    )
};

export default TodoApp;