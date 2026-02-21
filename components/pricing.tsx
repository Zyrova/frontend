"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="w-full py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-12">

        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-dm-serif">
            <span style={{ fontFamily: 'var(--font-dm-serif-text)' }} className="italic">Simple</span>, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your business. Upgrade anytime as you grow.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">

          {/* FREE */}
          <div className="flex flex-col rounded-3xl border border-border/50 p-8 transition-all duration-300 hover:border-foreground/30">

            <div className="mb-8">
              <h3 className="text-lg font-semibold">Free</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold">0€</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Perfect to get started
              </p>
            </div>

            <div className="flex-1 space-y-4 border-t border-border/50 pt-6">
              {[
                "Basic store setup",
                "Limited products",
                "Community support",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>

          </div>

          {/* BASIC - Highlighted */}
          <div className="relative flex flex-col rounded-3xl border-2 border-primary p-8 transition-all duration-300">

            {/* Badge */}
            

            <div className="mb-8">
              <h3 className="text-lg font-semibold">Basic</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold">9,99€</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                For growing businesses
              </p>
            </div>

            <div className="flex-1 space-y-4 border-t border-border/50 pt-6">
              {[
                "Unlimited products",
                "Custom domain",
                "Email support",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="w-full" size="lg" asChild>
                <Link href="/get-started">Choose Basic</Link>
              </Button>
            </div>

          </div>

          {/* BUSINESS */}
          <div className="flex flex-col rounded-3xl border border-border/50 p-8 transition-all duration-300 hover:border-foreground/30">

            <div className="mb-8">
              <h3 className="text-lg font-semibold">Business</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold">14,99€</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Advanced features and scaling
              </p>
            </div>

            <div className="flex-1 space-y-4 border-t border-border/50 pt-6">
              {[
                "Advanced analytics",
                "Priority support",
                "Full customization",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/get-started">Choose Business</Link>
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}