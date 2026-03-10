import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Imprint | ProFlowLabs AI',
  robots: { index: false, follow: true },
}

export default function ImprintPage() {
  return (
    <div className="space-y-4">
      <h1>Imprint</h1>
      <p>Last updated: August 24, 2025</p>

      <p>This website and the ProFlowLabs AI platform are operated by:</p>

      <p>
        <strong>HR Online Consulting LLC (doing business as ProFlowLabs AI)</strong>
        <br />
        Incorporated under the laws of the Catawba Indian Nation of the Carolinas,
        <br />
        Catawba Digital Economic Zone, USA
        <br />
        <strong>Registered Office:</strong> 550 Kings Mountain, Kings Mountain, NC 28086
        <br />
        <strong>Authorized Representative:</strong> Henrik Rühe, Managing Member
        <br />
        <strong>Tax Identification Number (EIN):</strong> 61-2199060
      </p>

      <p>
        <strong>Contact Information:</strong>
        <br />
        Email:{' '}
        <a href="mailto:legal@proflowlabsai.com" className="underline">
          legal@proflowlabsai.com
        </a>
        <br />
        Website:{' '}
        <Link href="https://proflowlabsai.com" className="underline">
          https://proflowlabsai.com
        </Link>
      </p>

      <h2>Responsibility for Content</h2>
      <p>
        In accordance with applicable law, the operator of this platform is responsible for its own content. We are not obliged to monitor transmitted third-party information or investigate illegal activity unless we have knowledge of a specific infringement. Upon notification, we will remove infringing content immediately.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content and works created by the site operator are subject to international copyright law. Any duplication, processing, or commercialization requires prior written consent.
      </p>

      <h2>Dispute Resolution</h2>
      <p>
        We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.
      </p>
    </div>
  )
}
