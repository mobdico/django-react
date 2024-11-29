import React from "react";

function ProductCard({ product }) {
  const productImageUrl = `http://localhost:8000${product.image}`;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={productImageUrl} alt={product.name} width="40" height="100" />
      <p>Prix : {product.price} €</p>
      <p>Description : {product.description}</p>
      <p>Marque : {product.brand}</p>
      <p>Catégorie : {product.category}</p>
      <p>Évaluations : {product.ratings} / 5</p>
      <p>Stock : {product.stock} en stock</p>
    </div>
  );
}

export default ProductCard;


