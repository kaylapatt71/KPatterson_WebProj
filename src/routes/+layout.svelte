<script> 
    import Header from '$lib/HEADER.svelte';
    import Footer from '$lib/FOOTER.svelte'; 
</script>

<svelte:head>
    <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<Header />

<slot /> <!--page content-->

<Footer />