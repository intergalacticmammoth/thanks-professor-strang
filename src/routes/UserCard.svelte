<script>
	export let name;
	export let bio;
	export let message;
	export let date;
</script>

<article>
	<h3 class="user-name">{name}</h3>
	<p class="user-bio">{bio}</p>
	<p><em class="user-message">{message}</em></p>
	<small>{date}</small>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		margin: 0.5rem;
		flex-grow: 1;
		flex-shrink: 1;
	}
	small {
		margin-top: auto;
		font-size: 0.8rem;
		opacity: 0.5;
	}
	/* TODO: add styles... */
	.user-name {
		margin-bottom: 0.25rem;
	}
	.user-bio {
	}
	.user-message {
	}
</style>
