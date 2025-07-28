import { component$ } from '@builder.io/qwik';

export const HeroSection = component$(() => {
  return (
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Regenerative Agriculture
          <span class="hero-subtitle">Healing the Earth, One Plant at a Time</span>
        </h1>
        <p class="hero-description">
          Discover sustainable farming practices through our comprehensive plant database. 
          Learn about annual and perennial plants that restore soil health, increase biodiversity, 
          and create resilient agricultural systems.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Plant Species</span>
          </div>
          <div class="stat">
            <span class="stat-number">2</span>
            <span class="stat-label">Categories</span>
          </div>
          <div class="stat">
            <span class="stat-number">100%</span>
            <span class="stat-label">Sustainable</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="floating-elements">
          <div class="element element-1">🌿</div>
          <div class="element element-2">🌱</div>
          <div class="element element-3">🍃</div>
          <div class="element element-4">🌾</div>
        </div>
      </div>
    </section>
  );
});