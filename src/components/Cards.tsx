"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import products from "@/data/products";
import DetailedProduct from "./DetailedProduct";
import { motion } from "framer-motion";

export default function Cards() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="container mx-auto px-12 py-8 max-w-screen-xl"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
        Courses
      </h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-500" role="status"></div>
          <span className="ml-2 text-lg font-medium text-gray-500">Loading...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0.0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <ProductCard
                product={product}
                index={index}
                onClick={setSelectedProduct}
              />
            </motion.div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <DetailedProduct
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </motion.div>
  );
}
