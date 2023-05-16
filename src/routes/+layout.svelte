<script>
    import profStrangImg from '$lib/assets/prof_strang.jpg';
    import icon from '$lib/assets/icon.svg';
</script>
<svelte:head>
    <title>Thanks Professor Strang</title>
    <!-- Add some SEO tags  -->
    <meta name="description" content="Thank you Professor Strang, you have made 1 person love linear algebra." />
    <meta property="og:title" content="Thanks Professor Strang" />
    <meta property="og:description" content="Thank you Professor Strang, you have made 1 person love linear algebra." />
    <meta property="og:image" content="{profStrangImg}" />
    <meta property="og:url" content="https://thanksprofessorstrang.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@aristot_3rd" />
    <meta name="twitter:creator" content="@aristot_3rd" />
    <meta name="twitter:title" content="Thanks Professor Strang" />
    <meta name="twitter:description" content="Thank you Professor Strang, you have made 1 person love linear algebra." />
    <meta name="twitter:image" content="{profStrangImg}" />
    <meta name="twitter:image:alt" content="Thanks Professor Strang" />
    <meta name="twitter:domain" content="thanksprofessorstrang.com" />

    <!-- Add icon -->
    <link rel="icon" href="{icon}" />

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
</svelte:head>

<header>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>

<div class="container">
    <slot />
</div>

<footer class="container">
    <div>made with ♥ by <a href="https://aristot.io" target="_blank">aristot</a> | code is on <a href="https://github.com/intergalactic-mammoth/thanks-professor-strang" target="_blank">github</a></div>
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
        margin: 2rem auto;
    }
</style>
