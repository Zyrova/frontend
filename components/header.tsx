"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-12">

        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Zyrova" width={32} height={32} className="mr-2" />
          <Link
            href="/"
            className="text-lg font-bold tracking-tight transition-opacity hover:opacity-70 font-dm-serif"
          >
            Zyrova
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link
            href="/#features"
            className="transition-colors hover:text-foreground"
          >
            Features
          </Link>

          <Link
            href="/#pricing"
            className="transition-colors hover:text-foreground"
          >
            Pricing
          </Link>

          <Link
            href="/#coming-soon"
            className="transition-colors hover:text-foreground"
          >
            Coming Soon
          </Link>

          <Link
            href="/#newsletter"
            className="transition-colors hover:text-foreground"
          >
            Newsletter
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* <ThemeToggle /> */}

          <Button size="sm" asChild>
            <Link href="#newsletter">
              Get Started
            </Link>
          </Button>

        </div>
      </div>
    </header>
  );
}