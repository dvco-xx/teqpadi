"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Smartphone, Laptop, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      container.style.setProperty("--mouse-x", `${x}px`)
      container.style.setProperty("--mouse-y", `${y}px`)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />
      
      {/* Floating device icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] animate-float-slow">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute top-1/3 right-[15%] animate-float-medium">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
            <Laptop className="w-7 h-7 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-[20%] animate-float-fast">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
            <Gamepad2 className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up text-balance">
            Your Devices.{" "}
            <span className="text-primary">Our Expertise.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-100 text-pretty">
            Expert repairs, fair trade-ins, and transparent pricing. We bring premium tech services right to your doorstep across Ghana.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 text-base gap-2 w-full sm:w-auto"
            >
              <Link href="/repair">
                Get a Repair Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-base w-full sm:w-auto"
            >
              <Link href="/prices">
                Check Device Prices
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-16 border-t border-border animate-fade-in-up animation-delay-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">5K+</div>
                <div className="text-sm text-muted-foreground">Devices Repaired</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Average Repair Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">90 Days</div>
                <div className="text-sm text-muted-foreground">Repair Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}
