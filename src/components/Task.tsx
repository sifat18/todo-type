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
            {items.map((item, index) => (
                <div key={index}>{item.name}{index}
                    <button onClick={() => onclick(item.name)}>remove</button>
                </div>

            ))
            }
        </div>
    )
}
