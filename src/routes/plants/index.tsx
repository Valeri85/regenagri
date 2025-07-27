import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<div>
			<h1>Plants</h1>
			<h2>Sub-category</h2>
			<ul>
				<li>
					<Link href={`/plants/annual`}>Annual Plants</Link>
				</li>
				<li>
					<Link href={`/plants/perennial`}>Perennial Plants</Link>
				</li>
			</ul>
		</div>
	);
});
