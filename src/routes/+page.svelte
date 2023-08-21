<script>
	import GitHubCard from '$lib/components/GitHubCard.svelte';
</script>

<div class=" p-24 flex gap-16 flex-wrap">
	<div class="card-wrapper">
		<GitHubCard repoName="viaplay-keyboard-shortcuts" />
	</div>
	<div class="card-wrapper">
		<GitHubCard hasDocs={true} repoName="svelte-entity-store" />
	</div>
	<div class="card-wrapper">
		<GitHubCard repoName="webpack-browser-extension-template" />
	</div>
</div>

<style>
	.card-wrapper {
		margin: 0 auto;
	}
</style>
