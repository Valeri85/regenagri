import { component$ } from '@builder.io/qwik';
import { PlantCard } from '~/components/ui/plant-card';

export default component$(() => {
	return (
		<div class="annual-plants-page">
			<div class="container">
				<div class="page-header">
					<h1 class="page-title">Annual Plants</h1>
					<p class="page-description">
						Annual plants complete their entire life cycle in one growing season. 
						They're excellent for quick soil improvement, cover cropping, and seasonal production.
					</p>
				</div>
				
				<div class="plants-grid">
					<PlantCard
						title="Sorghum"
						href="/plants/annual/sorghum"
						description="Drought-tolerant grain crop excellent for biomass production and soil improvement"
						icon="🌾"
						category="Grain Crop"
					/>
					<PlantCard
						title="Jerusalem Artichoke"
						href="/plants/annual/jerusalem-artichoke"
						description="Nutritious tuber crop that improves soil structure and provides food"
						icon="🥔"
						category="Root Vegetable"
					/>
					<PlantCard
						title="Sunflower"
						href="/plants/annual/sunflower"
						description="Oil-rich crop that attracts pollinators and improves soil health"
						icon="🌻"
						category="Oil Crop"
					/>
				</div>
			</div>
		</div>
	);
});
