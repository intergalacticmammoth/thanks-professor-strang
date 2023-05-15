<script>
	import ToggleFormButton from './ToggleFormButton.svelte';
	import DeleteForm from './DeleteForm.svelte';
	import ThanksForm from './ThanksForm.svelte';
	import UserCard from './UserCard.svelte';

	export let data;
	export let form;
	export let numPeople;
	$: numPeople = data.messages.length;
</script>

<h1 id="main-text">
	Thank you Professor Strang, you have made <br />{numPeople}<br />
	{numPeople === 1 ? 'person' : 'persons'} love linear algebra.
</h1>

<div class="grid">
	<ToggleFormButton button_text="Say thanks" form_id={'thanks-form'} />
	<ToggleFormButton button_text="Delete message" form_id={'delete-form'} />
</div>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}
{#if form?.success}
	{#if form?.uid}
		<p class="success">Your message is now part of this website!</p>
	{/if}
	{#if form?.message}
		<p class="success">{form.message}</p>
	{/if}
{/if}
<ThanksForm />
<DeleteForm />

<div id="message-container">
	{#each data.messages as { name, email, bio, message }}
		<UserCard {name} {email} bio={bio != null ? bio : ''} message={message ? message : ''} />
	{/each}
</div>

<style>
	.error {
		color: red;
	}
	.success {
		color: green;
	}
	#main-text {
		font-size: 2.75rem;
		font-weight: 700;
		margin: 1rem auto;
	}
	#message-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}
</style>
