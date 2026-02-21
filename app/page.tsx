import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/header";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import ComingSoon from "@/components/cooming-soon";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative bg-background font-sans overflow-hidden">

      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[15%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Header */}
      <Header />

      {/* HERO SECTION */}
      <section className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-5xl px-6 py-32 text-center sm:px-12">

          <div className="space-y-6">

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl font-dm-serif">
              Good start to a{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                good idea
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
              Start selling online in an instant with Zyrova, an online store creation
              platform for small and medium-sized businesses. Discover how we can help
              you set up your online store and attract customers.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Button
                variant="default"
                size="lg"
                className="px-8 transition-all duration-200 hover:scale-[1.03]"
                asChild
              >
                <Link href="/get-started">
                  Get Started
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 transition-all duration-200 hover:scale-[1.03]"
                asChild
              >
                <Link href="/learn-more">
                  Learn More
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="border-t border-border/40">
        <Features />
      </section>

      {/* PRICING SECTION */}
      <section className="border-t border-border/40">
        <Pricing />
      </section>

      {/* COMING SOON SECTION */}
      <section className="border-t border-border/40">
        <ComingSoon />
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-border/40">
        <Newsletter />
      </section>

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>

    </div>
  );
}