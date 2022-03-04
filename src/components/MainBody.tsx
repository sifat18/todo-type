import React, { ChangeEvent, useEffect, useState } from 'react'
import { addToDb, getStoredCart, removeFromDb } from './db';
import Task from './Task';

interface Tasks {
    name: string;
    expired: number
}

export default function MainBody() {
    const [taskName, setName] = useState<string>('')
    const [days, setTime] = useState<number>(0)
    const [task, setTask] = useState<Tasks[]>([])
    const [taskDisplay, setDisplay] = useState<Tasks[]>([])
    // const [task, setTask] = useState<Tasks[]>([])

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else {
            setTime(Number(e.target.value));
        }
    };

    useEffect(() => {
        setDisplay(getStoredCart());

    }, [task])


    const addTask = (): void => {
        const newTask = { name: taskName, expired: days };
        setTask([...task, newTask]);
        setName('');
        setTime(0);
        console.log(task);
        console.log("after");
        addToDb(newTask)
    };

    const removes = (index: string): void => {
        const s = task.filter(i => i.name !== index)
        setTask(s)
        removeFromDb(index)
    }
    return (
        <div className='container text-center'>
            <div className='input-group mb-3 '>
                <input required className='form-control w-25 ' type="text" onChange={handleOnChange} placeholder='name' name="name" id="name" />
                <input required className='form-control w-25 mx-3' type="number" onChange={handleOnChange} placeholder='days' name="expired" id="expired" />
                <button className='btn btn-success px-4' onClick={addTask}>Add </button>
            </div>
            <Task items={taskDisplay} onclick={removes}></Task>

        </div>
    )
}
