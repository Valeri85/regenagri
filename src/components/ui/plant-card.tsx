import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface PlantCardProps {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  category?: string;
}

export const PlantCard = component$<PlantCardProps>(({ title, href, description, icon, category }) => {
  return (
    <Link href={href} class="plant-card">
      <div class="plant-card-content">
        {icon && <div class="plant-card-icon">{icon}</div>}
        <h3 class="plant-card-title">{title}</h3>
        {category && <span class="plant-card-category">{category}</span>}
        {description && <p class="plant-card-description">{description}</p>}
      </div>
      <div class="plant-card-arrow">→</div>
    </Link>
  );
});