"use client";

import Link from "next/link";
import { Store } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full rounded-t-3xl bg-[#2563EB] text-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 py-16">

        {/* Top */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 font-semibold">
              <div className="flex h-9 w-10 items-center justify-center rounded-full bg-[#2563EB] text-white">
                <img src="/logo.png" alt="Zyrova" className="h-10 w-10 rounded-xl"/>
              </div>
              <span className="text-lg">Zyrova</span>
            </div>

            <p className="text-sm text-muted-foreground max-w-xs">
              The modern platform to create, launch and scale your online store
              effortlessly.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Product</h3>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Roadmap
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Updates
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Licenses
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-border/40 pt-8">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zyrova. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              LinkedIn
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}