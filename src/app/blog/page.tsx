import { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Blog | App Nest - Web Development Insights & Tips",
  description: "Latest insights, tips, and trends in web development, design, and digital marketing. Expert advice from App Nest developers.",
  keywords: "web development blog, Next.js tips, React tutorials, web design trends, digital marketing, SEO tips, website development India",
  openGraph: {
    title: "Blog | App Nest - Web Development Insights & Tips",
    description: "Latest insights, tips, and trends in web development, design, and digital marketing. Expert advice from App Nest developers.",
    type: "website",
    url: "https://appnest.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | App Nest - Web Development Insights & Tips",
    description: "Latest insights, tips, and trends in web development, design, and digital marketing. Expert advice from App Nest developers.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://appnest.com/blog",
  },
};

const blogPosts = [
  {
    slug: "ai-powered-web-development-2025",
    title: "AI-Powered Web Development: The 2025 Revolution",
    excerpt: "How AI tools are transforming web development workflows, from code generation to automated testing and beyond.",
    date: "2025-01-15",
    readTime: "8 min read"
  },
  {
    slug: "next-js-15-server-actions-guide",
    title: "Next.js 15 Server Actions: Complete Developer Guide",
    excerpt: "Master the latest Next.js 15 features including enhanced Server Actions, improved caching, and performance optimizations.",
    date: "2025-01-12",
    readTime: "12 min read"
  },
  {
    slug: "web-performance-2025-core-vitals",
    title: "Web Performance in 2025: Beyond Core Web Vitals",
    excerpt: "Latest strategies for optimizing web performance, including new metrics, tools, and techniques for lightning-fast websites.",
    date: "2025-01-10",
    readTime: "10 min read"
  },
  {
    slug: "cybersecurity-web-apps-2025",
    title: "Cybersecurity for Web Apps: 2025 Essential Guide",
    excerpt: "Protect your web applications with the latest security practices, from zero-trust architecture to advanced threat detection.",
    date: "2025-01-08",
    readTime: "15 min read"
  },
  {
    slug: "react-19-concurrent-features",
    title: "React 19 Concurrent Features: A Deep Dive",
    excerpt: "Explore React 19's new concurrent features, automatic batching, and how they improve user experience and performance.",
    date: "2025-01-05",
    readTime: "11 min read"
  },
  {
    slug: "minimal-web-design-2025-trends",
    title: "Minimal Web Design: 2025 Trends That Convert",
    excerpt: "Why minimalism is dominating web design in 2025 and how to implement clean, conversion-focused designs.",
    date: "2025-01-03",
    readTime: "7 min read"
  }
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export default function BlogPage() {
  // Generate structured data for the blog
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "App Nest Blog",
    description: "Latest insights, tips, and trends in web development, design, and digital marketing. Expert advice from App Nest developers.",
    url: "https://app-nest.com/blog",
    publisher: {
      "@type": "Organization",
      name: "App Nest",
      logo: {
        "@type": "ImageObject",
        url: "https://app-nest.com/logo.png"
      }
    },
    blogPost: blogPosts.map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: "App Nest Team"
      },
      url: `https://app-nest.com/blog/${post.slug}`
    }))
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <Navigation />
      
      <main className="min-h-screen pt-20">
        <div className="max-w-2xl mx-auto px-6">
          
          {/* Header */}
          <header className="py-12">
            <h1 className="text-2xl font-medium mb-2">Writing</h1>
            <p className="text-muted-foreground text-sm">
              Thoughts on web development, design, and building better digital experiences.
            </p>
          </header>

          {/* Posts */}
          <div className="space-y-16">
            {blogPosts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="space-y-3">
                    <time className="text-xs text-muted-foreground font-mono">
                      {formatDate(post.date)}
                    </time>
                    
                    <h2 className="text-lg font-medium leading-snug group-hover:text-muted-foreground transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                      <div className="flex gap-2">
                        {/* Tags are not available in the new blogPosts array, so this will be empty */}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Footer */}
          <footer className="py-16">
            <div className="border-t border-border pt-8">
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Want to stay updated? Subscribe to our newsletter.
                </p>
                <div className="flex max-w-sm mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-3 py-2 text-sm border border-r-0 border-border rounded-l focus:outline-none focus:ring-1 focus:ring-border"
                  />
                  <button className="px-4 py-2 text-sm bg-foreground text-background border border-foreground rounded-r hover:opacity-80 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </main>
    </>
  );
} 