import React from 'react'
import { redirect } from 'next/navigation'

const page = async ({ params }: { params: { id: string } }) => {
  const resolvedParams = await params // Await the params object
  const id = resolvedParams.id || '' // Access `type` safely
  if (!id) {
    redirect('/')
  }
  return <div>page</div>
}

export default page
