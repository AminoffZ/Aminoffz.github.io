<script lang="ts">
  import { navigate } from '$lib/helpers/navigator';
  import { Button } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
  export let color:
    | 'red'
    | 'yellow'
    | 'green'
    | 'purple'
    | 'blue'
    | 'light'
    | 'dark'
    | 'primary'
    | 'none'
    | 'alternative'
    | undefined;
  export let destination: string;
</script>

<a tabindex="-1" href={destination}>
  <Button {color} on:click={() => navigate(destination)}>
    <slot />
    <Icon
      focusable="false"
      tabindex="-1"
      name="arrow-right-outline"
      class="w-3.5 h-3.5 ml-2 text-white"
    />
  </Button>
</a>
