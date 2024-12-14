import React from 'react'
import { redirect } from 'next/navigation'

const page = async ({ params }: { params: { type: string } }) => {
  const resolvedParams = await params // Await the params object
  const type = resolvedParams.type || '' // Access `type` safely
  if (!type) {
    redirect('/')
  }

  return <div>{type}</div>
}

export default page
