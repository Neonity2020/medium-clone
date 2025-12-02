"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">Medium Clone</span>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Sign Up
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
            <PenSquare className="h-4 w-4" />
            <span>Write</span>
          </Button>
        </div>
      </div>
    </header>
  );
}