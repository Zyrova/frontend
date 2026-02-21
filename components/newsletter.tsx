"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="w-full py-32 bg-white text-black rounded-t-3xl">
      <div className="mx-auto max-w-5xl px-6 sm:px-12">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Mail className="h-7 w-7" />
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-dm-serif">
            Stay in the loop
          </h2>

          <p className="mt-4 text-black/80 text-lg">
            Get product updates, early access to new features and growth tips
            delivered straight to your inbox.
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto max-w-xl rounded-3xl border border-black/15 bg-white/5 p-6 sm:p-8">
          <form className="flex flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-black/20 text-black placeholder:text-black/60 focus-visible:ring-black/30"
            />
            <Button
              size="lg"
              className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90"
            >
              Subscribe
            </Button>
          </form>

          <p className="mt-4 text-xs text-black/60 text-center sm:text-left">
            No spam. Unsubscribe anytime.
          </p>
        </div>

      </div>
    </section>
  );
}