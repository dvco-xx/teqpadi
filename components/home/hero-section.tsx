"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Smartphone, Laptop, Gamepad2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Animated particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      r: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2,
        opacity: Math.random() * 0.5,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(13, 13, 13, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = `rgba(255, 107, 53, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Premium Tech Services</span>
          </div>

          {/* Main headline - bold and impactful */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-none mb-6">
              Tech Problems?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-orange-400 mt-2">
                We Fix Them Fast
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-6">
              Expert repairs, fair trade-ins, and transparent pricing. From screen replacements to full device overhauls—we handle it all with professional precision.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap gap-4 mb-12">
            {[
              { icon: Smartphone, label: "Phones" },
              { icon: Laptop, label: "Laptops" },
              { icon: Gamepad2, label: "Consoles" },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 text-base gap-2 bg-gradient-to-r from-primary to-orange-500 hover:from-primary hover:to-orange-600 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/repair">
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-base border-border hover:border-primary/50 hover:bg-background/80"
            >
              <Link href="/prices">
                Check Prices
              </Link>
            </Button>
          </div>

          {/* Stats - redesigned as visual boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: "5K+", label: "Repairs" },
              { value: "98%", label: "Happy Clients" },
              { value: "24h", label: "Fast Turnaround" },
              { value: "90d", label: "Warranty" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-black text-primary group-hover:text-orange-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
