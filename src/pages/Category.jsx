import React from "react";
import { useItemsByCategory } from "../hooks";
import { ItemListContainer, Loader } from "../component";
import { useParams } from "react-router";

export const Category = () => {
  const { id } = useParams();

  const { productsData, loading } = useItemsByCategory(id);

  return loading ? <Loader /> : <ItemListContainer products={productsData} />;
};