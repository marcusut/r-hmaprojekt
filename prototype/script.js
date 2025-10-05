// NordicBean prototype shared JS
(function(){
  // Highlight active nav (simple contains check)
  try {
    const path = location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(a => {
      const isActive = a.getAttribute('href') === path;
      if(isActive) a.style.background = '#1d2230';
    });
  } catch (e) {}

  // Small helper: clear selection with hash
  if(location.hash === '#clear'){
    try { localStorage.removeItem('selectedProduct'); } catch(e){}
    if(location.pathname.endsWith('checkout.html')){
      location.href = 'products.html';
    }
  }
})();
