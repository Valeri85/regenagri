import { component$ } from '@builder.io/qwik';
import { PlantCard } from '~/components/ui/plant-card';

export default component$(() => {
	return (
		<div class="plants-page">
			<div class="container">
				<div class="page-header">
					<h1 class="page-title">Plant Database</h1>
					<p class="page-description">
						Explore our collection of regenerative plants, categorized by their life cycles 
						and growing characteristics. Each category offers unique benefits for sustainable agriculture.
					</p>
				</div>
				
				<div class="plants-grid">
					<PlantCard
						title="Annual Plants"
						href="/plants/annual"
						description="Fast-growing plants that complete their life cycle in one year. Perfect for quick soil improvement and seasonal crops."
						icon="🌾"
						category="1 Year Cycle"
					/>
					<PlantCard
						title="Perennial Plants"
						href="/plants/perennial"
						description="Long-lived plants that return year after year. Excellent for permanent soil structure and carbon sequestration."
						icon="🌳"
						category="Multi-Year"
					/>
				</div>
			</div>
		</div>
	);
});
