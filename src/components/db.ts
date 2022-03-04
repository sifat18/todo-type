import React from 'react';
import Task from './Task';

interface Tasks {
    name: string;
    expired: number
}
const addToDb = (id: Tasks): void => {
    const exists = getDb();
    let activity: Tasks[] = [];
    if (!exists) {
        activity.push(id);
    }
    else {
        activity = JSON.parse(exists);
        activity.push(id);
    }
    updateDb(activity);
}
const getDb = () => localStorage.getItem('activity');
const updateDb = (cart: Tasks[]): void => {
    localStorage.setItem('activity', JSON.stringify(cart));
}
const removeFromDb = (id: string): void => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        let activity = JSON.parse(exists);
        activity = activity.filter((i: Tasks) => i.name !== id)

        updateDb(activity);
    }
}
const getStoredCart = (): any => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}
export { addToDb, removeFromDb, getStoredCart }