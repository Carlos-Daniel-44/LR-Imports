let currentRecordCount = 0;
let allProducts = [];
let filteredProducts = [];
let currentFilter = 'todos';

const dataHandler = {
  onDataChanged(data) {
    allProducts = data;
    currentRecordCount = data.length;
    filterAndRenderProducts();
  }
};

async function initializeDataSdk() {
  if (window.dataSdk) {
    const result = await window.dataSdk.init(dataHandler);
    if (!result.isOk) {
      console.error('Failed to initialize data SDK');
    }
  }
}

function getCategoryEmoji(category) {
  const emojis = {
    roupas: '👗',
    chapeus: '🎩',
    shorts: '🩳',
    perfumes: '💐',
    acessorios: '👜'
  };
  return emojis[category] || '📦';
}

function filterAndRenderProducts() {
  if (currentFilter === 'todos') {
    filteredProducts = [...allProducts];
  } else {
    filteredProducts = allProducts.filter(p => p.type === currentFilter);
  }
  renderProducts();
}

function renderProducts() {
  const gallery = document.getElementById('products-gallery');
  
  if (filteredProducts.length === 0) {
    gallery.innerHTML = '<div>Nenhum produto nesta categoria.</div>';
    return;
  }
  // Renderizar produtos aqui
}
