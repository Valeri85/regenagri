export const ThemeScript = () => {
  const themeScript = `
    (function() {
      function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('color-mode');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';
        
        if (hasPersistedPreference) {
          return persistedColorPreference;
        }
        
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        
        if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light';
        }
        
        return 'light';
      }
      
      const colorMode = getInitialColorMode();
      const root = document.documentElement;
      
      // Set CSS variables based on theme
      if (colorMode === 'dark') {
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
      
      root.style.setProperty('--initial-color-mode', colorMode);
    })()
  `;

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
};