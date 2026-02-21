"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, Rocket, ShieldCheck, Zap } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="relative w-full py-32 bg-[#2563EB] text-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-12">

        {/* Heading */}
        <div className="mb-20 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles className="h-7 w-7" />
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-dm-serif">
            More features <span style={{ fontFamily: 'var(--font-dm-serif-text)' }} className="italic">coming soon</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-white/80 text-lg">
            We're constantly improving Zyrova. New powerful tools and
            integrations are on the way to help you grow faster.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">

          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 transition hover:bg-white/10">
            <Rocket className="h-6 w-6 mb-4" />
            <h3 className="font-semibold mb-2">
              Advanced automation
            </h3>
            <p className="text-sm text-white/80">
              Smarter workflows designed to save time and increase efficiency.
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 transition hover:bg-white/10">
            <Zap className="h-6 w-6 mb-4" />
            <h3 className="font-semibold mb-2">
              AI integrations
            </h3>
            <p className="text-sm text-white/80">
              Intelligent tools to enhance decision-making and performance.
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 transition hover:bg-white/10">
            <ShieldCheck className="h-6 w-6 mb-4" />
            <h3 className="font-semibold mb-2">
              Enhanced security
            </h3>
            <p className="text-sm text-white/80">
              More advanced protection and enterprise-grade reliability.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
            asChild
          >
            <Link href="/get-started">
              Get early access
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}