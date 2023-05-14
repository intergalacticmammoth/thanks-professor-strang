<script>
    import { enhance } from '$app/forms';

    export let name;
    export let email;
    export let oneLiner;
    export let message;
</script>

<div>
    <form
        method="POST"
        action="?/delete"
        use:enhance={({ data }) => {
            const uid = prompt('Please enter your UID to delete your message');
            data.set("uid", uid);
        }}
    >
        <input type="hidden" name="email" value={email}/>
        <input type="hidden" name="uid">
        <button aria-label="Delete this message">x</button>
        <h3>{name}</h3>
        <p>{oneLiner}</p>
        <p>{message}</p>
    </form>
</div>

<style>
    div {
        padding: 1rem;
        background-color: rgba(10, 10, 10, 0.25);
        border-radius: 0.5rem;
    }
</style>
