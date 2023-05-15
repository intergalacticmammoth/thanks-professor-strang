<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	export let name;
	export let bio;
	export let message;

	// add sharable twitter link with the current message and a link to this site
	const twitter_link = `https://twitter.com/intent/tweet?text=${message}&url=${page.url}`;
	const linkedin_link = `https://www.linkedin.com/sharing/share-offsite/?url=${page.url}`;
</script>

<article>
	<h3 class="user-name">{name}</h3>
	<p class="user-bio">{bio}</p>
	<p class="user-message">{message}</p>
	<!-- Why do these not show up....? -->
	<a href={twitter_link} target="_blank"><i class="fa-brands fa-twitter" /></a>
	<a href={linkedin_link} target="_blank"><i class="fa-brands fa-linkedin" /></a>
</article>

<style>
	/* TODO: add styles... */
	.user-name {
	}
	.user-bio {
	}
	.user-message {
	}
</style>
