import React, { ChangeEvent, useEffect, useState } from 'react'
import { addToDb, getStoredCart } from './db';

interface Tasks {
    name: string;
    expired: number
}

export default function MainBody() {
    const [taskName, setName] = useState<string>('')
    const [days, setTime] = useState<number>(0)
    const [task, setTask] = useState<Tasks[]>([])
    const [taskDisplay, setDisplay] = useState([])
    // const [task, setTask] = useState<Tasks[]>([])

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else {
            setTime(Number(e.target.value));
        }
    };

    useEffect(() => {
        const savedCart = getStoredCart();
        savedCart.map((L: Tasks): void => console.log(L))
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

    return (
        <div>
            <div>
                <input required className='' type="text" onChange={handleOnChange} placeholder='name' name="name" id="name" />
                <input required className='' type="number" onChange={handleOnChange} placeholder='days' name="expired" id="expired" />
                <button className='' onClick={addTask}>add </button>
            </div>
        </div>
    )
}
