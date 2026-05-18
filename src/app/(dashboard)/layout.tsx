import { Navbar } from "@/components/organisms/navbar"
import { Sidebar } from "@/components/organisms/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="flex-1 pt-16 lg:pl-64 min-h-screen transition-all duration-300">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </>
  )
}
