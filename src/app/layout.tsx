import { Metadata } from 'next'
import { ClientLayout } from './client.layout'

export const metadata: Metadata = {
  title: 'CyberSec',
  description: 'CyberSec',
}

export default function RootLayout(props) {
  return (
    <>
      <ClientLayout {...props} />
    </>
  )
}
