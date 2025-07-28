import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

export const Header = component$(() => {
  const location = useLocation();
  
  return (
    <header class="header">
      <nav class="nav">
        <Link href="/" class="logo">
          <span class="logo-icon">🌱</span>
          <span class="logo-text">RegenAg</span>
        </Link>
        
        <div class="nav-links">
          <Link 
            href="/" 
            class={`nav-link ${location.url.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/plants" 
            class={`nav-link ${location.url.pathname.startsWith('/plants') ? 'active' : ''}`}
          >
            Plants
          </Link>
        </div>
      </nav>
    </header>
  );
});