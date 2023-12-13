function ProductManagement() {
  const products = [];

  function getAllProducts() {
    return products;
  }

  function addProduct(product) {
    return products.push(product)
  }

  function searchByName(name) {
    let lowerName = name.toLowerCase()
    return products.filter((product) => product.name.toLowerCase().includes(lowerName) )
  }

  function searchByPriceRange(minPrice, maxPrice) {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice ) 
  }

  function removeAll() {
    return products.length = []
  }

  return {
    removeAll,
    searchByName,
    searchByPriceRange,
    getAllProducts,
    addProduct,
  };
}
module.exports = ProductManagement;
const productCatalog = ProductManagement();
