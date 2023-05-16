<script>
	import { enhance } from '$app/forms';

	export let email;
	export let password;

	export let showModal; // boolean
	export let dialog; // HTML dialog element

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<article>
		<form
			id="delete-form"
			method="POST"
			action="?/delete"
			use:enhance
		>
			<label for="email">Email</label>
			<input bind:value={email} type="email" name="email" id="delete-email" required />
			<label for="password">Password</label>
			<input bind:value={password} type="password" name="password" id="delete-password" required />
			<input on:click={() => dialog.close()} type="submit" value="Confirm deletion" />
            <small
				>In case you made a mistake, or no longer want your message to appear on this website.</small
			>
		</form>
		<a href="/" on:click={() => dialog.close()}><small>close</small></a>
	</article>
</dialog>

<!-- This is duplicated accross forms now..... fix. -->
<style>
	form {
		text-align: left;
		flex-direction: column;
	}
    small {
        margin-top: 0.5rem;
    }
</style>
