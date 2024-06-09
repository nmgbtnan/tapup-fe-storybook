'use client'
import  { useState } from 'react'
import { IoChevronForward, IoColorPalette } from 'react-icons/io5'
import { RiFontSize, RiLayout2Fill } from 'react-icons/ri'
import Menutab from './Menutab'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { capitalize } from '@/lib/capitalize'
import { IoMdPerson } from 'react-icons/io'
import { TbSocial } from "react-icons/tb";
import { FaTools } from 'react-icons/fa'
import StylesForm from './StylesForm'
import { FontForm } from './FontForm'

const tabs = [
  {
    name: 'manage',
    icon: <RiLayout2Fill />,
    menuItems: [
      {
        name: 'profile',
        icon: <IoMdPerson size={20}/>,
      },
      {
        name: 'socials',
        icon: <TbSocial size={20}/> 
      },
      {
        name: 'services',
        icon: <FaTools size={18}/> 
      },
      
    ]
  },
  {
    name: 'styles',
    icon: <IoColorPalette />,
    form: <StylesForm />
  },
  {
    name: 'font',
    icon: <RiFontSize />,
    form: <FontForm />
  },
]
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('manage')
  return (
    <nav className='mt-10'>
      <Tabs defaultValue="manage" className="flex">
        <TabsList className="flex flex-col min-h-screen justify-start bg-transparent mt-1 me-5">
          <ul>
            {tabs.map((tab) => (
              <li key={tab.name} onClick={() => setActiveTab(tab.name)}>
                <TabsTrigger value={tab.name} className='p-0 !bg-transparent'>
                  <Menutab icon={tab.icon} isActive={tab.name === activeTab} />
                </TabsTrigger>
              </li>
            ))}
          </ul>
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent 
            key={tab.name}
            value={tab.name} 
            className='p-0 w-[350px] '
          >
            <Card className='min-h-[300px]'>
              <CardHeader>
                <CardTitle>{capitalize(tab.name)}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
               {tab.menuItems?.map((item, i) => (
                 <div key={i}
                  className='flex items-center justify-between hover:bg-gray-400 hover:text-white hover:cursor-pointer rounded-md border p-2'
                 >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {capitalize(item.name)}
                  </div>
                  <IoChevronForward />
                 </div>
               ))}
               {tab.form !== null && tab.form}
              </CardContent>
            </Card>
          </TabsContent>
          
        ))}
      </Tabs>
    </nav>
  )
}

export default Sidebar