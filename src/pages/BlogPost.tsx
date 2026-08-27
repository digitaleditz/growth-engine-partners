import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import Seo, { SITE_URL } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { blogPosts, formatPostDate, getPostBySlug } from "@/data/blogPosts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
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
        <header className="relative pt-40 pb-16 overflow-hidden section-texture">
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="floating-orb w-[450px] h-[450px] -top-20 right-0" />
          <div className="container relative z-10 max-w-3xl">
            <ScrollReveal>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft size={14} /> All insights
              </Link>
              <p className="label-mono text-primary mb-4">{post.category}</p>
              <h1 className="font-display text-3xl md:text-5xl font-bold leading-[1.15]">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-6 label-mono text-muted-foreground/60 text-[10px]">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </ScrollReveal>
          </div>
        </header>

        <div className="container max-w-3xl pb-8">
          <ScrollReveal>
            <p className="text-lg text-secondary-foreground/85 leading-relaxed border-l-2 border-primary/40 pl-6">
              {post.intro}
            </p>
          </ScrollReveal>

          <div className="mt-14 space-y-14">
            {post.sections.map((section) => (
              <ScrollReveal key={section.heading}>
                <section>
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
            <div className="glass rounded-3xl p-8 md:p-10 mt-16 border-shimmer">
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

          {related.length > 0 && (
            <ScrollReveal>
              <div className="mt-20">
                <h2 className="label-mono text-muted-foreground mb-6">Keep reading</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/blog/${r.slug}`}
                      className="glass rounded-2xl p-6 card-hover-lift block"
                    >
                      <p className="label-mono text-primary/70 mb-3">{r.category}</p>
                      <p className="font-display text-lg font-bold leading-snug">{r.title}</p>
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
