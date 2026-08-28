import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Seo, { SITE_URL } from "@/components/Seo";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts, formatPostDate } from "@/data/blogPosts";
import { getCover } from "@/data/blogCovers";


const [latest, ...others] = blogPosts
  .slice()
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Insights on Brand, Web, Content & Growth Systems | DigitalEditz"
      description="Practical articles on building connected digital growth systems, brand, website, content, acquisition, conversion and analytics working as one."
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

    <PageHero
      eyebrow="Insights"
      title={
        <>
          Notes on building{" "}
          <span className="text-gradient">connected growth systems</span>
        </>
      }
      description="How brand, digital infrastructure, content, acquisition, conversion and analytics fit together, written from the work we do, not from theory."
    />

    {/* Featured latest post */}
    <section className="section-pad-sm relative">
      <div className="container">
        <ScrollReveal>
          <Link to={`/blog/${latest.slug}`} className="block group">
            <div className="surface surface-hover overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative min-h-[260px] lg:min-h-full bg-gradient-to-br from-primary/15 via-transparent to-transparent flex items-center justify-center p-10">
                  <img
                    src={covers[latest.slug]}
                    alt=""
                    width={1280}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/40 to-transparent" />
                  <div className="absolute inset-0 dot-grid opacity-20" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="eyebrow w-fit mb-5">Latest article</span>
                  <p className="label-mono text-primary/70 mb-3">{latest.category}</p>
                  <h2 className="display-md group-hover:text-primary transition-colors">
                    {latest.title}
                  </h2>
                  <p className="body-lg mt-4">{latest.summary}</p>
                  <div className="flex items-center gap-3 mt-6 label-mono text-muted-foreground/60 text-[10px]">
                    <time dateTime={latest.date}>{formatPostDate(latest.date)}</time>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={11} /> {latest.readTime}
                    </span>
                  </div>
                  <span className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-7">
                    Read article
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </section>

    {/* Rest of posts */}
    <section className="section-pad-sm relative">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <article className="h-full surface surface-hover overflow-hidden flex flex-col">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={covers[post.slug]}
                    alt=""
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                <span className="eyebrow w-fit mb-5">{post.category}</span>
                <h2 className="font-display text-2xl font-bold leading-snug">
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
                  <span className="inline-flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
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
                </div>
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
