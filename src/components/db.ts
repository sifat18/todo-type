import React from 'react';

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
const removeFromDb = (id: Tasks): void => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const activity = JSON.parse(exists);
        activity[id.name] === id.expired && delete activity[id.name];
        updateDb(activity);
    }
}
const getStoredCart = (): any => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}
export { addToDb, removeFromDb, getStoredCart }