import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { HeroSection } from '~/components/ui/hero-section';
import { PlantCard } from '~/components/ui/plant-card';

export default component$(() => {
	return (
		<div class="home-page">
			<HeroSection />
		</div>
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
