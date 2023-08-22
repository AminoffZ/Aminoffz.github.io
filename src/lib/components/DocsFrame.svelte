<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { base } from '$app/paths';

	export let repoName = '';
	let interval: NodeJS.Timeout;
	let heightSet = false;

	function getIFrame() {
		return document.getElementById('doc') as HTMLIFrameElement;
	}

	function setHeight() {
		const iframe = getIFrame();
		if (!iframe.contentWindow) return;
		try {
			const scrollHeight = iframe.contentWindow.document.body.scrollHeight;
			iframe.style.height = `${scrollHeight + 80}px`;
		} catch (e) {
			console.error("Failed to set iframe's height");
			return;
		}
		heightSet = true;
	}

	onMount(() => {
		setHeight();
		interval = setInterval(() => {
			setHeight();
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<iframe
	style="min-height: calc(100vh - 71.99px); opacity: {heightSet
		? 1
		: 0}; transition: opacity 0.5s ease-in-out}"
	title="doc"
	id="doc"
	src={`${base}/docs/${repoName}/index.html`}
	width="100%"
	frameborder="0"
	scrolling="no"
/>

<svelte:window on:resize={setHeight} />
