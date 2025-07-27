import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<div>
			<h1>Plants</h1>
			<h2>Sub-category</h2>
			<ul>
				<li>
					<Link href={`/plants/ertwliani`}>Annual Plants</Link>
				</li>
				<li>
					<Link href={`/plants/mravalwliani`}>Perennial Plants</Link>
				</li>
			</ul>
		</div>
	);
});
