"use client";

import { Store, Rocket, ShieldCheck } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full py-24 bg-[#2563EB] rounded-t-3xl text-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-12">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to sell online
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            Powerful tools designed to help you launch, grow and scale your
            online store effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-4xl gap-12 sm:grid-cols-2 lg:grid-cols-3">

          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Store className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold">
              Easy Store Builder
            </h3>
            <p className="text-sm text-white/80 max-w-xs">
              Create your online store in minutes with a simple and intuitive
              setup process designed for entrepreneurs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold">
              Fast Performance
            </h3>
            <p className="text-sm text-white/80 max-w-xs">
              Optimized infrastructure ensures your store loads instantly and
              delivers a seamless experience to customers.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold">
              Secure Payments
            </h3>
            <p className="text-sm text-white/80 max-w-xs">
              Built-in secure payment integrations to protect transactions and
              build trust with your customers.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}