<script lang="ts">
  import PrivacyPolicy from '$lib/components/PrivacyPolicy.svelte';
  import {
    Avatar,
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    Modal,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
    Navbar,
  } from 'flowbite-svelte';
  import '../app.css';
  import '../app.postcss';
  import { base } from '$app/paths';
  const user = import.meta.env.VITE_USER ?? 'AminoffZ';
  let clickOutsideModal = false;
  function setDestination() {
    window.location.hash = 'section-repos';
  }
</script>

<Navbar class="sticky" let:hidden let:toggle>
  <div class="flex gap-4">
    <div class="ml-4">
      <Avatar
        style="padding: 0"
        border
        src={`${base}/images/icons/icon_64x64_round.png`}
      />
    </div>
    <NavBrand href="{base}/">
      <span
        class="select-none self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >{user}</span
      >
    </NavBrand>
  </div>

  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="{base}#section-repos" on:click={setDestination}>Repos</NavLi>
  </NavUl>
</Navbar>

<div
  style="min-height: calc(100vh - 71.99px);"
  class="flex flex-col align-middle"
>
  <slot />
</div>

<Footer class="min-w-min">
  <FooterCopyright class="p-2" by={user} year={2023} />
  <FooterLinkGroup
    class="p-2 flex text-sm gap-4 text-gray-500 dark:text-gray-400 justify-center"
  >
    <li>
      <button on:click={() => (clickOutsideModal = true)}>Privacy Policy</button
      >
    </li>
    <li>
      <button disabled>Licensing</button>
    </li>
    <li>
      <button disabled>Contact</button>
    </li>
  </FooterLinkGroup>
</Footer>

<Modal
  title="Terms of Service"
  bind:open={clickOutsideModal}
  autoclose
  outsideclose
>
  <PrivacyPolicy />
</Modal>

<svelte:head>
  <title>AminoffZ</title>
  <meta name="description" content="AminoffZ's personal website" />
  <link rel="icon" href="{base}/favicon.png" type="image/x-icon" />
  <link rel="manifest" href="{base}/manifest.json" />
</svelte:head>
