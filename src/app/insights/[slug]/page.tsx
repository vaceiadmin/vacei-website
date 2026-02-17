
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react";
import { insightsData } from "@/data/insightsData";
import { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = insightsData.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | VACEI Insights`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = insightsData.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return notFound();
  }

  // Related articles (same category, excluding current)
  const relatedArticles = insightsData
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Progress Bar (Optional - could be added later) */}
      
      <div className="container mx-auto px-4 max-w-4xl pt-32 md:pt-40">
        {/* Back Link */}
        <Link 
          href="/insights" 
          className="inline-flex items-center text-text-gray hover:text-primary-blue transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-primary-blue/10 text-primary-blue px-4 py-1.5 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <div className="flex items-center text-text-gray text-sm">
              <Calendar className="w-4 h-4 mr-1.5" />
              {article.publishDate}
            </div>
            {article.readTime && (
              <div className="flex items-center text-text-gray text-sm">
                <Clock className="w-4 h-4 mr-1.5" />
                {article.readTime}
              </div>
            )}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-text-heading leading-tight mb-6">
            {article.title}
          </h1>
          
          {article.subtitle && (
            <p className="text-xl md:text-2xl text-text-gray font-light leading-relaxed mb-8">
              {article.subtitle}
            </p>
          )}

          <div className="flex items-center justify-between border-y border-gray-100 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue font-bold text-sm">
                {article.author.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-text-heading text-sm">{article.author}</span>
                <span className="text-xs text-text-gray">VACEI Expert Team</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-gray-100 text-text-gray hover:text-primary-blue transition-colors" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 text-text-gray hover:text-[#0077b5] transition-colors" aria-label="Share on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 text-text-gray hover:text-[#1da1f2] transition-colors" aria-label="Share on Twitter">
                <Twitter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-text-heading prose-headings:font-bold prose-p:text-text-gray prose-p:leading-8 prose-strong:text-text-heading prose-li:text-text-gray prose-a:text-primary-blue prose-a:no-underline hover:prose-a:underline">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-20 pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-text-heading mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Link 
                  key={related.id} 
                  href={`/insights/${related.slug}`}
                  className="group block bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100"
                >
                  <span className="text-xs font-medium text-primary-blue mb-2 block">{related.category}</span>
                  <h3 className="text-lg font-bold text-text-heading mb-2 group-hover:text-primary-blue transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-text-gray line-clamp-2">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
