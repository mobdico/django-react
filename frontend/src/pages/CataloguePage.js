import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";

function CataloguePage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({}); // Pour stocker tous les critères

  useEffect(() => {
    // Créez une chaîne de requête basée sur les filtres
    const queryParams = new URLSearchParams(filters).toString();
    axios
      .get(`http://127.0.0.1:8000/api/products/?${queryParams}`)
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, [filters]);

  return (
    <div>
      <h1>Catalogue</h1>
      <Filter setFilters={setFilters} />
      <ProductList products={products} />
    </div>
  );
}

export default CataloguePage;

