import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-start max-w-7xl mx-auto px-2 md:px-1 lg:px-0">
      <div className="bg-black text-white flex justify-between items-center p-3">
        <div className="flex justify-start items-center gap-2">
          <div>
            <Image src="/assets/icons/Facebook.png" width={24} height={24} alt="Facebook" />
          </div>
          <div>
            <Image src="/assets/icons/Instagram.png" width={24} height={24} alt="Instagram" />
          </div>
          <div>
            <Image src="/assets/icons/LinkedIn.png" width={24} height={24} alt="LinkedIn" />
          </div>
          <div>
            <Image src="/assets/icons/TwitterX.png" width={24} height={24} alt="TwitterX" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
          <p className="text-white font-extrabold !important">
            <span className="text-white">@2024 -25 Technikaz All Rights Reserved</span>
          </p>
        </div>

        <div></div>
      </div>
    </footer>
  )
}

export default Footer
