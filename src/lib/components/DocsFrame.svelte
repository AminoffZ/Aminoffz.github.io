<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let repoName = '';
	let interval: NodeJS.Timeout;

	function getIFrame() {
		return document.getElementById('doc') as HTMLIFrameElement;
	}

	function setHeight() {
		const iframe = getIFrame();
		if (!iframe.contentWindow) return;
		const scrollHeight = iframe.contentWindow.document.body.scrollHeight;
		iframe.style.height = `${scrollHeight + 80}px`;
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
	style="min-height: calc(100vh - 71.99px);"
	title="doc"
	id="doc"
	src={`/docs/${repoName}/index.html`}
	width="100%"
	frameborder="0"
	scrolling="no"
/>

<svelte:window on:resize={setHeight} />
