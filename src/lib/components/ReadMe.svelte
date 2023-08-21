<script lang="ts">
	import { marked } from 'marked';
	export let data: string;
</script>

<article class="prose">{@html marked(data)}</article>
