import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../utils/constants";
import ProductList from "../common/ProductsList";

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("/api/task_api.php", {
        headers: {
          apiKey: API_KEY,
        },
      });
      setProducts(response?.data?.data || []);
    } catch (err) {
      setProducts([]);
      console.error("Error while fetching products:", err);
    }
  };

  return <ProductList data={products} />;
};

export default Products;
