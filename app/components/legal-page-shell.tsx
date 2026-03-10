import { ReactNode } from 'react'

type LegalPageShellProps = {
  children: ReactNode
}

export default function LegalPageShell({ children }: LegalPageShellProps) {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-12 text-[var(--foreground)] md:px-10">
      <div className="legal-page">{children}</div>
    </main>
  )
}
