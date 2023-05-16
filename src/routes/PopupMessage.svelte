<script>
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
		<slot />
		<a href="/" on:click={() => dialog.close()}><small>close</small></a>
	</article>
</dialog>
