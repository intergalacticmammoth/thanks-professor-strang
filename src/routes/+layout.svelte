<script>
    import { dev } from '$app/environment';
    import profStrangImg from '$lib/assets/prof_strang.jpg';
    import icon from '$lib/assets/icon.svg';

    const description = `A thank you to Professor Strang, who made a lot of people love linear algebra.`;
    const url = `https://thankyouprofessor.com`;
</script>
<svelte:head>
    <title>Thanks Professor Strang</title>
    <!-- Add some SEO tags  -->
    <meta name="description" content={description} />
    <meta property="og:title" content="Thanks Professor Strang" />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="{profStrangImg}" />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content={profStrangImg} />
    <meta name="twitter:site" content="@aristot_3rd" />
    <meta name="twitter:creator" content="@aristot_3rd" />
    <meta name="twitter:title" content="Thanks Professor Strang" />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="{profStrangImg}" />
    <meta name="twitter:image:alt" content="Thanks Professor Strang" />
    <meta name="twitter:domain" content={url} />

    <link rel="icon" href="{icon}" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
    {#if !dev}
    <script async defer data-website-id="a2a6ce2f-d959-4b84-93a2-3e3762a7b4ec" src="https://umami.aristot.io/umami.js"></script>
    {/if}
</svelte:head>

<header id="top">
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>

<div class="container">
    <slot />
</div>

<footer class="container-fluid">
    <small>made with ♥ by <a href="https://aristot.io" target="_blank">aristot</a> &#8226; code is on <a href="https://github.com/intergalactic-mammoth/thanks-professor-strang" target="_blank">github</a></small>
</footer>

<style>
    .container {
        text-align: center;
    }
    nav {
        display: flex;
        justify-content: right;
        gap: 1rem;
        margin: 1rem auto;
        margin-right: 2rem;
    }
    footer {
        text-align: center;
        margin: 1rem auto auto;
        position: sticky;
        padding: 0.5rem 0 1rem 0;
        bottom: 0;
        background-color: var(--background-color);
    }
</style>
