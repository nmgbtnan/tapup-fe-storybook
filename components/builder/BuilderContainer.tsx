'use client'
import Preview from '@/components/builder/Preview'
import Sidebar from '@/components/builder/Sidebar'
import { useBuilderProfile } from '@/hooks/useBuilderProfile'
import getToken from '@/lib/auth/getToken'
import { useEffect } from 'react'
const BuilderContainer = () => {
  const {changeName, name} = useBuilderProfile((state) => state)
  
  const updateInitialVal = () => {
    getToken().then((response) => changeName(response.user.name))
  }

  useEffect(() => {
    if(name === '')
    updateInitialVal();
  }, [])

  return (
    <>
      <Sidebar/>
      <Preview/>
    </>
  )
}

export default BuilderContainer