
"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryFilter from "./CategoryFilter";
import InsightCard from "./InsightCard";
import { insightsData, insightCategories } from "@/data/insightsData";
import { FadeInUp } from "@/components/common/Animations";

const InsightsClient = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") {
      return insightsData;
    }
    return insightsData.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
      {/* Category Filter Section */}
      <FadeInUp className="mb-12 md:mb-16">
        <div className="flex justify-center mb-8">
          <CategoryFilter
            categories={insightCategories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>
      </FadeInUp>

      {/* Articles Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article) => (
            <motion.div
              layout
              key={article.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <InsightCard article={article} index={Number(article.id)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No Results Fallback */}
      {filteredArticles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-xl text-text-gray">
            No articles found in this category yet.
          </p>
          <button
            onClick={() => setActiveCategory("All")}
            className="mt-4 text-primary-blue hover:underline font-medium"
          >
            View all articles
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default InsightsClient;
