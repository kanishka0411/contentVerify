import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Image, Video, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Content Dashboard</h1>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span>5 Verified</span>
          </div>
          <div className="flex items-center gap-2 text-yellow-600">
            <Clock className="h-5 w-5" />
            <span>2 Pending</span>
          </div>
          <div className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            <span>1 Issue</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Content</TabsTrigger>
          <TabsTrigger value="text">Text</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <ContentCard
            icon={<FileText className="h-5 w-5" />}
            title="Article: AI in Healthcare"
            status="verified"
            date="2024-03-20"
            type="Text"
          />
          <ContentCard
            icon={<Image className="h-5 w-5" />}
            title="Product Photography Set"
            status="pending"
            date="2024-03-19"
            type="Image"
          />
          <ContentCard
            icon={<Video className="h-5 w-5" />}
            title="Tutorial: Web Development"
            status="issue"
            date="2024-03-18"
            type="Video"
          />
        </TabsContent>

        <TabsContent value="text" className="space-y-4">
          <ContentCard
            icon={<FileText className="h-5 w-5" />}
            title="Article: AI in Healthcare"
            status="verified"
            date="2024-03-20"
            type="Text"
          />
        </TabsContent>

        <TabsContent value="images" className="space-y-4">
          <ContentCard
            icon={<Image className="h-5 w-5" />}
            title="Product Photography Set"
            status="pending"
            date="2024-03-19"
            type="Image"
          />
        </TabsContent>

        <TabsContent value="videos" className="space-y-4">
          <ContentCard
            icon={<Video className="h-5 w-5" />}
            title="Tutorial: Web Development"
            status="issue"
            date="2024-03-18"
            type="Video"
          />
        </TabsContent>
      </Tabs>
    </main>
  )
}

function ContentCard({
  icon,
  title,
  status,
  date,
  type
}: {
  icon: React.ReactNode
  title: string
  status: 'verified' | 'pending' | 'issue'
  date: string
  type: string
}) {
  const statusColors = {
    verified: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    issue: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  }

  const statusText = {
    verified: 'Verified',
    pending: 'Pending',
    issue: 'Issue Detected'
  }

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-muted rounded">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{type} • {date}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${statusColors[status]}`}>
          {statusText[status]}
        </span>
      </div>
    </Card>
  )
}