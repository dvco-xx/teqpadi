import { Suspense } from "react"
import { PriceChecker } from "@/components/prices/price-checker"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Device Prices | Teqpadi",
  description: "Check current market prices for phones, laptops, and gaming consoles. Get accurate pricing for any condition.",
}

function PriceCheckerSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-xl" />
        ))}
      </div>
      <Skeleton className="h-12 w-full rounded-xl" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-xl" />
        ))}
      </div>
    </div>
  )
}

export default function PricesPage() {
  return (
    <main className="min-h-screen pt-20 md:pt-24 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Device Price Checker
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Find out what your device is worth. Get accurate pricing based on model, storage, and condition.
          </p>
        </div>

        {/* Price Checker */}
        <Suspense fallback={<PriceCheckerSkeleton />}>
          <PriceChecker />
        </Suspense>
      </div>
    </main>
  )
}
