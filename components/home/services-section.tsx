"use client"

import Link from "next/link"
import { Wrench, ArrowLeftRight, Tag, Truck, Shield, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Wrench,
    title: "Device Repairs",
    description: "Expert repair services for phones, laptops, and gaming consoles. We fix screens, batteries, charging ports, and more.",
    href: "/repair",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: ArrowLeftRight,
    title: "Trade-In Program",
    description: "Get the best value for your old devices. Instant quotes and fair prices for phones, laptops, and consoles.",
    href: "/trade-in",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Tag,
    title: "Price Checker",
    description: "Know exactly what your device is worth. Check current market prices for any condition.",
    href: "/prices",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Truck,
    title: "Home Pickup",
    description: "Too busy to visit? We come to you. Free pickup and delivery for repairs and trade-ins in Accra.",
    href: "/contact",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
]

const features = [
  {
    icon: Shield,
    title: "90-Day Warranty",
    description: "All repairs backed by warranty",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most repairs done same day",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Everything Your Device Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From quick repairs to trade-ins, we offer comprehensive tech services with transparency and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.title} href={service.href} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 group-hover:scale-[1.02]">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${service.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {service.title}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Features Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-border">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{feature.title}</div>
                  <div className="text-sm text-muted-foreground">{feature.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
