<script lang="ts">
	import GitHubCard from '$lib/components/GitHubCard.svelte';
	import ReadMe from '$lib/components/ReadMe.svelte';
	import { getGitHubRepoReadMe } from '$lib/fetchers/github-fetcher';
	import { onMount } from 'svelte';
	const user = import.meta.env.VITE_USER;
	let data: string;
	onMount(async () => {
		data = await getGitHubRepoReadMe(user, `${user}.github.io`);
	});
</script>

<div class="p-8 flex justify-center align-middle">
	{#if data}
		<ReadMe {data} />
	{:else}
		Loading...
	{/if}
</div>

<div id="section-repos" class="p-24 flex gap-16 flex-wrap">
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
