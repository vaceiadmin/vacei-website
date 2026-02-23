'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, Search, Filter, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/utils/blog';
import PageHeader from '@/components/common/PageHeader';
import { cn } from '@/lib/utils';
import { usePerformance } from '@/contexts/ReduceMotionContext';

interface BlogListingProps {
  blogs: BlogPost[];
}

const BlogListing: React.FC<BlogListingProps> = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const { isIPhone, isLowPerformance } = usePerformance();

  // Get all unique tags
  const allTags = Array.from(
    new Set(blogs.flatMap(blog => blog.tags || []))
  ).sort();

  // Filter blogs based on search and tag
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || blog.tags?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const breadcrumbs = [{ label: "Insights" }];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mt-12">
        <PageHeader
          title="Insights"
          breadcrumbs={breadcrumbs}
        />
      </div>

      <div className="container mx-auto px-4 max-w-[1400px] mt-12 mb-12 relative z-10">
        <p className="text-center text-text-gray text-lg max-w-2xl mx-auto mb-10">
          Structured thinking on accounting, audit, compliance, business and professional growth.
        </p>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl shadow-primary-blue/5 border border-white mb-16">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-gray/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background-secondary border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue outline-none transition-all text-text-dark font-sans"
              />
            </div>

            {/* Tag Filter */}
            <div className="relative min-w-[200px]">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-gray/40 w-5 h-5" />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-background-secondary border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue outline-none appearance-none transition-all text-text-dark font-sans"
              >
                <option value="">All Topics</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-text-gray/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedTag) && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-xs text-text-gray font-sans">Filtered by:</span>
              {searchTerm && (
                <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue text-xs rounded-full font-medium font-sans">
                  &ldquo;{searchTerm}&rdquo;
                </span>
              )}
              {selectedTag && (
                <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue text-xs rounded-full font-medium font-sans">
                  {selectedTag}
                </span>
              )}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                }}
                className="text-xs text-text-gray hover:text-primary-blue transition-colors font-sans"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Blog Grid */}
        <div className="max-w-6xl mx-auto pb-24">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20 bg-background-secondary rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-text-heading mb-3 font-sans">
                No articles found
              </h3>
              <p className="text-text-gray mb-8 font-sans">
                Try adjusting your search terms or filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                }}
                className="px-8 py-3 bg-primary-blue text-white rounded-full hover:bg-primary-blue-hover transition-all font-medium font-sans shadow-lg shadow-primary-blue/20"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.slug}
                  className={cn(
                    "group relative flex flex-col h-full bg-white hover:bg-primary-blue rounded-3xl border border-gray-100 hover:border-primary-blue transition-all duration-500 hover:shadow-2xl hover:shadow-primary-blue/20",
                    (isIPhone || isLowPerformance) && "hover:translate-y-0"
                  )}
                >
                  <Link href={`/insights/${blog.slug}`} className="flex flex-col h-full p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        {blog.tags && blog.tags.length > 0 && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary-blue/5 text-primary-blue group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                            {blog.tags[0]}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-xs text-text-gray/70 group-hover:text-white/70 font-sans transition-colors duration-300">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {format(new Date(blog.date), 'MMM dd, yyyy')}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-text-heading mb-3 group-hover:text-white transition-colors duration-300 line-clamp-2 font-sans">
                      {blog.title}
                    </h2>
                    
                    <p className="text-text-gray text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-white/80 transition-colors duration-300 font-sans">
                      {blog.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50 group-hover:border-white/10 transition-colors duration-300">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-text-heading group-hover:text-white transition-colors duration-300 font-sans">{blog.author}</span>
                        <span className="flex items-center text-[11px] text-text-gray/60 group-hover:text-white/60 mt-1 transition-colors duration-300 font-sans">
                          <Clock className="w-3 h-3 mr-1" />
                          {blog.readingTime}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary-blue transition-colors duration-300" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {filteredBlogs.length > 0 && (
            <div className="text-center mt-16">
              <p className="text-sm text-text-gray font-sans">
                Showing {filteredBlogs.length} of {blogs.length} articles
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
