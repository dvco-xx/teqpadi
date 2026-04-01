"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: string
  name: string
  content: string
  rating: number
}

// Fallback testimonials in case API fails
const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Adebayo Okonkwo",
    content: "Teqpadi fixed my iPhone screen in just 2 hours! The quality is amazing and prices are fair. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    name: "Chidinma Eze",
    content: "I traded in my old Samsung and got a great deal on a new iPhone. The process was smooth and the staff were very helpful.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emmanuel Nwosu",
    content: "Best tech repair shop in Ghana! They diagnosed my laptop issue quickly and the repair was perfect. Will definitely come back.",
    rating: 5,
  },
  {
    id: "4",
    name: "Fatima Mensah",
    content: "The trade-in calculator on their website helped me understand exactly what my device was worth. No surprises, great service!",
    rating: 4,
  },
]

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials)

  useEffect(() => {
    fetch("/api/testimonials?featured=true")
      .then((res) => res.json())
      .then((data) => {
        if (data.testimonials && data.testimonials.length > 0) {
          setTestimonials(data.testimonials)
        }
      })
      .catch(() => {
        // Use fallback testimonials on error
      })
  }, [])

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Don't just take our word for it. Here's what people are saying about Teqpadi."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(0, 4).map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {`"${testimonial.content}"`}
                </p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                
                {/* Name */}
                <div className="font-medium text-foreground">
                  {testimonial.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
