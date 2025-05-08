import { flushSync } from 'svelte';
import { test } from '../../test';

export default test({
	html: '<button>clickme</button>',

	test({ assert, target, logs }) {
		const button = target.querySelector('button');

		assert.deepEqual(logs, ['subscribed']);
		flushSync(() => button?.click());
		assert.deepEqual(logs, ['subscribed', 'unsubscribed', 'subscribed']);
	}
});
