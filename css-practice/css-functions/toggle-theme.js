function setTheme() {
    const root = document.documentElement; // document.documentElement returns the root element of a document i.e., the HTML
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    
    document.querySelector('.theme-name').textContent = newTheme;
  }
  
  document.querySelector('.theme-toggle').addEventListener('click', setTheme)