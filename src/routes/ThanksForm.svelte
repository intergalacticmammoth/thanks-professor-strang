<script>
	import { enhance } from '$app/forms';

	export let name;
	export let email;
	export let bio = '';
	export let message = '';
	export let password;

	let bioLength = 0;
	$: bioLength = bio.length;

	let messageLength = 0;
	$: messageLength = message.length;

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
		<!--IMPORTANT:
    The action attribure is a URL.
    See https://learn.svelte.dev/tutorial/named-form-actions -->
		<form method="POST" action="?/create" id="thanks-form" use:enhance>
			<label for="name">Name</label>
			<input
				bind:value={name}
				type="text"
				name="name"
				id="name"
				placeholder="e.g. John Doe"
				required
			/>
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
			<label for="bio"
				>Who are you? (optional) <span class="number-count">{100 - bioLength}</span></label
			>
			<input
				bind:value={bio}
				type="text"
				name="bio"
				id="bio"
				placeholder="Undergraduate mechanical engineering student @ UPenn"
				maxlength="100"
			/>
			<label for="message"
				>Want to say more? (optional) <span class="number-count">{300 - messageLength}</span></label
			>
			<input
				bind:value={message}
				type="text"
				name="message"
				id="message"
				placeholder="Elaborate personal message to Prof. Strang ..."
				maxlength="300"
			/>
			<input on:click={() => dialog.close()} type="submit" value="Submit" />
			<small
				>Your email and password are solely for you to be able to delete your message. They are not
				used for any other purpose.</small
			>
		</form>
		<a href="/" on:click={() => dialog.close()}><small>close</small></a>
	</article>
</dialog>

<style>
	form {
		text-align: left;
		flex-direction: column;
		/* margin: 0 auto; */
		/* max-width: 600px; */
	}
	label {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	small {
        margin-top: 0.5rem;
    }
	form span {
		margin-left: auto;
	}

	.number-count {
		font-size: 0.75rem;
		color: #888;
	}
</style>
