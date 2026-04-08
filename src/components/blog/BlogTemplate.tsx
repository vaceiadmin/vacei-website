'use client';

import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, User, Share2, ArrowUpRight } from 'lucide-react';
import LocalizedLink from '@/components/common/LocalizedLink';
import Image from 'next/image';
import { BlogPost } from '@/utils/blog';
import MarkdownRenderer from './MarkdownRenderer';
import PageHeader from '@/components/common/PageHeader';
import { cn } from '@/lib/utils';
import { usePerformance } from '@/contexts/ReduceMotionContext';
import { usePagesTranslation } from '@/hooks/usePagesTranslation';

interface BlogTemplateProps {
  blog: BlogPost;
  relatedBlogs?: BlogPost[];
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ blog, relatedBlogs = [] }) => {
  const { isIPhone, isLowPerformance } = usePerformance();
  const { t } = usePagesTranslation('insights');

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t('article.linkCopied'));
    }
  };

  const breadcrumbs = [
    { label: t('pageHeader.breadcrumbs.0.label'), href: '/insights' },
    { label: blog.title }
  ];

  return (
    <div className="min-h-screen bg-white hardware-accelerated">
      <div className="bg-background pt-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <PageHeader
            title={blog.title}
            breadcrumbs={breadcrumbs}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content (Left) */}
            <div className="lg:col-span-8">
              {/* Mobile Info (only visible on mobile) */}
              <div className="lg:hidden flex flex-wrap items-center gap-4 py-6 border-b border-gray-100 mb-8 font-sans text-sm text-text-gray">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary-blue" /> {format(new Date(blog.date), 'MMM dd, yyyy')}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary-blue" /> {blog.readingTime}</span>
              </div>

              <article className="max-w-none prose prose-lg prose-blue">
                <MarkdownRenderer content={blog.content} />
              </article>

              {/* Bottom Tags (Mobile only) */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="lg:hidden mt-8 flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-blue/5 text-primary-blue text-xs font-bold rounded-full border border-primary-blue/10">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Sticky Sidebar (Right) */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Author Card */}
                <div className="bg-background rounded-2xl p-6 border border-gray-100">
                  <h4 className="text-[10px] uppercase tracking-widest font-extrabold text-text-gray/40 mb-4 font-sans">{t('article.writtenBy')}</h4>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div>
                      <p className="font-bold text-text-heading leading-tight">{blog.author}</p>
                      <p className="text-xs text-text-gray mt-0.5">{t('article.teamLine')}</p>
                    </div>
                  </div>
                  <div className="space-y-3 pt-4 border-t border-gray-200/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-gray font-sans">{t('article.published')}</span>
                      <span className="font-bold text-text-heading font-sans">{format(new Date(blog.date), 'MMM dd, yyyy')}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-gray font-sans">Reading Time</span>
                      <span className="font-bold text-text-heading font-sans">{blog.readingTime}</span>
                    </div>
                  </div>
                </div>

                {/* Share Sidebar Action */}
                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <h4 className="text-[10px] uppercase tracking-widest font-extrabold text-text-gray/40 mb-4 font-sans">{t('article.shareInsight')}</h4>
                  <div className="flex gap-3">
                    <button
                      onClick={handleShare}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-blue text-white rounded-xl hover:bg-primary-blue-hover transition-all font-bold font-sans text-sm shadow-lg shadow-primary-blue/20"
                    >
                      <Share2 className="w-4 h-4" />
                      {t('article.copyLink')}
                    </button>
                  </div>
                </div>

                {/* Tags Sidebar */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="p-1">
                    <h4 className="text-[10px] uppercase tracking-widest font-extrabold text-text-gray/40 mb-4 font-sans px-2">{t('article.tagsHeading')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-1.5 bg-white text-text-gray text-xs font-bold rounded-full border border-gray-100 hover:border-primary-blue hover:text-primary-blue transition-all cursor-default font-sans"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Platform CTA */}
                <div className="relative group overflow-hidden rounded-2xl bg-primary-blue p-6 text-white">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-24 h-24" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-2">{t('article.needAuditTitle')}</h4>
                    <p className="text-sm text-blue-100 mb-6">{t('article.needAuditBody')}</p>
                    <LocalizedLink 
                      href="/quote" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-blue rounded-xl font-bold text-sm hover:gap-3 transition-all"
                    >
                      {t('article.getStarted')}
                      <ArrowUpRight className="w-4 h-4" />
                    </LocalizedLink>
                  </div>
                </div>
              </div>
            </aside>
          </div>
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
                    {t('article.relatedTitle')}
                  </h2>
                  <p className="text-text-gray font-sans max-w-xl">
                    {t('article.relatedSubtitle')}
                  </p>
                </div>
                <LocalizedLink
                  href="/insights"
                  className="hidden md:inline-flex items-center gap-2 text-primary-blue font-bold hover:gap-3 transition-all font-sans"
                >
                  {t('article.viewAllInsights')}
                  <ArrowUpRight className="w-5 h-5" />
                </LocalizedLink>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedBlogs.slice(0, 3).map((relatedBlog) => (
                  <article
                    key={relatedBlog.slug}
                    className={cn(
                      "group relative flex flex-col h-full bg-white hover:bg-primary-blue rounded-3xl border border-gray-100 hover:border-primary-blue transition-all duration-500 hover:shadow-2xl hover:shadow-primary-blue/20",
                      (isIPhone || isLowPerformance) && "hover:translate-y-0"
                    )}
                  >
                    <LocalizedLink href={`/insights/${relatedBlog.slug}`} className="flex flex-col h-full p-6 md:p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary-blue/5 text-primary-blue group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                          {relatedBlog.tags ? relatedBlog.tags[0] : t('article.defaultTag')}
                        </span>
                        <div className="flex items-center text-xs text-text-gray/70 group-hover:text-white/70 font-sans transition-colors duration-300">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          {format(new Date(relatedBlog.date), 'MMM dd, yyyy')}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-text-heading mb-3 group-hover:text-white transition-colors duration-300 line-clamp-2 font-sans">
                        {relatedBlog.title}
                      </h3>
                      
                      <p className="text-text-gray text-sm leading-relaxed mb-6 line-clamp-2 group-hover:text-white/80 transition-colors duration-300 font-sans">
                        {relatedBlog.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50 group-hover:border-white/10 transition-colors duration-300">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-text-heading group-hover:text-white transition-colors duration-300 font-sans">{relatedBlog.author}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary-blue transition-colors duration-300" />
                        </div>
                      </div>
                    </LocalizedLink>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center md:hidden">
                <LocalizedLink
                  href="/insights"
                  className="inline-flex items-center gap-2 text-primary-blue font-bold font-sans"
                >
                  {t('article.viewAllInsights')}
                  <ArrowUpRight className="w-5 h-5" />
                </LocalizedLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogTemplate;
