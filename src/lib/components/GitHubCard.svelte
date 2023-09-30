<script lang="ts">
  import { Card, Spinner } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  import { getGitHub } from '../fetchers/github-fetcher';
  export let owner: string;
  export let repoName: string;
  export let iconUrl: string = '';
  let data: GitHubRepo;
  onMount(async () => {
    data = await getGitHub(owner, repoName);
  });
</script>

{#if data}
  <Card style="min-width: 12rem">
    {#if iconUrl}
      <img alt="icon" src={iconUrl} class="w-8 h-8" />
    {:else}
      <Icon
        style="pointer-events: none"
        focusable="false"
        tabindex="-1"
        name="github-solid"
      />
    {/if}

    <h5
      class="break-words mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {data.name}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {data.description}
    </p>
    <div class="flex gap-4 mt-auto flex-wrap">
      <slot />
    </div>
  </Card>
{:else}
  <Card
    style="min-width: 12rem; min-height: 6rem;"
    class=" flex items-center justify-center"><Spinner /></Card
  >
{/if}
