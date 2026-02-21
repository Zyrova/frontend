"use client";

import { Store, Rocket, ShieldCheck, BarChart3 } from "lucide-react";

export default function Features() {
  return (
    <section className="relative w-full py-32 bg-[#2563EB] rounded-t-3xl text-white overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-72 w-72 bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute top-40 right-10 h-48 w-48 bg-blue-400/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-20 left-10 h-56 w-56 bg-purple-400/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-12">

        {/* Heading */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-white/70 bg-white/10 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Everything you need
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight" >
            <span style={{ fontFamily: 'var(--font-dm-serif-text)' }}>Everything</span> you need to grow
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">
            Zyrova gives you the tools, speed, and reliability to build and scale
            your online business without limits.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid max-w-4xl mx-auto gap-6 md:grid-cols-3 md:grid-rows-3">

          {/* Large main card */}
          <div className="group relative md:col-span-2 md:row-span-2 rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-8 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10">

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Decorative corner elements */}
            <div className="absolute top-4 right-4 w-20 h-20 border-t border-r border-white/10 rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-white/10 rounded-bl-2xl" />
            
            <div className="relative flex flex-col justify-between h-full">

              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/15 to-white/5 group-hover:from-white/25 group-hover:to-white/10 transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <Store className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12 text-white/90" />
                </div>

                <h3 className="text-2xl font-semibold mb-3 leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Powerful Store Builder
                </h3>

                <p className="text-white/80 max-w-md leading-relaxed">
                  Build, customize, and launch your store in minutes with a modern,
                  intuitive interface designed for maximum flexibility.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-lg shadow-green-400/50" />
                  <span className="font-medium">No code required</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
                  <span className="font-medium">Instant deployment</span>
                </div>
              </div>

            </div>

          </div>

          {/* Top right */}
          <div className="group rounded-3xl border border-white/15 bg-gradient-to-br from-white/5 to-white/10 p-6 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/5">

            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/15 to-white/5 group-hover:from-white/25 group-hover:to-white/10 transition-all duration-300 group-hover:scale-110 shadow-md">
                <Rocket className="h-6 w-6 transition-transform duration-300 group-hover:rotate-45 text-white/90" />
              </div>

              <h3 className="font-semibold mb-2 leading-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Lightning Fast
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                Optimized globally for instant load times and smooth user experience.
              </p>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                <span className="text-xs text-white/50 font-medium">⚡ 99.9% Uptime</span>
                <div className="flex-1 h-px bg-gradient-to-l from-white/20 to-transparent" />
              </div>
            </div>

          </div>

          {/* Middle right */}
          <div className="group rounded-3xl border border-white/15 bg-gradient-to-br from-white/5 to-white/10 p-6 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/5">

            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-gradient-to-tl from-white/20 to-transparent" />
            </div>
            
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/15 to-white/5 group-hover:from-white/25 group-hover:to-white/10 transition-all duration-300 group-hover:scale-110 shadow-md">
                <ShieldCheck className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12 text-white/90" />
              </div>

              <h3 className="font-semibold mb-2 leading-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Secure by default
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                Enterprise-grade security and protected transactions built-in.
              </p>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                <span className="text-xs text-white/50 font-medium">🔒 SOC2 Compliant</span>
                <div className="flex-1 h-px bg-gradient-to-l from-white/20 to-transparent" />
              </div>
            </div>

          </div>

          {/* Bottom wide */}
          <div className="group md:col-span-3 rounded-3xl border border-white/15 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-6 transition-all duration-300 hover:bg-white/15 hover:scale-[1.01] hover:shadow-xl hover:shadow-white/5">

            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center gap-6">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/15 to-white/5 group-hover:from-white/25 group-hover:to-white/10 transition-all duration-300 group-hover:scale-110 shadow-md">
                <BarChart3 className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6 text-white/90" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold leading-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  Advanced analytics
                </h3>
                <p className="text-sm text-white/70 mt-1 leading-relaxed">
                  Track performance, monitor growth, and make smarter business decisions.
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-3">
                <div className="px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm border border-white/10 text-xs text-white/70 font-medium">
                  <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse" />
                  Real-time
                </div>
                <div className="px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm border border-white/10 text-xs text-white/70 font-medium">
                  <span className="inline-block w-1.5 h-1.5 bg-purple-400 rounded-full mr-1.5" />
                  AI-powered
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}