<script>
	import { enhance } from '$app/forms';

	export let name;
	export let oneLiner;
	export let message;
</script>

<div>
	<h3 class="user-name">{name}</h3>
	<p class="user-bio">{oneLiner}</p>
	<p class="user-message">{message}</p>
</div>

<style>
	div {
		padding: 1rem;
		background-color: rgba(10, 10, 10, 0.25);
		border-radius: 0.5rem;
	}
    /* TODO: add styles... */
	.user-name {
	}
	.user-bio {
	}
	.user-message {
	}
</style>
