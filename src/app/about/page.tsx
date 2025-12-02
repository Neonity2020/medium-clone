import React from 'react';

export default function AboutPage() {
  return (
    <div className="container py-10 max-w-3xl mx-auto"> {/* Removed px-4 sm:px-6 lg:px-8 */}
      <h1 className="text-4xl font-bold mb-6">About Medium Clone</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Welcome to Medium Clone, a platform dedicated to sharing stories, ideas, and knowledge.
        Our goal is to provide a simple yet powerful space for writers to express themselves
        and for readers to discover engaging content on a wide range of topics.
      </p>
      <p className="text-lg text-muted-foreground mb-4">
        This project is built using Next.js, TypeScript, and Tailwind CSS, leveraging Shadcn/UI
        components for a modern and responsive user interface. It serves as a demonstration
        of building a content-rich application with a focus on user experience and developer
        efficiency.
      </p>
      <p className="text-lg text-muted-foreground">
        We believe in the power of words to connect, inspire, and educate. Join our community
        of writers and readers today!
      </p>
    </div>
  );
}