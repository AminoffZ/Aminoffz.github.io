<script lang="ts">
	import {
		Avatar,
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		Modal,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar
	} from 'flowbite-svelte';
	import style from '../app.css';
	const user = import.meta.env.VITE_USER;
	import { getGithub } from '$lib/fetchers/github-fetcher';
	import '../app.postcss';
	import PrivacyPolicy from '$lib/components/PrivacyPolicy.svelte';
	let clickOutsideModal = false;
</script>

<Navbar class="sticky" let:hidden let:toggle>
	<div class="flex gap-4">
		{#await getGithub(user)}
			<Avatar border />
		{:then data}
			<Avatar border src={data.avatar_url} />
		{/await}

		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{user}</span>
	</div>

	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/docs">Docs</NavLi>
	</NavUl>
</Navbar>

<div class="p-24" style="height: calc(100vh - 71.99px);">
	<slot />
</div>

<Footer class="min-w-min">
	<FooterCopyright class="p-2" href="/" by={user} year={2023} />
	<FooterLinkGroup class="p-2 flex text-sm gap-4 text-gray-500 dark:text-gray-400 justify-center">
		<button on:click={() => (clickOutsideModal = true)}>Privacy Policy</button>
		<button>Licensing</button>
		<button>Contact</button>
	</FooterLinkGroup>
</Footer>

<Modal title="Terms of Service" bind:open={clickOutsideModal} autoclose outsideclose>
	<PrivacyPolicy />
</Modal>
