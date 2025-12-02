import React from 'react';

export default function ContactPage() {
  return (
    <div className="container py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Have questions, feedback, or suggestions? We'd love to hear from you!
        Please feel free to reach out to us through the following channels:
      </p>
      <ul className="list-disc list-inside text-lg text-muted-foreground mb-6">
        <li className="mb-2">
          <strong>Email:</strong> <a href="mailto:support@mediumclone.com" className="text-primary hover:underline">support@mediumclone.com</a>
        </li>
        <li className="mb-2">
          <strong>Twitter:</strong> <a href="https://twitter.com/mediumclone" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@mediumclone</a>
        </li>
        <li className="mb-2">
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/company/mediumclone" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Medium Clone Company Page</a>
        </li>
      </ul>
      <p className="text-lg text-muted-foreground">
        We aim to respond to all inquiries within 24-48 business hours. Thank you for your patience!
      </p>
    </div>
  );
}