import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your content verification needs. All plans include our core AI verification features.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <Card className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Basic</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-muted-foreground">Perfect for individual creators and small teams</p>
          </div>
          <ul className="space-y-4 mb-8">
            <PricingFeature>Up to 100 verifications/month</PricingFeature>
            <PricingFeature>Text & Image verification</PricingFeature>
            <PricingFeature>Basic AI detection</PricingFeature>
            <PricingFeature>Email support</PricingFeature>
          </ul>
          <Button className="w-full" variant="outline">Get Started</Button>
        </Card>

        {/* Pro Plan */}
        <Card className="p-8 border-primary">
          <div className="mb-8">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-4">
              Most Popular
            </div>
            <h2 className="text-2xl font-bold mb-2">Pro</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold">$79</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-muted-foreground">For professional creators and businesses</p>
          </div>
          <ul className="space-y-4 mb-8">
            <PricingFeature>Up to 500 verifications/month</PricingFeature>
            <PricingFeature>Text, Image & Video verification</PricingFeature>
            <PricingFeature>Advanced AI detection</PricingFeature>
            <PricingFeature>Priority support</PricingFeature>
            <PricingFeature>Blockchain certification</PricingFeature>
            <PricingFeature>API access</PricingFeature>
          </ul>
          <Button className="w-full">Get Started</Button>
        </Card>

        {/* Enterprise Plan */}
        <Card className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <p className="text-muted-foreground">For large organizations with custom needs</p>
          </div>
          <ul className="space-y-4 mb-8">
            <PricingFeature>Unlimited verifications</PricingFeature>
            <PricingFeature>All content types supported</PricingFeature>
            <PricingFeature>Custom AI models</PricingFeature>
            <PricingFeature>24/7 dedicated support</PricingFeature>
            <PricingFeature>Custom blockchain solutions</PricingFeature>
            <PricingFeature>SLA guarantees</PricingFeature>
          </ul>
          <Button className="w-full" variant="outline">Contact Sales</Button>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </main>
  )
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <Check className="h-4 w-4 text-primary flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}