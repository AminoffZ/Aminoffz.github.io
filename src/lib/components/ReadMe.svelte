<script lang="ts">
	import { marked } from 'marked';
	export let data: string;
</script>

<article style="max-inline-size:40rem; min-inline-size: 24rem" class="prose prose-indigo">
	{@html marked(data)}
</article>
