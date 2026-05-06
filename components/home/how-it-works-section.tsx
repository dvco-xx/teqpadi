"use client"

import { MessageSquare, Search, Wrench, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Select Your Device",
    description: "Choose your device type and model. Get instant pricing.",
    color: "from-blue-600 to-blue-400",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Describe the Issue",
    description: "Tell us what's wrong. We provide accurate estimates.",
    color: "from-cyan-600 to-cyan-400",
  },
  {
    number: "03",
    icon: Wrench,
    title: "We Handle It",
    description: "Our technicians get to work immediately.",
    color: "from-violet-600 to-violet-400",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Get It Back",
    description: "Receive your device with 90-day warranty.",
    color: "from-emerald-600 to-emerald-400",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-black/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            Simple, Fast Process
          </h2>
          <p className="text-lg text-muted-foreground">
            Four steps. That's all it takes to get your device fixed.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600" style={{ maskImage: "linear-gradient(to right, black 0%, transparent 100%)" }} />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="flex flex-col h-full">
                  {/* Step number badge with gradient */}
                  <div className="relative mb-6 group">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-lg transition-opacity`} />
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-xs font-mono text-primary/60 mb-2">{step.number}</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector - mobile only */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="w-5 h-5 text-primary/40 rotate-90" />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-orange-500/10 border border-primary/20 text-center">
          <p className="text-lg font-semibold text-foreground mb-2">
            Ready to get started?
          </p>
          <p className="text-muted-foreground">
            Most repairs completed within 24 hours. Free pickup available in Lagos.
          </p>
        </div>
      </div>
    </section>
  )
}
