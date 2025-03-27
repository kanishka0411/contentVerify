import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload } from "lucide-react"

export default function VerifyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Verify Your Content</h1>
        <Card className="p-6">
          <div className="text-center py-12 border-2 border-dashed rounded-lg">
            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Upload Content for Verification</h2>
            <p className="text-muted-foreground mb-4">
              Drag and drop your files here, or click to select files
            </p>
            <Button>
              Select Files
            </Button>
          </div>
        </Card>
      </div>
    </main>
  )
}