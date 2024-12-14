import React from 'react'
import { redirect } from 'next/navigation'
import Dropdown from './blogdropdown'

const Page = async ({ params }: { params: { type: string } }) => {
  const resolvedParams = await params // Await the params object
  const type = resolvedParams.type || '' // Access `type` safely
  if (!type) {
    redirect('/')
  }
  // Render Dropdown with the type parameter
  return (
    <div className="p-6">
      <Dropdown params={{ type }} />
    </div>
  )
}

export default Page
