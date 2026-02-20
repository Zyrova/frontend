"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-12">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. Upgrade anytime as you grow.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* Free */}
          <div className="flex flex-col items-center text-center space-y-6 rounded-2xl border border-border/50 p-8">

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Free</h3>
              <p className="text-3xl font-bold">0€</p>
              <p className="text-sm text-muted-foreground">
                Perfect to get started
              </p>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Basic store setup</li>
              <li>Limited products</li>
              <li>Community support</li>
            </ul>

            <Button variant="outline" className="w-full" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>

          </div>

          {/* Basic */}
          <div className="flex flex-col items-center text-center space-y-6 rounded-2xl border border-primary p-8">

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Basic</h3>
              <p className="text-3xl font-bold">9,99€</p>
              <p className="text-sm text-muted-foreground">
                For growing businesses
              </p>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Unlimited products</li>
              <li>Custom domain</li>
              <li>Email support</li>
            </ul>

            <Button className="w-full" asChild>
              <Link href="/get-started">Choose Basic</Link>
            </Button>

          </div>

          {/* Business */}
          <div className="flex flex-col items-center text-center space-y-6 rounded-2xl border border-border/50 p-8">

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Business</h3>
              <p className="text-3xl font-bold">14,99€</p>
              <p className="text-sm text-muted-foreground">
                Advanced features and scaling
              </p>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>Full customization</li>
            </ul>

            <Button variant="outline" className="w-full" asChild>
              <Link href="/get-started">Choose Business</Link>
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}