<script lang="ts">
	import { marked } from 'marked';
	export let data: string;
</script>

<article style="max-inline-size: unset; min-inline-size: 12rem" class="prose prose-indigo">
	{@html marked(data)}
</article>
