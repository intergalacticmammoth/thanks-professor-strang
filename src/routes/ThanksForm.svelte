<script>
	import { enhance } from '$app/forms';

	export let name;
	export let email;
	export let bio;
	export let message;
	export let password;
</script>

<!--IMPORTANT:
    The action attribure is a URL.
    See https://learn.svelte.dev/tutorial/named-form-actions -->
<form method="POST" action="?/create" id="thanks-form" use:enhance>
	<label for="name">Name</label>
	<input bind:value={name} type="text" name="name" id="name" placeholder="e.g. John Doe" required />
	<label for="email">Email</label>
	<input
		bind:value={email}
		type="email"
		name="email"
		id="email"
		placeholder="john.doe@johnny.corn"
		required
	/>
	<label for="password">Password</label>
	<input bind:value={password} type="password" name="password" id="password" required />
	<small
		>Your email and password are solely for you to be able to delete your message. They are not
		shown anywhere.</small
	>
	<label for="bio">Who are you? (optional)</label>
	<input
		bind:value={bio}
		type="text"
		name="bio"
		id="bio"
		placeholder="Undergraduate mechanical engineering student @ UPenn"
		maxlength="100"
	/>
	<label for="message">Want to say more? (optional)</label>
	<input
		bind:value={message}
		type="text"
		name="message"
		id="message"
		placeholder="Elaborate personal message to Prof. Strang ..."
		maxlength="300"
	/>
	<input type="submit" value="Submit" />
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
