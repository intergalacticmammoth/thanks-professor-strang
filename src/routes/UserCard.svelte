<script>
	export let name;
	export let bio;
	export let message;
	export let date;
</script>

<article>
	<h3 class="user-name">{name}</h3>
	<p class="user-bio">{bio}</p>
	<p class="user-message">{message}</p>
	<small>{date}</small>
</article>

<style>
	article {
		margin: 0.5rem;
		flex-grow: 1;
		flex-shrink: 1;
	}
	/* TODO: add styles... */
	.user-name {
	}
	.user-bio {
	}
	.user-message {
	}
</style>
