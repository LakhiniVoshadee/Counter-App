import {type} from "node:os";

export const increment = () => ({
    type: 'increment'
});

export const decrement = () => ({
    type: 'decrement'
});