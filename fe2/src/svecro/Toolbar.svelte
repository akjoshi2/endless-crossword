<script>
  import { createEventDispatcher } from "svelte";
  import CrosswordSettings from "../CrosswordSettings.svelte";
  const dispatch = createEventDispatcher();
  export let actions = ["hint","clear", "reveal", "check"];
  export let status;
</script>

<div class="toolbar">
  <div class="settings">
    <CrosswordSettings />
  </div>
  {#each actions as action}
    {#if action === 'clear'}
      <button on:click="{() => dispatch('event', 'clear')}">Clear</button>
    {:else if action === 'reveal'}
      <button on:click="{() => dispatch('event', 'reveal')}">Reveal</button>
    {:else if action === 'check'}
      <button class={status ? "chk" : "" } on:click="{() => dispatch('event', 'check')}">Check</button>
    {:else if action === 'hint'}
      <button class={"long"} on:click="{() => dispatch('event', 'hint')}">
        Change Clue
      </button>
    {/if}
  {/each}
</div>

<style>
  .long {
    width: 10%;
  }

  .chk {
    background-color:#a9a9a9
  }

  .settings {
    margin-right: 450px;
  }
  .toolbar {
    /* margin-bottom: 1em; */
    display: flex;
    /* justify-content: flex-end; */
    font-family: var(--font);
    font-size: 0.85em;
    background-color: transparent;
  }

  button {
    cursor: pointer;
    margin-left: 1em;
    font-size: 1em;
    font-family: var(--font);
    background-color: var(--accent-color);
    border-radius: 4px;
    color: var(--main-color);
    padding: 0.75em;
    border: none;
    font-weight: 400;
    height: 50%;
    transition: background-color 150ms;
  }

  button:hover {
    background-color: var(--secondary-highlight-color);
  }
</style>
