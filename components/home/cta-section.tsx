import Link from "next/link"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-32 md:py-48 bg-gradient-to-br from-black via-black to-primary/10 overflow-hidden">
      {/* Decorative gradient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground leading-tight mb-6">
            Your Device Deserves
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary">
              Expert Care
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Stop settling for mediocre repairs. Get a free, no-obligation quote from our certified technicians in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 text-base gap-2 bg-gradient-to-r from-primary to-orange-500 hover:from-primary hover:to-orange-600 shadow-xl hover:shadow-2xl transition-all"
            >
              <Link href="/repair">
                <MessageCircle className="w-5 h-5" />
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base gap-2 border-foreground/20 hover:border-primary/50 hover:bg-primary/5"
            >
              <a href="tel:+234805328 3754" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Info text */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
            <div>
              <div className="font-semibold text-foreground mb-1">Available</div>
              Mon-Sat, 8am-6pm WAT
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">Free Pickup</div>
              Same day service in Lagos
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">90-Day Warranty</div>
              On all repairs
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
