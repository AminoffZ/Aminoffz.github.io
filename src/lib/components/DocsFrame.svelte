<script lang="ts">
	import { onMount } from 'svelte';

	export let repoName = '';

	function setHeight() {
		const iframe = document.getElementById('test') as HTMLIFrameElement;
		if (!iframe.contentWindow) return;
		const scrollHeight = iframe.contentWindow.document.body.scrollHeight;
		iframe.style.height = `${scrollHeight + 80}px`;
	}

	onMount(() => {
		setHeight();
	});
</script>

<iframe
	title="doc"
	id="test"
	on:load={(a) => console.log(a)}
	src={`/docs/${repoName}/index.html`}
	width="100%"
	frameborder="0"
/>

<svelte:window on:resize={setHeight} />
