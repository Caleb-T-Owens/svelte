<script>
	let count = $state(0);

	const x = $derived.by(() => {
		count;

		$effect(() => {
			console.log('subscribed');
			return () => {
				console.log('unsubscribed');
			};
		});
	});

	$effect(() => x);
</script>

<button onclick={() => (count += 1)}>clickme</button>
