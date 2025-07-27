import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<>
			<h1>Perennial Plants</h1>
			<ul>
				<li>
					{/* კუძუ */}
					<Link href={`/plants/perennial/pueraria`}>Pueraria</Link>
				</li>
				<li>
					{/* სალბი */}
					<Link href={`/plants/perennial/salvia`}>Salvia</Link>
				</li>
				<li>
					{/* ტირიფი */}
					<Link href={`/plants/perennial/willow`}>Willow</Link>
				</li>
				<li>
					{/* მუხა */}
					<Link href={`/plants/perennial/oak`}>Oak</Link>
				</li>
				<li>
					{/* თუთა */}
					<Link href={`/plants/perennial/mulberries`}>Mulberries</Link>
				</li>
				<li>
					{/* უნაბი */}
					<Link href={`/plants/perennial/jujube`}>Jujube</Link>
				</li>
			</ul>
		</>
	);
});
