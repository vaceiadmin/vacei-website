'use client';

import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, User, ArrowLeft, Share2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/utils/blog';
import MarkdownRenderer from './MarkdownRenderer';
import PageHeader from '@/components/common/PageHeader';
import { cn } from '@/lib/utils';
import { usePerformance } from '@/contexts/ReduceMotionContext';

interface BlogTemplateProps {
  blog: BlogPost;
  relatedBlogs?: BlogPost[];
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ blog, relatedBlogs = [] }) => {
  const { isIPhone, isLowPerformance } = usePerformance();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const breadcrumbs = [
    { label: "Insights", href: "/insights" },
    { label: blog.title }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-background pt-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <PageHeader
            title={blog.title}
            breadcrumbs={breadcrumbs}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {blog.featuredImage && (
            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-12 border-4 border-white">
              <Image
                src={blog.featuredImage}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-b border-gray-100 mb-12">
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-gray font-sans">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-text-gray/50">Author</span>
                  <span className="font-bold text-text-dark">{blog.author}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-text-gray/50">Published</span>
                  <span className="font-bold text-text-dark">{format(new Date(blog.date), 'MMMM dd, yyyy')}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-text-gray/50">Reading Time</span>
                  <span className="font-bold text-text-dark">{blog.readingTime}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-gray-200 text-text-dark rounded-full hover:bg-white hover:border-primary-blue hover:text-primary-blue transition-all font-medium font-sans shadow-sm"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-primary-blue/5 text-primary-blue text-xs font-bold rounded-full border border-primary-blue/10 font-sans tracking-wide uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Main Content */}
          <article className="max-w-none prose prose-lg prose-blue">
            <MarkdownRenderer content={blog.content} />
          </article>
        </div>
      </div>

      {/* Suggested Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="bg-background py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 font-sans">
                    Related Insights
                  </h2>
                  <p className="text-text-gray font-sans max-w-xl">
                    More structured thinking from the VACEI team on professional growth and compliance.
                  </p>
                </div>
                <Link
                  href="/insights"
                  className="hidden md:inline-flex items-center gap-2 text-primary-blue font-bold hover:gap-3 transition-all font-sans"
                >
                  View all insights
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedBlogs.slice(0, 3).map((relatedBlog) => (
                  <article
                    key={relatedBlog.slug}
                    className={cn(
                      "group relative flex flex-col h-full bg-white rounded-2xl border border-gray-100 hover:border-primary-blue/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-blue/5",
                      (isIPhone || isLowPerformance) && "hover:translate-y-0"
                    )}
                  >
                    <Link href={`/insights/${relatedBlog.slug}`} className="flex flex-col h-full p-6 md:p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary-blue/5 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                          {relatedBlog.tags ? relatedBlog.tags[0] : 'Insight'}
                        </span>
                        <div className="flex items-center text-xs text-text-gray/70 font-sans">
                          {format(new Date(relatedBlog.date), 'MMM dd, yyyy')}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-text-heading mb-3 group-hover:text-primary-blue transition-colors duration-300 line-clamp-2 font-sans">
                        {relatedBlog.title}
                      </h3>
                      
                      <p className="text-text-gray text-sm leading-relaxed mb-6 line-clamp-2 font-sans">
                        {relatedBlog.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-text-heading font-sans">{relatedBlog.author}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center md:hidden">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-primary-blue font-bold font-sans"
                >
                  View all insights
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogTemplate;
