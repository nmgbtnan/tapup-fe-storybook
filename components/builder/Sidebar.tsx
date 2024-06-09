'use client'
import  { useState } from 'react'
import { IoColorPalette } from 'react-icons/io5'
import { RiFontSize, RiLayout2Line } from 'react-icons/ri'
import Menutab from './Menutab'

const tabs = [
  {
    name: 'manage',
    icon: <RiLayout2Line />,
  },
  {
    name: 'style',
    icon: <IoColorPalette />,
  },
  {
    name: 'font',
    icon: <RiFontSize />,
  },
]
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('manage')
  return (
    <nav className='mt-10'>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.name} onClick={() => setActiveTab(tab.name)}>
            <Menutab icon={tab.icon} isActive={tab.name === activeTab} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar