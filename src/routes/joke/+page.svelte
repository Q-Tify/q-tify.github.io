<script lang="ts">

	import JokeContainer from './JokeContainer.svelte';
</script>


<svelte:head>
	<title>Joke</title>
	<meta name="description" content="Get a joke" />
</svelte:head>

<div class="cv-wrapper">
    <JokeContainer></JokeContainer>
</div>

<style>
.cv-wrapper{
	background-color: white;
	margin: 0 auto;
	padding: 0px 0px 0px 0px;
	width: 800px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	margin-top: 25px;
	margin-bottom: 25px;
}
</style>
