<script lang="ts">
	import GitHubCard from '$lib/components/GitHubCard.svelte';
	import ReadMe from '$lib/components/ReadMe.svelte';
	import { getGitHubRepoReadMe } from '$lib/fetchers/github-fetcher';
	import { TextPlaceholder } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	const user = import.meta.env.VITE_USER ?? 'AminoffZ';
	let data: string;
	onMount(async () => {
		data = await getGitHubRepoReadMe(user, `${user}.github.io`);
	});
</script>

<div style="margin: 5vw" class="flex items-center flex-col">
	{#if data}
		<div class="flex justify-center w-full">
			<ReadMe {data} />
		</div>
	{:else}
		<div class="flex-col flex w-full align-middle">
			<TextPlaceholder size="xxl" class=" px-12 w-full m-auto mt-10" />
			<TextPlaceholder size="xxl" class=" px-12 w-full m-auto mt-10" />
			<TextPlaceholder size="xxl" class=" px-12 w-full m-auto mt-10" />
			<TextPlaceholder size="xxl" class=" px-12 w-full m-auto mt-10" />
			<TextPlaceholder size="xxl" class=" px-12 w-full m-auto mt-10" />
			<TextPlaceholder size="xxl" class=" px-12 w-full m-auto mt-10" />
		</div>
	{/if}
</div>

<div id="section-repos" style="margin: 5vw" class="flex gap-16 flex-wrap">
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
