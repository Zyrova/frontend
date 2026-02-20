"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="w-full py-32 bg-[#2563EB] text-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-12">

        <div className="mx-auto max-w-2xl text-center">

          {/* Icon */}
        

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            More features coming soon
          </h2>

          {/* Description */}
          <p className="mt-4 text-muted-foreground sm:text-lg">
            We're constantly improving Zyrova. New powerful tools, integrations,
            and features are on the way to help you grow faster.
          </p>

          

          {/* CTA */}
          <div className="mt-10">
            <Button size="lg" asChild variant="outline">
              <Link href="/get-started">
                Get early access
              </Link>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}