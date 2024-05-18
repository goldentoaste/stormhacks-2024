import { writable } from "svelte/store";


export interface TodoItem {
    id? : string,
    done: boolean;
    message: string;
}

export const counter = writable(0)