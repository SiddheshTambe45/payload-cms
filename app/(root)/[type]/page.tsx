import React from 'react'
import { redirect } from 'next/navigation'

const page = async ({ params }: { params: { type: string } }) => {
  const type = params.type || '' // Access `type` from `params`

  if (!type) {
    redirect('/')
  }

  return <div>{type}</div>
}

export default page
