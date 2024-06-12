
import Preview from '@/components/builder/Preview'
import Sidebar from '@/components/builder/Sidebar'
import React from 'react'

const ProfileBuilder = () => {
  return (
    <section className='w-full flex flex-row'>
        <Sidebar/>
        <Preview/>
    </section>
  )
}

export default ProfileBuilder