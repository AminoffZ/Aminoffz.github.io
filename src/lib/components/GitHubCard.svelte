<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import { getGithub } from '../fetchers/github-fetcher';
	import { navigate } from '$lib/helpers/navigator';
	export let repoName = '';
	export let hasDocs = false;
	const user = import.meta.env.VITE_USER;
</script>

<Card class="w-96">
	<Icon name="github-solid" />
	{#await getGithub(user, repoName)}
		<div>Loading...</div>
	{:then data}
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{data.name}
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			{data.description}
		</p>
		<div class="flex gap-4 mt-auto">
			<Button
				disabled={!hasDocs}
				on:click={() => navigate(`/${repoName}`)}
				style="height: 40px"
				class="h-10 w-24"
			>
				Docs <Icon name="arrow-right-outline" class="w-3.5 h-3.5 ml-2 text-white" />
			</Button>
			<Button
				color="dark"
				on:click={() => navigate(`https://github.com/${user}/${repoName}`)}
				class="w-28 h-10"
			>
				GitHub
				<Icon name="arrow-right-outline" class="w-3.5 h-3.5 ml-2 text-white" />
			</Button>
		</div>
	{:catch error}
		<div>Error: {error.message}</div>
	{/await}
</Card>
