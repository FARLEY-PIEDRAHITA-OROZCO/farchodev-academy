import { Navbar } from "@/components/organisms/navbar"
import { Footer } from "@/components/organisms/footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </>
  )
}
