import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

// Placeholder data for articles (ideally fetched from a database)
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
    content: `
      <p class="mb-4">Next.js 14 brings exciting new features and improvements, making web development even more efficient and enjoyable. This guide will walk you through the essential steps to get your first Next.js 14 application up and running using the App Router.</p>
      <h2 class="text-2xl font-bold mb-3">1. Setting up your project</h2>
      <p class="mb-4">To start, ensure you have Node.js (version 18.17 or later) installed. Then, open your terminal and run the following command:</p>
      <pre class="bg-muted p-3 rounded-md mb-4 text-sm"><code>npx create-next-app@latest my-next-app</code></pre>
      <p class="mb-4">Follow the prompts to configure your project. We recommend using TypeScript and the App Router for the best experience.</p>
      <h2 class="text-2xl font-bold mb-3">2. Understanding the App Router</h2>
      <p class="mb-4">The App Router, introduced in Next.js 13, is a powerful new paradigm for building web applications. It leverages React Server Components and nested layouts to provide a highly performant and flexible routing system.</p>
      <p class="mb-4">Key concepts include:</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Layouts:</strong> Shared UI that remains consistent across multiple routes.</li>
        <li><strong>Pages:</strong> UI unique to a route.</li>
        <li><strong>Loading UI:</strong> Instant loading states with `loading.tsx`.</li>
        <li><strong>Error UI:</strong> Graceful error handling with `error.tsx`.</li>
      </ul>
      <h2 class="text-2xl font-bold mb-3">3. Data Fetching</h2>
      <p class="mb-4">With the App Router, data fetching can be done directly within Server Components using `async/await`. This allows you to fetch data closer to your data source, reducing client-side JavaScript bundles.</p>
      <pre class="bg-muted p-3 rounded-md mb-4 text-sm"><code>async function getData() {
  const res = await fetch('https://api.example.com/data');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return &lt;h1&gt;{data.title}&lt;/h1&gt;;
}</code></pre>
      <p class="mb-4">This is just the beginning! Next.js 14 offers a rich ecosystem for building modern, scalable web applications. Happy coding!</p>
    `,
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
    content: `
      <p class="mb-4">Tailwind CSS has revolutionized the way developers approach styling web applications. By providing a utility-first framework, it empowers you to build custom designs directly in your HTML without writing a single line of custom CSS.</p>
      <h2 class="text-2xl font-bold mb-3">What is Utility-First CSS?</h2>
      <p class="mb-4">Unlike traditional CSS frameworks that provide pre-built components (like buttons or cards), Tailwind CSS offers low-level utility classes that let you build completely custom designs. For example, instead of a <code>.btn-primary</code> class, you'd combine classes like <code>bg-blue-500 text-white font-bold py-2 px-4 rounded</code>.</p>
      <h2 class="text-2xl font-bold mb-3">Benefits of Tailwind CSS</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Faster Development:</strong> No need to switch between HTML and CSS files.</li>
        <li><strong>No Naming Conflicts:</strong> Utility classes are atomic, so you don't worry about global styles clashing.</li>
        <li><strong>Easier Maintenance:</strong> Changes are localized to the component.</li>
        <li><strong>Highly Customizable:</strong> You can configure Tailwind to match your design system perfectly.</li>
      </ul>
      <h2 class="text-2xl font-bold mb-3">Getting Started</h2>
      <p class="mb-4">To integrate Tailwind CSS into your Next.js project, you typically install it via npm and then configure your <code>tailwind.config.js</code> file. The official documentation provides excellent guides for various frameworks.</p>
      <p class="mb-4">Embrace the utility-first approach, and you'll find yourself building beautiful, responsive UIs with unprecedented speed!</p>
    `,
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
    content: `
      <p class="mb-4">TypeScript has become an indispensable tool for building robust and scalable web applications. As a superset of JavaScript, it adds static typing, which helps catch errors early in the development cycle and improves code maintainability.</p>
      <h2 class="text-2xl font-bold mb-3">Why Use TypeScript?</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Early Error Detection:</strong> Catches type-related bugs during development, not at runtime.</li>
        <li><strong>Improved Readability:</strong> Types make code easier to understand and reason about.</li>
        <li><strong>Better Tooling:</strong> Enhanced autocompletion, refactoring, and navigation in IDEs.</li>
        <li><strong>Scalability:</strong> Essential for large codebases and teams.</li>
      </ul>
      <h2 class="text-2xl font-bold mb-3">Key Features</h2>
      <p class="mb-4">TypeScript introduces several powerful features:</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Static Types:</strong> Define types for variables, function parameters, and return values.</li>
        <li><strong>Interfaces:</strong> Define contracts for objects.</li>
        <li><strong>Generics:</strong> Write reusable code that works with various types.</li>
        <li><strong>Enums:</strong> Define a set of named constants.</li>
      </ul>
      <h2 class="text-2xl font-bold mb-3">Getting Started with TypeScript</h2>
      <p class="mb-4">Most modern frameworks like Next.js and React have excellent TypeScript support. You can gradually introduce TypeScript into an existing JavaScript project or start a new one with TypeScript enabled by default.</p>
      <p class="mb-4">Investing time in learning TypeScript pays off significantly in the long run, leading to more stable and maintainable applications.</p>
    `,
  },
];

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The article you are looking for does not exist.
        </p>
        <Link href="/">
          <Button>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div className="flex items-center space-x-3 mb-6">
        <Avatar className="h-8 w-8">
          <AvatarImage src={article.authorAvatarUrl} alt={article.authorName} />
          <AvatarFallback>{article.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{article.authorName}</p>
          <p className="text-xs text-muted-foreground">
            {article.publishDate} • {article.readingTime} read
          </p>
        </div>
      </div>

      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}

      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}