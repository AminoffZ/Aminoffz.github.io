<script lang="ts">
  import CardButton from '$lib/components/CardButton.svelte';
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
    <GitHubCard
      owner="AminoffZ"
      repoName="viaplay-keyboard-shortcuts"
      iconUrl="https://raw.githubusercontent.com/AminoffZ/viaplay-keyboard-shortcuts/master/public/images/icon.png"
    >
      <CardButton
        color="dark"
        destination="https://github.com/AminoffZ/viaplay-keyboard-shortcuts"
      >
        GitHub
      </CardButton>
    </GitHubCard>
  </div>
  <div class="card-wrapper">
    <GitHubCard
      owner="AminoffZ"
      repoName="svelte-entity-store"
      iconUrl="https://raw.githubusercontent.com/AminoffZ/svelte-entity-store/main/assets/images/icon.svg"
    >
      <CardButton
        color="dark"
        destination="https://github.com/AminoffZ/svelte-entity-store"
      >
        GitHub
      </CardButton>
      <CardButton
        color="primary"
        destination="https://aminoffz.github.io/svelte-entity-store"
      >
        Docs
      </CardButton>
    </GitHubCard>
  </div>
  <div class="card-wrapper">
    <GitHubCard
      owner="AminoffZ"
      repoName="bun-browser-extension-builder"
      iconUrl="https://raw.githubusercontent.com/AminoffZ/bun-browser-extension-builder/main/public/images/icon256.png"
    >
      <CardButton
        color="dark"
        destination="https://github.com/AminoffZ/bun-browser-extension-builder"
      >
        GitHub
      </CardButton>
    </GitHubCard>
  </div>
  <div class="card-wrapper">
    <GitHubCard
      owner="AminoffZ"
      repoName="github-repo-size"
      iconUrl="https://raw.githubusercontent.com/AminoffZ/github-repo-size/main/assets/github-repo-size-icon256.png"
    >
      <CardButton
        color="dark"
        destination="https://github.com/AminoffZ/github-repo-size"
      >
        GitHub
      </CardButton>
      <CardButton
        color="green"
        destination="https://chrome.google.com/webstore/detail/github-repo-size/jpdmfnflpdgefbfkafcikmhipofhanfl"
      >
        Download
      </CardButton>
      <CardButton
        color="primary"
        destination="https://aminoffz.github.io/github-repo-size/docs"
      >
        Docs
      </CardButton>
    </GitHubCard>
  </div>
</div>

<style>
  .card-wrapper {
    margin: 0 auto;
  }
</style>
