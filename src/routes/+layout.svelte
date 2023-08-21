<script lang="ts">
	import PrivacyPolicy from '$lib/components/PrivacyPolicy.svelte';
	import { getGitHub } from '$lib/fetchers/github-fetcher';
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
		Navbar
	} from 'flowbite-svelte';
	import '../app.postcss';
	import '../app.css';
	const user = import.meta.env.VITE_USER;
	let clickOutsideModal = false;

	function setDestination() {
		window.location.hash = 'section-repos';
	}
</script>

<Navbar class="sticky" let:hidden let:toggle>
	<div class="flex gap-4">
		{#await getGitHub(user)}
			<div class="ml-4">
				<Avatar style="padding: 0" border />
			</div>
		{:then data}
			<div class="ml-4">
				<Avatar style="padding: 0" border src={data.avatar_url} />
			</div>
		{/await}
		<NavBrand href="/">
			<span class="select-none self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>{user}</span
			>
		</NavBrand>
	</div>

	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="#section-repos" on:click={setDestination}>Repos</NavLi>
		<NavLi href="/docs">Docs</NavLi>
	</NavUl>
</Navbar>

<div style="min-height: calc(100vh - 71.99px);" class="flex flex-col justify-center align-middle">
	<slot />
</div>

<Footer class="min-w-min">
	<FooterCopyright class="p-2" by={user} year={2023} />
	<FooterLinkGroup class="p-2 flex text-sm gap-4 text-gray-500 dark:text-gray-400 justify-center">
		<button on:click={() => (clickOutsideModal = true)}>Privacy Policy</button>
		<button disabled>Licensing</button>
		<button disabled>Contact</button>
	</FooterLinkGroup>
</Footer>

<Modal title="Terms of Service" bind:open={clickOutsideModal} autoclose outsideclose>
	<PrivacyPolicy />
</Modal>
