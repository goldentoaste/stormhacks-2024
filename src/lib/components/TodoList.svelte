<script lang="ts">
    import type { TodoItem } from "$lib/globals";
    import {counter} from "$lib/globals"
    // include the uuid library here to be less confusing, maybe.
    import { v4 as uuid4 } from "uuid";
    import TodoListItem from "./TodoListItem.svelte";

    // TODO delcare a list of todos and export it.
    export let todoItems: TodoItem[] = [];

    // TODO declare a variables for the input field on bind onto.
    export let inputString = "";

    // TODO write a function to toggle item status by index
    function toggleDone(index: number) {
        const val = todoItems[index];
        val.done = !val.done;

        todoItems = todoItems;
    }

    // TODO write a func to delete item by index

    function deleteItem(index: number) {
        todoItems.splice(index, 1);
        todoItems = todoItems;
    }

    // TODO func to add new todo item. (use the uuid4 func to gen id)
    function addItem(){
        if(inputString === ""){
            return;
        }

        todoItems = [...todoItems, {
            done: false,
            message: inputString, 
            id: uuid4()
        }]
        inputString = "";
    }
</script>

<!-- TODO add item to list on submit -->
<form on:submit={()=>{
    addItem();
}}>
    <!-- bind value to a variable to be used during add -->
    <input type="text" bind:value={inputString} />
</form>

<h1>
    Counter is : {$counter}
</h1>

<div class="listContainer">
    <!-- TODO write a #each to render, give it index and key to be efficient. -->

    {#if todoItems.length === 0 }
        <h2>
            List is empty!
        </h2>
    {/if}

    {#each todoItems as item, index (item.id)}
        <TodoListItem
            id={item.id}
            done={item.done}
            on:toggleDone={() => {
                toggleDone(index);
            }}
            on:deleteTodo={() => {
                deleteItem(index);
            }}
        >
            {item.message}
        </TodoListItem>
    {/each}

    <!-- TODO create the TodoListItems inside here -->
    <!-- give it the todo's information -->

    <!--  TODO handle toggleDone, handle delete events.  -->
</div>

<style>
    .listContainer {
        padding: 1rem;
        border-radius: 10px;
        border: 2px solid var(--focus);

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input {
        margin: 1rem;
        /* reduce by 3 rem due to margin and padding on both sides */
        width: calc(100% - 3rem);

        border: 2px solid var(--focus);
        border-radius: 5px;

        font-size: x-large;
        padding: 0.5rem;
    }
</style>
