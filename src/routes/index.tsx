import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<main>
			<h1>Regenerative Agriculture</h1>
			<h2>All category</h2>
			<ul>
				<li>
					<Link href={`/plants`}>plants</Link>
				</li>
			</ul>
		</main>
	);
});

export const head: DocumentHead = {
	title: 'Regenerative Agriculture',
	meta: [
		{
			name: 'Regenerative Agriculture',
			content: 'Regenerative Agriculture',
		},
	],
};
