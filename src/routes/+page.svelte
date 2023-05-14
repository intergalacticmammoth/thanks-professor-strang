<script>
	import SayThanks from "./say_thanks.svelte";
	import ThanksForm from "./thanks_form.svelte";
	import UserCard from "./user_card.svelte";

    export let data;
    export let form;
    export let numPeople = data.messages.length;
    console.log(data);
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
</svelte:head>

<div class='container'>
    <h1 id='main-text'>Thanks Professor Strang, you have made <br>{numPeople}<br> {numPeople === 1 ? 'person' : 'persons'} love linear algebra.</h1>

    <SayThanks />

    {#if form?.error}
        <p class="error">{form.error}</p>
    {/if}
    {#if form?.success}
        {#if form?.uid}
        <p class="success">Your message is now part of this website!<br> IMPORTANT: Your UID is {form.uid}.<br>You will need it to be able to delete your message.</p>
        {/if}
        {#if form?.message}
        <p class="success">{form.message}</p>
        {/if}
    {/if}
    <ThanksForm />

    <div id="message-container">
        {#each data.messages as {name, email, oneLiner, message}}
            <UserCard name={name} email={email} oneLiner={oneLiner!=null ? oneLiner : ""} message={message ? message : ""} />
        {/each}
    </div>
</div>

<style>
    /* This overrides picoss container...! */
    .container {
        text-align: center;
    }
    .error {
        color: red;
    }
    .success {
        color: green;
    }
    #main-text {
        font-size: 3rem;
        font-weight: 700;
        margin: 1rem auto;
    }
    #message-container {
        margin: 1rem auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
    }
</style>
