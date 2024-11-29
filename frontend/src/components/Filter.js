import React, { useState } from "react";

function Filter({ setFilters }) {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    // Ajoutez uniquement les critères définis dans les filtres
    const newFilters = {};
    if (keyword) newFilters.keyword = keyword;
    if (category) newFilters.category = category;
    if (brand) newFilters.brand = brand;
    if (minPrice) newFilters.min_price = minPrice;
    if (maxPrice) newFilters.max_price = maxPrice;

    setFilters(newFilters);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Mot-clé (ex : laptop)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Catégorie (ex : electronics)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Marque (ex : apple)"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Prix min"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Prix max"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleFilter}>Appliquer les filtres</button>
    </div>
  );
}

export default Filter;

