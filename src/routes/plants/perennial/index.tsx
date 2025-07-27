import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<>
			<h1>Perennial Plants</h1>
			<ul>
				<li>
					{/* კუძუ */}
					<Link href={`/plants/mravalwliani/kudzu`}>Pueraria</Link>
				</li>
				<li>
					{/* სალბი */}
					<Link href={`/plants/mravalwliani/salbi`}>Salvia</Link>
				</li>
				<li>
					{/* ტირიფი */}
					<Link href={`/plants/mravalwliani/tirifi`}>Willow</Link>
				</li>
				<li>
					{/* მუხა */}
					<Link href={`/plants/mravalwliani/mukha`}>Oak</Link>
				</li>
				<li>
					{/* თუთა */}
					<Link href={`/plants/mravalwliani/tuta`}>Mulberries</Link>
				</li>
				<li>
					{/* უნაბი */}
					<Link href={`/plants/mravalwliani/unabi`}>Jujube</Link>
				</li>
			</ul>
		</>
	);
});
