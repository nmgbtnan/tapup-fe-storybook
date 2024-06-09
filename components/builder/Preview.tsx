'use client'
import Image from 'next/image'
import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
const Preview = () => {
  const {color, bgColor, nameColor} = useSelector((state:RootState) => state.styles)
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
          <div className={`mt-10 ms-[18px] me-[13px] mb-32 rounded-xl rounded-b-[39px] h-[552px] `}
            style={{backgroundColor: bgColor}}
          >
            {/* Cover photo */}
            <div className="bg-gray-300 w-full h-28 rounded-t-md">

            </div>
            {/* Avatar */}
            <div className="flex justify-center relative">
              <Avatar className='absolute top-[-40px] h-20 w-20 border-[3px] border-white '>
                <AvatarImage src="https://i.pinimg.com/originals/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            {/* Profile Info */}
            <div className="text-center mt-10"
              
            >
              <h4
                style={{color: nameColor}}
              >Tony Stark</h4>
              <div className='px-3'
                style={{color: color}}
              >
                <p className='text-[0.8em] leading-[1.1rem]'>Software Engineer</p>
                <p className='text-[0.8em] leading-[1.1rem]'>Stark Industries</p>
                <p className='text-[0.8em] leading-[1.1rem]'>Forrest Ray 191-103 Integer Rd. Corona New Mexico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview