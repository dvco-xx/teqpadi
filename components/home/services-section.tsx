"use client"

import Link from "next/link"
import Image from "next/image"
import { Wrench, ArrowLeftRight, Tag, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Wrench,
    title: "Device Repairs",
    description: "Expert repair services for phones, laptops, and gaming consoles. We fix screens, batteries, charging ports, and more.",
    href: "/repair",
    gradient: "from-blue-600 to-blue-400",
    image: "/images/categories/phone-repair.jpg",
    featured: true,
  },
  {
    icon: ArrowLeftRight,
    title: "Trade-In Program",
    description: "Get the best value for your old devices. Instant quotes and fair prices.",
    href: "/trade-in",
    gradient: "from-emerald-600 to-emerald-400",
  },
  {
    icon: Tag,
    title: "Price Checker",
    description: "Know exactly what your device is worth in any condition.",
    href: "/prices",
    gradient: "from-amber-600 to-amber-400",
  },
  {
    icon: Truck,
    title: "Home Pickup",
    description: "We come to you. Free pickup and delivery for repairs.",
    href: "/contact",
    gradient: "from-violet-600 to-violet-400",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-black/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            Everything your device needs
          </h2>
          <p className="text-lg text-muted-foreground">
            From repairs to trade-ins. All backed by expertise and care.
          </p>
        </div>

        {/* Services Grid - Modern masonry layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Featured service - large card */}
          <Link
            href={services[0].href}
            className="md:col-span-6 group"
          >
            <Card className="h-full overflow-hidden border-0 bg-gradient-to-br from-blue-600/20 to-blue-400/10 hover:from-blue-600/30 hover:to-blue-400/20 transition-all duration-500">
              <CardContent className="p-0 h-96 md:h-full relative flex flex-col">
                {/* Background image */}
                <div className="absolute inset-0">
                  {services[0].image && (
                    <Image
                      src={services[0].image}
                      alt={services[0].title}
                      fill
                      className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-between p-8">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Wrench className="w-7 h-7 text-blue-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {services[0].title}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {services[0].description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Right column with 3 smaller cards */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.slice(1).map((service, idx) => {
              const Icon = service.icon
              return (
                <Link key={service.title} href={service.href} className="group">
                  <Card className="h-full border-0 bg-gradient-to-br opacity-90 hover:opacity-100 transition-all hover:scale-[1.02] cursor-pointer"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${
                        service.gradient.includes("emerald")
                          ? "rgb(5, 150, 105, 0.15), rgb(16, 185, 129, 0.05)"
                          : service.gradient.includes("amber")
                          ? "rgb(180, 83, 9, 0.15), rgb(217, 119, 6, 0.05)"
                          : "rgb(109, 40, 217, 0.15), rgb(139, 92, 246, 0.05)"
                      })`,
                    }}
                  >
                    <CardContent className="p-6 sm:p-8 flex flex-col h-64">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
