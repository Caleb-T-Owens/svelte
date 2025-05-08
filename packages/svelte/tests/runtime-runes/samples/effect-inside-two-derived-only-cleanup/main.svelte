<script>
	let count = $state(0);

	const x = $derived.by(() => {
		count;

		const y = $derived.by(() => {
			$effect(() => {
				console.log("subscribed")
				return () => {
					console.log("unsubscribed")
				}
			});
		});

		y;
	});

	$effect(() => x);
</script>

<button onclick={() => (count += 1)}>clickme</button>
