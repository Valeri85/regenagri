import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<>
			<h1>Annual Plants</h1>
			<ul>
				<li>
					{/* სორგო */}
					<Link href={`/plants/ertwliani/sorgo`}>Sorghum</Link>
				</li>
				<li>
					{/* მიწავაშლა */}
					<Link href={`/plants/ertwliani/miwavashla`}>Jerusalem Artichoke</Link>
				</li>
				<li>
					{/* მზესუმზირა */}
					<Link href={`/plants/ertwliani/mzesumzira`}>Sunflower</Link>
				</li>
			</ul>
		</>
	);
});
