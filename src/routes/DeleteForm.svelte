<script>
	import { enhance } from '$app/forms';

	export let email;
	export let password;
</script>

<form id="delete-form" method="POST" action="?/delete" use:enhance>
	<label for="email">Email</label>
	<input bind:value={email} type="email" name="email" id="delete-email" required />
	<label for="password">Password</label>
	<input bind:value={password} type="password" name="password" id="delete-password" required />
	<small
		>In case you made a mistake, or no longer want your message to appear on this website.</small
	>
	<input type="submit" value="Confirm deletion" />
</form>

<!-- This is duplicated accross forms now..... fix. -->
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
