import { Suspense } from "react"
import { RepairEstimator } from "@/components/repair/repair-estimator"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Repair Services | Teqpadi",
  description: "Get instant repair cost estimates for your devices. Screen replacements, battery changes, and more.",
}

function RepairEstimatorSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-xl" />
        ))}
      </div>
      <Skeleton className="h-12 w-full rounded-xl" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-xl" />
        ))}
      </div>
    </div>
  )
}

export default function RepairPage() {
  return (
    <main className="min-h-screen pt-20 md:pt-24 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Repair Cost Estimator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get instant repair quotes for your devices. Select your device and the issue to see estimated costs.
          </p>
        </div>

        {/* Repair Estimator */}
        <Suspense fallback={<RepairEstimatorSkeleton />}>
          <RepairEstimator />
        </Suspense>
      </div>
    </main>
  )
}
