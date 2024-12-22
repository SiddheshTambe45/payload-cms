import React from 'react'
import { redirect } from 'next/navigation'
import Bloglist from './bloglist'
import Image from 'next/image'
import Link from 'next/link'
import { SubTypeHeading, TypeHeading } from './TypeHeading'
import UpcomingNavBar from '../../../components/upcomingNav'
import CategoryHeroSection from './CategoryHeroSection'

const Page = async ({ params }: { params: { type: string } }) => {

  const leftImageTitle = 'Nintendo Museum – A Journey Through Time '
  const rightImageTitle = 'Exploring the Legacy of Nintendo'

  const resolvedParams = await params // Await the params object
  const type = resolvedParams.type || '' // Access `type` safely
  if (!type) {
    redirect('/')
  }
  // Render Dropdown with the type parameter
  return (
    <div className="p-6 flex flex-col justify-start h-auto max-w-7xl mx-auto px-2 md:px-1 lg:px-0">
      <TypeHeading params={{ type }} />
      <SubTypeHeading params={{ type }} />

      <CategoryHeroSection params={{ type }} />


      <section>
        <div className=" border-gray-400 border w-full h-[150px] mt-12">
          <h2>Advertisement here</h2>
        </div>
      </section>


      <section>
        <Bloglist params={{ type }} />
        {/* <TypeSideBar b/> */}
      </section>


    </div>
  )
}

export default Page
