import { component$, createContextId, useContextProvider, useStore, useVisibleTask$, Slot } from '@builder.io/qwik';

export interface ThemeState {
  colorMode: 'light' | 'dark';
  setColorMode: (mode: 'light' | 'dark') => void;
}

export const ThemeContext = createContextId<ThemeState>('theme-context');

export const ThemeProvider = component$(() => {
  const themeState = useStore<ThemeState>({
    colorMode: 'light',
    setColorMode: (mode: 'light' | 'dark') => {
      themeState.colorMode = mode;
      
      if (typeof window !== 'undefined') {
        const root = document.documentElement;
        
        // Update CSS variables
        if (mode === 'dark') {
          root.style.setProperty('--color-primary', '#4ade80');
          root.style.setProperty('--color-primary-light', '#86efac');
          root.style.setProperty('--color-primary-dark', '#22c55e');
          root.style.setProperty('--color-secondary', '#a78bfa');
          root.style.setProperty('--color-accent', '#fbbf24');
          
          root.style.setProperty('--color-text', '#f8fafc');
          root.style.setProperty('--color-text-muted', '#94a3b8');
          root.style.setProperty('--color-link', '#4ade80');
          root.style.setProperty('--color-link-hover', '#22c55e');
          
          root.style.setProperty('--color-background', '#0f172a');
          root.style.setProperty('--color-surface', '#1e293b');
          root.style.setProperty('--color-border', '#334155');
          
          root.style.setProperty('--gradient-hero', 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)');
        } else {
          root.style.setProperty('--color-primary', '#059669');
          root.style.setProperty('--color-primary-light', '#10b981');
          root.style.setProperty('--color-primary-dark', '#047857');
          root.style.setProperty('--color-secondary', '#8b5cf6');
          root.style.setProperty('--color-accent', '#f59e0b');
          
          root.style.setProperty('--color-text', '#1e293b');
          root.style.setProperty('--color-text-muted', '#64748b');
          root.style.setProperty('--color-link', '#059669');
          root.style.setProperty('--color-link-hover', '#047857');
          
          root.style.setProperty('--color-background', '#ffffff');
          root.style.setProperty('--color-surface', '#f8fafc');
          root.style.setProperty('--color-border', '#e2e8f0');
          
          root.style.setProperty('--gradient-hero', 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdf4 100%)');
        }
        
        // Persist preference
        window.localStorage.setItem('color-mode', mode);
      }
    }
  });

  useContextProvider(ThemeContext, themeState);

  // Initialize theme on client
  useVisibleTask$(() => {
    const root = document.documentElement;
    const initialColorValue = root.style.getPropertyValue('--initial-color-mode');
    
    if (initialColorValue) {
      themeState.colorMode = initialColorValue as 'light' | 'dark';
    }
  });

  return <Slot />;
});