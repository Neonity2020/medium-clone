import { MadeWithDyad } from "@/components/made-with-dyad";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Placeholder data for articles
  const articles = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js 14",
      authorName: "Jane Doe",
      authorAvatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=JD",
      publishDate: "Jul 15, 2024",
      readingTime: "7 min",
      description: "A comprehensive guide to building your first application with Next.js 14 and the App Router.",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-cd3608a92f77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      slug: "understanding-tailwind-css",
      title: "Understanding Tailwind CSS for Rapid UI Development",
      authorName: "John Smith",
      authorAvatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=JS",
      publishDate: "Jul 10, 2024",
      readingTime: "5 min",
      description: "Dive deep into the utility-first approach of Tailwind CSS and how it can boost your development workflow.",
      imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      slug: "the-power-of-typescript",
      title: "The Power of TypeScript in Modern Web Applications",
      authorName: "Alice Johnson",
      authorAvatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=AJ",
      publishDate: "Jul 01, 2024",
      readingTime: "8 min",
      description: "Explore how TypeScript enhances code quality, maintainability, and developer experience.",
      imageUrl: "https://images.unsplash.com/photo-1627398242478-0d4711877664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Stay curious.
              </h1>
              <p className="text-xl md:text-2xl mb-6 max-w-lg">
                Discover stories, thinking, and expertise from writers on any topic.
              </p>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Start reading
              </Button>
            </div>
            <div className="hidden md:block">
              {/* Placeholder for an image or illustration */}
              <img src="/globe.svg" alt="Globe" className="h-64 w-64" />
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="container py-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Trending on Medium Clone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </section>
      </main>
      <MadeWithDyad />
    </div>
  );
}