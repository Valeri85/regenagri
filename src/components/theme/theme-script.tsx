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
      
      root.style.setProperty('--initial-color-mode', colorMode);
      
      if (colorMode === 'dark') {
        root.classList.add('dark-theme');
      } else {
        root.classList.add('light-theme');
      }
    })()
  `;

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
};