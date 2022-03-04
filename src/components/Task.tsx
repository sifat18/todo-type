import React, { ChangeEvent, useEffect, useState } from 'react'
interface Tasks {
    name: string;
    expired: number
}
export default function Task({ items, onclick }: {
    items: Tasks[],
    onclick: (index: string) => void
}) {
    return (

        <div>
            {items.length >= 1 &&
                <table className="table mt-5">
                    <thead>

                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">TaskName</th>
                            <th scope="col">Days to Complete</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.expired}</td>
                                <td> <button className='btn btn-danger' onClick={() => onclick(item.name)}>remove</button></td>
                            </tr>

                        ))
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}
