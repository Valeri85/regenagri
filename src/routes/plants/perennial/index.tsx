import { component$ } from '@builder.io/qwik';
import { PlantCard } from '~/components/ui/plant-card';

export default component$(() => {
	return (
		<div class="perennial-plants-page">
			<div class="container">
				<div class="page-header">
					<h1 class="page-title">Perennial Plants</h1>
					<p class="page-description">
						Perennial plants live for multiple years, providing long-term soil benefits, 
						carbon sequestration, and sustainable yields with minimal replanting.
					</p>
				</div>
				
				<div class="plants-grid">
					<PlantCard
						title="Pueraria (Kudzu)"
						href="/plants/perennial/pueraria"
						description="Fast-growing nitrogen-fixing vine excellent for erosion control"
						icon="🌿"
						category="Ground Cover"
					/>
					<PlantCard
						title="Salvia"
						href="/plants/perennial/salvia"
						description="Aromatic herb that attracts beneficial insects and improves biodiversity"
						icon="🌸"
						category="Herb"
					/>
					<PlantCard
						title="Willow"
						href="/plants/perennial/willow"
						description="Fast-growing tree excellent for biomass and water management"
						icon="🌳"
						category="Tree"
					/>
					<PlantCard
						title="Oak"
						href="/plants/perennial/oak"
						description="Long-lived hardwood tree providing habitat and carbon storage"
						icon="🌰"
						category="Hardwood"
					/>
					<PlantCard
						title="Mulberries"
						href="/plants/perennial/mulberries"
						description="Fruit-bearing tree with edible leaves, excellent for food forests"
						icon="🫐"
						category="Fruit Tree"
					/>
					<PlantCard
						title="Jujube"
						href="/plants/perennial/jujube"
						description="Drought-tolerant fruit tree perfect for arid climate agriculture"
						icon="🍇"
						category="Fruit Tree"
					/>
				</div>
			</div>
		</div>
	);
});
