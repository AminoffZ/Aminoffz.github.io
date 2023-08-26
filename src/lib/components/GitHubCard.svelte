<script lang="ts">
	import { navigate } from '$lib/helpers/navigator';
	import { Button, Card, Spinner } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';
	import { getGitHub } from '../fetchers/github-fetcher';
	export let repoName = '';
	export let hasDocs = false;
	const user = import.meta.env.VITE_USER ?? 'AminoffZ';
	let data: GitHubRepo;
	onMount(async () => {
		data = await getGitHub(user, repoName);
	});
</script>

{#if data}
	<Card style="min-width: 12rem">
		<Icon style="pointer-events: none" focusable="false" tabindex="-1" name="github-solid" />

		<h5 class="break-words mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{data.name}
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			{data.description}
		</p>
		<div class="flex gap-4 mt-auto flex-wrap">
			<Button disabled={!hasDocs} on:click={() => navigate(`/${repoName}`)} style="height: 40px">
				Docs <Icon
					focusable="false"
					tabindex="-1"
					name="arrow-right-outline"
					class="w-3.5 h-3.5 ml-2 text-white"
				/>
			</Button>
			<Button color="dark" on:click={() => navigate(`https://github.com/${user}/${repoName}`)}>
				GitHub
				<Icon
					focusable="false"
					tabindex="-1"
					name="arrow-right-outline"
					class="w-3.5 h-3.5 ml-2 text-white"
				/>
			</Button>
		</div>
	</Card>
{:else}
	<Card style="min-width: 12rem; min-height: 6rem;" class=" flex items-center justify-center"
		><Spinner /></Card
	>
{/if}
