"use client";

import { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { motion, AnimatePresence } from "motion/react";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import ProductCard from "./ProductCard";
import NoProductAvailable from "./NoProductAvailable";
import { Product } from "@/sanity.types";

export default function ProductGrid() {
  const [product, setProduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;
    const params = { variant: selectedTab.toLowerCase() };
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await client.fetch(query, params);
            console.log(response)
          setProduct(await response);
        } catch (error) {
          console.log("Product fetching Error", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, [selectedTab]);
 

  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
          <motion.div className="flex items-center space-x-2 text-blue-600">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Product is loading...</span>
          </motion.div>
        </div>
      ) : product?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
         
            {product?.map((products) => (
              <AnimatePresence key={products?._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard product={products} />
                </motion.div>
              </AnimatePresence>
            ))}
         
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  );
}
