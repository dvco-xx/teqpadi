import Link from "next/link"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Ready to Get Your Device Fixed?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto text-pretty">
            {"Get a free quote in minutes. No obligation, no hidden fees. Just honest pricing and expert service."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full px-8 h-14 text-base gap-2 w-full sm:w-auto"
            >
              <Link href="/contact">
                <MessageCircle className="w-5 h-5" />
                Get a Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base gap-2 w-full sm:w-auto bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="tel:+233201234567">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60">
            Available Mon-Sat, 8am-6pm WAT
          </p>
        </div>
      </div>
    </section>
  )
}
