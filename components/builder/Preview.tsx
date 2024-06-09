import Image from 'next/image'
import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
const Preview = () => {
  return (
    <div className='w-full flex flex-col justify-start items-center'>
      <div className='relative'>
        <Image
          width={300}
          height={300}
          alt='mobile preview'
          src='/phone.webp'
          />
        <div className={`absolute top-0 left-0 w-full h-full bg-transparent`}>
          <div className={`bg-white mt-10 ms-[19px] me-[14px] mb-32 rounded-xl h-[550px]`}>
            <div className="bg-gray-300 w-full h-28 rounded-t-md">

            </div>
            <div className="flex justify-center relative">
              <Avatar className='absolute top-[-40px] h-20 w-20 border-[3px] border-white '>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview