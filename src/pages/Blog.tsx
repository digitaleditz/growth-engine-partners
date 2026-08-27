import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import Seo, { SITE_URL } from "@/components/Seo";
import { ArrowUpRight } from "lucide-react";
import { blogPosts, formatPostDate } from "@/data/blogPosts";

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Insights on Brand, Web, Content & Growth Systems | DigitalEditz"
      description="Practical articles on building connected digital growth systems — brand, website, content, acquisition, conversion and analytics working as one."
      path="/blog"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "DigitalEditz Insights",
        url: `${SITE_URL}/blog`,
        blogPost: blogPosts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          datePublished: p.date,
          url: `${SITE_URL}/blog/${p.slug}`,
        })),
      }}
    />
    <Navbar />

    <section className="relative pt-40 pb-20 overflow-hidden section-texture">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="floating-orb w-[500px] h-[500px] top-0 right-0" />
      <div className="container relative z-10">
        <ScrollReveal>
          <p className="label-mono text-primary mb-4">Insights</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.1] max-w-3xl">
            Notes on building <span className="text-gradient">connected growth systems</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
            How brand, digital infrastructure, content, acquisition, conversion and
            analytics fit together — written from the work we do, not from theory.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="pb-24 relative">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <article className="h-full glass rounded-3xl p-8 border-shimmer card-hover-lift flex flex-col">
                <p className="label-mono text-primary/70">{post.category}</p>
                <h2 className="font-display text-2xl font-bold mt-4 leading-snug">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed flex-1">
                  {post.summary}
                </p>
                <div className="flex items-center gap-3 mt-6 label-mono text-muted-foreground/60 text-[10px]">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-6"
                >
                  Read article
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default Blog;
