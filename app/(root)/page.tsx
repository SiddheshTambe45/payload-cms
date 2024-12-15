// import Image from 'next/image'
// import React from 'react'

// const page = () => {
//   return (
//     <div className="flex items-center justify-center h-screen max-w-7xl mx-auto">
//       <section className="featured-blogs">
//         <section className="featured-blogs-upper grid lg:grid-3">
//           <div className="h-[500px] lg:col-span-2">
//             <div className="aspect-[16/9]">
//               <Image src="/assets/images/image15.png" alt="first image" fill />
//             </div>
//             <p>Hi this is the title</p>
//           </div>

//           <div className="h-[500px] lg:col-span-2">
//             <div className="">
//               <Image
//                 src="/assets/images/image15.png"
//                 alt="first image"
//                 height={500}
//                 width={cal - size(auto)}
//               />
//             </div>
//             <p>Hi this is the title</p>
//           </div>
//         </section>
//       </section>
//     </div>
//   )
// }

// export default page

// import Image from 'next/image'
// import React from 'react'

// const Page = () => {
//   const title =
//     'My Visit To The Nintendo Museum Made My Life Flash Before My Eyes We spent two days at the shrine to all things Nintendo and reconnected'

//   return (
//     <div className="flex justify-center h-screen max-w-7xl mx-auto">
//       <section className="featured-blogs w-full">
//         <div className="grid grid-cols-3 gap-4">
//           {/* Left Div */}
//           <div className="relative col-span-2 aspect-[16/9]">
//             <Image
//               src="/assets/images/image15.png"
//               alt="left image"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Right Div */}
//           <div className="relative col-span-1 overflow-hidden">
//             <Image
//               src="/assets/images/image16.png"
//               alt="right image"
//               fill
//               className="object-cover object-right"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Page

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  const leftImageTitle = 'Nintendo Museum – A Journey Through Time Nintendo Muse'
  const rightImageTitle = 'Exploring the Legacy of Nintendo'

  return (
    <div className="flex flex-col justify-start h-screen max-w-7xl mx-auto px-2 md:px-1 lg:px-0">
      <section className="featured-blogs w-full p-3">
        <div className="featured-blogs-upper grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto">
          {/* Left Div */}
          <Link className="p-0 m-0 col-span-2 flex flex-col items-start" href="/games/123">
            {/* <div className="col-span-2 flex flex-col items-start"> */}
            {/* Fixed Height with Aspect Ratio */}
            <div className="relative h-[400px] w-full">
              <div className="relative w-full h-full aspect-[16/9]">
                <Image
                  src="/assets/images/image15.png"
                  alt="left image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Text */}
            <p className="mt-2 text-left text-lg font-semibold leading-tight">{leftImageTitle}</p>
            {/* </div> */}
          </Link>

          {/* Right Div */}
          <div className="col-span-1 flex flex-col items-start">
            <div className="relative w-full h-[400px]">
              <Image
                src="/assets/images/image16.png"
                alt="right image"
                fill
                className="object-cover object-right"
              />
            </div>
            <p className="mt-2 text-left text-lg font-semibold">{rightImageTitle}</p>
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

      {
        // ads
      }

      <section className="Tech-Deals mt-10">
        <h5 className="h5 generic-viridian">
          <span className="font-bold">Tech Deals</span> | See All
        </h5>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5">
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

      <section className="Mobile-Deals mt-10">
        <h5 className="h5 generic-viridian">
          <span className="font-bold">Mobile Deals</span> | See All
        </h5>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5">
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

      {
        //ads
      }

      <section className="popular-recent mt-10 lg:grid lg:grid-cols-3">
        <section className="lg:col-span-2 px-3">
          <div className="border border-y-2 border-x-0 flex flex-row gap-8 my-4">
            <button type="button" className="h6 generic-viridian">
              Popular
            </button>
            <button type="button" className="h6 generic-viridian">
              Recent
            </button>
          </div>

          {[0, 1, 2, 3, 4, 5].map((e) => (
            <div
              key={e}
              className="flex-row items-start grid grid-cols-3 my-3 w-full py-2 border border-b-4 border-x-0 border-t-0"
            >
              <div className="relative w-full aspect-[16/9] col-span-1">
                <Image
                  src="/assets/images/image15.png"
                  alt="left image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-content-center items-center w-full col-span-2">
                <p className="mt-2 ml-4 text-left text-lg font-semibold">{leftImageTitle}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="lg:col-span-1 px-3">
          <div className="border-gray-400 border w-full h-[230px] my-4"></div>

          <div>
            <div>
              <div className="p-0 m-0 border-b-4 b-generic-viridian">
                <button className="bg-generic-viridian text-white px-6 py-2">Upcomings</button>
              </div>
              <div className="flex flex-row justify-around items-center my-4">
                {['Games', 'Phone', 'Movies', 'More'].map((e) => (
                  <button type="button" key={e} className="generic-viridian font-bold">
                    <span className={`${e === 'Games' ? 'border-b-4 b-generic-viridian' : ''}`}>
                      {e}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-2 b-generic-viridian p-2">
              {[0, 1, 2, 3, 4, 5].map((e) => (
                <div
                  key={e}
                  className="flex-row items-start grid grid-cols-3 my-3 w-full py-2 border border-b-4 border-x-0 border-t-0"
                >
                  <div className="relative w-full aspect-[16/9] col-span-1 h-full">
                    <Image
                      src="/assets/images/image15.png"
                      alt="left image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-content-center items-center w-full col-span-2">
                    <p className="mt-2 ml-4 text-left text-lg font-semibold">{leftImageTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-gray-400 border w-full h-[230px] my-4"></div>
        </section>
      </section>
    </div>
  )
}

export default Page
