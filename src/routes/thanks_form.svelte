<script>
    import { enhance } from '$app/forms';

    export let name;
    export let email;
    export let oneLiner;
    export let message;

    // function SubmitForm(event) {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);

    //     fetch('/api/submit', {
    //         method: 'POST',
    //         body: formData
    //     }).then(response => {
    //         if (response.ok) {
    //             alert('Thanks for submitting!');
    //         } else {
    //             alert('Something went wrong, please try again.');
    //         }
    //     });
    // }
</script>

<!--IMPORTANT:
    The action attribure is a URL.
    See https://learn.svelte.dev/tutorial/named-form-actions -->
<form method="POST" action="?/create" id="thanks-form" use:enhance>
    <label for="name">Name</label>
    <input bind:value={name} type="text" name="name" id="name" placeholder="e.g. John Doe" required>
    <label for="email">Email</label>
    <input bind:value={email} type="email" name="email" id="email" placeholder="john.doe@johnny.corn" required>
    <label for="one-liner">One-liner of who you are (optional)</label>
    <input bind:value={oneLiner} type="text" name="one-liner" id="one-liner" placeholder="Undergraduate mechanical engineering student @ UPenn" maxlength="100">
    <label for="say-more">Want to say more? (optional)</label>
    <input bind:value={message} type="text" name="say-more" id="say-more" placeholder="Elaborated personal message to Prof. Strang ..." maxlength="300">
    <input type="submit" value="Submit">
</form>

<style>
    form {
        display: none;
        text-align: left;
        flex-direction: column;
        /* margin: 0 auto; */
        /* max-width: 600px; */
    }

    /* Form Children */
    /* form > * {
        margin: 0.25rem 0;
    } */
</style>
