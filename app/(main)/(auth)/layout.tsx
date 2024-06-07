export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col items-center justify-center p-4">   
      {children}
    </section>
  )
}