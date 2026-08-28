import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import Seo, { SITE_URL } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, Check, Clock, List, Share2 } from "lucide-react";
import { blogPosts, formatPostDate, getPostBySlug } from "@/data/blogPosts";
import NotFound from "./NotFound";
import { getCover } from "@/data/blogCovers";


const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${SITE_URL}/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={post.metaTitle}
        description={post.summary}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.summary,
            datePublished: post.date,
            author: { "@type": "Organization", name: "DigitalEditz" },
            publisher: { "@type": "Organization", name: "DigitalEditz" },
            mainEntityOfPage: url,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          },
        ]}
      />
      <Navbar />

      <article>
        {/* Hero band */}
        <header className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 mesh-bg" />
          <div className="absolute inset-0 dot-grid opacity-[0.3]" />
          <div className="floating-orb w-[450px] h-[450px] -top-20 right-0" />
          <div className="container relative z-10 max-w-3xl">
            <ScrollReveal>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft size={14} /> All insights
              </Link>
              <span className="eyebrow mb-5">{post.category}</span>
              <h1 className="display-lg mt-6">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-3 mt-7 label-mono text-muted-foreground/60 text-[10px]">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={11} /> {post.readTime}
                </span>
              </div>
            </ScrollReveal>
          </div>
          <div className="container relative z-10 mt-14">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-2xl border border-border/50 aspect-[21/9]">
                <img
                  src={covers[post.slug]}
                  alt=""
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
            <div className="hairline mt-14" />
          </div>
        </header>

        <div className="container">
          <div className="grid lg:grid-cols-[1fr_260px] gap-12 max-w-5xl mx-auto">
            {/* Prose column */}
            <div className="max-w-3xl">
              <ScrollReveal>
                <p className="text-lg text-secondary-foreground/85 leading-relaxed border-l-2 border-primary/40 pl-6">
                  {post.intro}
                </p>
              </ScrollReveal>

              <div className="mt-14 space-y-14">
                {post.sections.map((section) => (
                  <ScrollReveal key={section.heading}>
                    <section id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                      <h2 className="font-display text-2xl md:text-3xl font-bold mb-5 leading-snug">
                        {section.heading}
                      </h2>
                      <div className="space-y-5">
                        {section.paragraphs.map((p) => (
                          <p key={p} className="text-muted-foreground leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                      {section.bullets && (
                        <ul className="mt-6 space-y-3">
                          {section.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-3 text-sm text-secondary-foreground/85"
                            >
                              <Check size={16} className="text-primary shrink-0 mt-0.5" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="surface p-8 md:p-10 mt-16">
                  <p className="label-mono text-primary mb-4">Next step</p>
                  <p className="text-secondary-foreground/85 leading-relaxed mb-8">
                    {post.closing}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://calendly.com/digitaleditz01/free-discovery-call"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="font-semibold rounded-full glow-accent gap-2 group">
                        Book a Free Discovery Call
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      className="font-semibold rounded-full border-border/50 hover:border-primary/30"
                      asChild
                    >
                      <Link to="/packages">Explore our services</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Side rail */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <div className="surface p-6">
                  <p className="label-mono text-muted-foreground mb-4 inline-flex items-center gap-2">
                    <List size={12} /> In this article
                  </p>
                  <ul className="space-y-3">
                    {post.sections.map((s) => (
                      <li key={s.heading}>
                        <a
                          href={`#${s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug block"
                        >
                          {s.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="surface p-6">
                  <p className="label-mono text-muted-foreground mb-4 inline-flex items-center gap-2">
                    <Share2 size={12} /> Share
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`${post.title}, ${url}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-tile hover:border-primary/40 transition-colors"
                      aria-label="Share on WhatsApp"
                    >
                      <Share2 size={16} />
                    </a>
                    <Link to="/blog" className="icon-tile hover:border-primary/40 transition-colors" aria-label="Back to blog">
                      <ArrowLeft size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <ScrollReveal>
              <div className="mt-20 mb-8 max-w-5xl mx-auto">
                <p className="eyebrow mb-6">Keep reading</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/blog/${r.slug}`}
                      className="surface surface-hover p-6 block"
                    >
                      <p className="label-mono text-primary/70 mb-3">{r.category}</p>
                      <p className="font-display text-lg font-bold leading-snug">{r.title}</p>
                      <div className="flex items-center gap-2 mt-4 label-mono text-muted-foreground/60 text-[10px]">
                        <Clock size={11} /> {r.readTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </article>

      <CTASection />
      <Footer />
    </div>
  );
};

export default BlogPost;
