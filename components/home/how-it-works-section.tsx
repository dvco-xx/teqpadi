"use client"

import { MessageSquare, Search, Wrench, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Select Your Device",
    description: "Choose your device type and model from our extensive database. Get instant pricing information.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Describe the Issue",
    description: "Tell us what's wrong or what service you need. Our system provides accurate cost estimates.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "We Fix It",
    description: "Drop off your device or schedule a pickup. Our certified technicians handle the rest.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Get It Back",
    description: "Receive your repaired device with a 90-day warranty. Pay only when you're satisfied.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Getting your device fixed has never been easier. Four simple steps to a working device.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Connector line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-border" />
                  )}
                  
                  <div className="relative z-10">
                    {/* Number badge */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    {/* Step number */}
                    <div className="text-sm font-mono text-primary mb-2">{step.number}</div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
