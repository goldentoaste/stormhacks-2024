<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fly } from "svelte/transition";

    import {counter} from "$lib/globals"


    // TODO declare the variables here. id, done
    export let id = "";
    export let done = false;

    // id is required so we know which to delete later

    // TODO  make a event dispatcher here. call createEventDispatcher()
    const dispatch = createEventDispatcher();

</script>

<!-- "✔️" : "❌" -->
<!-- The todo item will be really simple, just a span to display message. and a delete button -->

<div class="todoItem" class:done transition:fly={{
    x:100
}}>
    <!-- TODO give the item different style depending on 'done' -->
    <!-- TODO add a transition here? for when item is created or deleted. -->

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={()=>{
        dispatch("toggleDone")
        $counter += 1;
    }}>
        {done ? "✔️" : "❌" } <slot/>
        <!-- TODO dispatch a "toggleDone" event here on click -->

    </span>

    <button class="deleteButton"  on:click={()=>{
        dispatch("deleteTodo")
    }}> 
        <!-- TODO dispatch a "delete" event when clicked. -->
        Delete
    </button>
</div>



<style>
    .todoItem {
        border-radius: 10px;
        border: 2px solid var(--focus);
        padding: 1rem;
        background-color: var(--bg0);

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .done {
        background-color: var(--green);
    }

    .todoItem:not(.done) {
        /* find .todoItem that isn't .done */
        background-color: var(--red);
    }

    .deleteButton {
        margin-left: 1rem;
        padding: 0.5rem;
        border: 2px solid var(--focus);
        border-radius: 5px;
        background-color: var(--fg1);
    }

    button {
        cursor: pointer;
        transition: all 0.3s ease-out;
    }

    button:hover {
        filter: brightness(1.1);
        background-color: var(--bg0);
    }

    span {
        cursor: pointer;
        user-select: none;
    }
</style>
