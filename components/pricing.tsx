"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="relative w-full py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 h-64 w-64 bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-20 left-1/3 h-48 w-48 bg-secondary/5 blur-[80px] rounded-full" />
      </div>
      
      <div className="relative mx-auto max-w-5xl px-6 sm:px-12">

        {/* Heading */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-muted-foreground bg-muted/50 rounded-full backdrop-blur-sm border border-border/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Pricing plans
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
            <span style={{ fontFamily: 'var(--font-dm-serif-text)' }} className="italic text-[#2563EB]">Simple,</span> transparent pricing
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Choose the perfect plan for your business. Upgrade anytime as you grow.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">

          {/* FREE */}
          <div className="group relative flex flex-col rounded-3xl border border-border/50 bg-gradient-to-br from-background to-muted/20 p-8 transition-all duration-300 hover:border-primary/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5">

            {/* Decorative corner */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-border/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black">Free</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#2563EB]" style={{ fontFamily: 'var(--font-dm-sans)' }}>0€</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Perfect to get started
              </p>
            </div>

            <div className="flex-1 space-y-4 border-t border-border/30 pt-6">
              {[
                "Basic store setup",
                "Limited products",
                "Community support",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-muted-foreground group/item">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted/50 group-hover/item:bg-primary/10 transition-colors duration-200">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors duration-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="outline" className="w-full transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:text-primary" asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>

          </div>

          {/* BASIC - Highlighted */}
          <div className="relative flex flex-col rounded-3xl border-2 border-primary bg-gradient-to-br from-primary/5 to-background p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">

            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full shadow-lg">
              Most Popular
            </div>
            
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-20 h-20 border-t border-r border-primary/20 rounded-tr-2xl" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-primary/20 rounded-bl-2xl" />

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black">Basic</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-[#2563EB]" style={{ fontFamily: 'var(--font-dm-sans)' }}>9,99€</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                For growing businesses
              </p>
            </div>

            <div className="flex-1 space-y-4 border-t border-primary/20 pt-6">
              {[
                "Unlimited products",
                "Custom domain",
                "Email support",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm group/item">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-all duration-200 group-hover/item:scale-110">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-medium group-hover/item:text-primary transition-colors duration-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="w-full transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-primary/25" size="lg" asChild>
                <Link href="/get-started">Choose Basic</Link>
              </Button>
            </div>

          </div>

          {/* BUSINESS */}
          <div className="group relative flex flex-col rounded-3xl border border-border/50 bg-gradient-to-br from-background to-muted/20 p-8 transition-all duration-300 hover:border-primary/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5">

            {/* Decorative corner */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-border/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black">Business</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#2563EB]" style={{ fontFamily: 'var(--font-dm-sans)' }}>14,99€</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Advanced features and scaling
              </p>
            </div>

            <div className="flex-1 space-y-4 border-t border-border/30 pt-6">
              {[
                "Advanced analytics",
                "Priority support",
                "Full customization",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-muted-foreground group/item">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted/50 group-hover/item:bg-primary/10 transition-colors duration-200">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors duration-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="outline" className="w-full transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:text-primary" asChild>
                <Link href="/get-started">Choose Business</Link>
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}