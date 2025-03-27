import { Button } from "@/components/ui/button"
import { Shield, FileCheck, Brain, Link as LinkIcon, Search, Bell } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Protect Your Digital Content with
            <span className="text-primary block">AI-Powered Verification</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Verify ownership, detect infringement, and manage licensing for your digital content using advanced AI and blockchain technology.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/verify">Start Verifying</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FileCheck className="h-8 w-8" />}
              title="Content Verification"
              description="Analyze text, images, and videos for originality and detect potential copyright infringement."
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="AI Detection"
              description="Identify AI-generated content and deepfakes using advanced machine learning algorithms."
            />
            <FeatureCard
              icon={<LinkIcon className="h-8 w-8" />}
              title="Blockchain Tracking"
              description="Secure ownership verification and licensing management using blockchain technology."
            />
            <FeatureCard
              icon={<Search className="h-8 w-8" />}
              title="Content Search"
              description="Find instances of your content across the web with reverse lookup capabilities."
            />
            <FeatureCard
              icon={<Bell className="h-8 w-8" />}
              title="Real-time Alerts"
              description="Get instant notifications about potential copyright infringements of your content."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Licensing Support"
              description="Receive automated suggestions for appropriate content licensing options."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">
            Ready to Protect Your Digital Content?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of creators who trust ContentVerify.AI to protect their intellectual property.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/verify">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-lg border bg-card">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}