import { Navbar } from "@/components/organisms/navbar"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 min-h-screen flex items-center justify-center">
        {children}
      </main>
    </>
  )
}
