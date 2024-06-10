import Profile from '@/app/(builder)/profile/page'
import Preview from '@/components/builder/Preview'
import Sidebar from '@/components/builder/Sidebar'
import { ReduxProvider } from '@/redux/ReduxProvider'
import React from 'react'

const ProfileBuilder = () => {
  return (
    <section className='w-full flex flex-row'>
      <ReduxProvider>
        <Sidebar/>
        <Preview/>
      </ReduxProvider>
    </section>
  )
}

export default ProfileBuilder