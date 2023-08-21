<script>
	import {
		Footer,
		FooterCopyright,
		FooterLink,
		FooterLinkGroup,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar
	} from 'flowbite-svelte';
	import '../app.postcss';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AminoffZ</span
		>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/docs">Docs</NavLi>
	</NavUl>
</Navbar>

<slot />

<Footer>
	<FooterCopyright href="/" by="AminoffZ" year={2022} />
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="/">Privacy Policy</FooterLink>
		<FooterLink href="/">Licensing</FooterLink>
		<FooterLink href="/">Contact</FooterLink>
	</FooterLinkGroup>
</Footer>
