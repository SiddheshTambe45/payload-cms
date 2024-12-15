import React from 'react'
import { redirect } from 'next/navigation'
import Dropdown from './blogdropdown'
import Image from 'next/image'
import { SubTypeHeading, TypeHeading } from './TypeHeading'
import TypeSideBar from './sidebar'

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
    <div className="p-6 flex flex-col justify-start h-screen max-w-7xl mx-auto px-2 md:px-1 lg:px-0">
      <TypeHeading params={{ type }} />
      <SubTypeHeading params={{ type }} />
      


      <section className="featured-blogs w-full">
        <div className="featured-blogs-upper grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto">
          {/* Left Div */}
          <div className="col-span-2 flex flex-col items-start">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/assets/images/image15.png"
                alt="left image"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-left text-lg font-semibold">{leftImageTitle}</p>
          </div>

          {/* Right Div */}
          <div className="right">
            {[0, 1].map((e) => (
              <div key={e} className="flex flex-col items-start mx-7">
                <div className="relative w-full flex justify-center aspect-[16/9]">
                  <Image
                    src="/assets/images/image15.png"
                    alt="left image"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-left text-lg font-semibold">{leftImageTitle}</p>
              </div>
            ))}
          </div>




        </div>

        <div className="featured-blogs-lower grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
          {[0, 1, 2, 3].map((e) => (
            <div key={e} className="flex flex-col items-start">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/assets/images/image15.png"
                  alt="left image"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-left text-lg font-semibold">{leftImageTitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className=" border-gray-400 border w-full h-[150px] mt-12">
          <h2>Advertisement here</h2>
        </div>
      </section>
      

      <section>
        <Dropdown params={{ type }} />
        {/* <TypeSideBar params={{type}}/> */}
      </section>


    </div>
  )
}

export default Page
