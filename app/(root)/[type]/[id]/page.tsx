import React from 'react'
import { redirect } from 'next/navigation'
import Image from 'next/image'

const page = async ({ params }: { params: { id: string } }) => {
  const resolvedParams = await params // Await the params object
  const id = resolvedParams.id || '' // Access `type` safely
  if (!id) {
    redirect('/')
  }

  const leftImageTitle = 'Nintendo Museum – A Journey Through Time '

  return (
    <div className="flex flex-col justify-start h-screen max-w-7xl mx-auto px-2 md:px-1 lg:px-0">
      <section className="lg:grid lg:grid-cols-3">
        <section className="lg:col-span-2 px-3">
          <h4 className="h4 font-bold heading-font">
            PlayStation 5 Pro Rlease Date, Price, Specs, Preorder Details
          </h4>
          <p className="my-3">
            By<span className="underline generic-viridian"> Darryn Bonthuys </span>October 4, 2024
            at 10:31AM PDT
          </p>

          <div className="w-full flex flex-col items-start">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/assets/images/image15.png"
                alt="left image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
          </p>

          <div className="w-full flex flex-col items-start">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/assets/images/image15.png"
                alt="left image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
          </p>

          <hr className="border border-gray-500" />

          <h4 className="h4 font-bold heading-font">
            PlayStation 5 Pro Rlease Date, Price, Specs, Preorder Details
          </h4>
          <p className="my-3">
            By<span className="underline generic-viridian"> Darryn Bonthuys </span>October 4, 2024
            at 10:31AM PDT
          </p>

          <div className="w-full flex flex-col items-start">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/assets/images/image15.png"
                alt="left image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
          </p>

          <div className="w-full flex flex-col items-start">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/assets/images/image15.png"
                alt="left image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eros in
            risus interdum, at hendrerit lorem hendrerit. Fusce ut elementum lacus, sed dapibus
            orci. Ut eget urna a elit iaculis suscipit. Nunc et nulla in nunc efficitur suscipit.
            Quisque suscipit erat felis, eu tincidunt augue pretium sed. Mauris ac tempus libero.
            Donec imperdiet felis a dui tincidunt, sed tempus ipsum dapibus. Curabitur id sapien sed
            risus sollicitudin tincidunt. Sed non risus vel lorem vehicula interdum non ut metus.
          </p>

          <hr className="border border-gray-500" />
        </section>
        <section className="lg:col-span-1 px-3">
          <div className="border-gray-400 border w-full h-[300px] my-4"></div>

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

          <div className="border-gray-400 border w-full h-[300px] my-4"></div>

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

          <div className="border-gray-400 border w-full h-[300px] my-4"></div>
        </section>
      </section>
    </div>
  )
}

export default page
