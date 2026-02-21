"use client";

import { Store, Rocket, ShieldCheck, BarChart3 } from "lucide-react";

export default function Features() {
  return (
    <section className="relative w-full py-32 bg-[#2563EB] rounded-t-3xl text-white overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-72 w-72 bg-white/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-12">

        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" >
            <span style={{ fontFamily: 'var(--font-dm-serif-text)' }}>Everything</span> you need to grow
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/80 text-lg">
            Zyrova gives you the tools, speed, and reliability to build and scale
            your online business without limits.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid max-w-4xl mx-auto gap-6 md:grid-cols-3 md:grid-rows-3">

          {/* Large main card */}
          <div className="group relative md:col-span-2 md:row-span-2 rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-8 transition-all duration-300 hover:bg-white/15">

            <div className="flex flex-col justify-between h-full">

              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 group-hover:bg-white/20 transition">
                  <Store className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  Powerful Store Builder
                </h3>

                <p className="text-white/80 max-w-md leading-relaxed">
                  Build, customize, and launch your store in minutes with a modern,
                  intuitive interface designed for maximum flexibility.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
                <span>No code required</span>
                <span>•</span>
                <span>Instant deployment</span>
              </div>

            </div>

          </div>

          {/* Top right */}
          <div className="group rounded-3xl border border-white/15 bg-white/5 p-6 transition-all duration-300 hover:bg-white/15">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition">
              <Rocket className="h-6 w-6" />
            </div>

            <h3 className="font-semibold mb-2">
              Lightning Fast
            </h3>

            <p className="text-sm text-white/70 leading-relaxed">
              Optimized globally for instant load times and smooth user experience.
            </p>

          </div>

          {/* Middle right */}
          <div className="group rounded-3xl border border-white/15 bg-white/5 p-6 transition-all duration-300 hover:bg-white/15">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <h3 className="font-semibold mb-2">
              Secure by default
            </h3>

            <p className="text-sm text-white/70 leading-relaxed">
              Enterprise-grade security and protected transactions built-in.
            </p>

          </div>

          {/* Bottom wide */}
          <div className="group md:col-span-3 rounded-3xl border border-white/15 bg-gradient-to-r from-white/5 to-white/10 p-6 transition-all duration-300 hover:bg-white/15">

            <div className="flex items-center gap-6">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition">
                <BarChart3 className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Advanced analytics
                </h3>
                <p className="text-sm text-white/70">
                  Track performance, monitor growth, and make smarter business decisions.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}