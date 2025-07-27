import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<>
			<h1>Annual Plants</h1>
			<ul>
				<li>
					{/* სორგო */}
					<Link href={`/plants/annual/sorghum`}>Sorghum</Link>
				</li>
				<li>
					{/* მიწავაშლა */}
					<Link href={`/plants/annual/jerusalem-artichoke`}>Jerusalem Artichoke</Link>
				</li>
				<li>
					{/* მზესუმზირა */}
					<Link href={`/plants/annual/sunflower`}>Sunflower</Link>
				</li>
			</ul>
		</>
	);
});
