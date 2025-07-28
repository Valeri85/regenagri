import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { HeroSection } from '~/components/ui/hero-section';
import { PlantCard } from '~/components/ui/plant-card';

export default component$(() => {
	return (
		<div class="home-page">
			<HeroSection />
			
			<section class="categories-section">
				<div class="container">
					<h2 class="section-title">Explore Plant Categories</h2>
					<p class="section-description">
						Dive into our comprehensive collection of regenerative plants, 
						organized by their growth cycles and characteristics.
					</p>
					
					<div class="categories-grid">
						<PlantCard
							title="All Plants"
							href="/plants"
							description="Browse our complete database of regenerative plants"
							icon="🌿"
							category="Complete Collection"
						/>
					</div>
				</div>
			</section>
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
