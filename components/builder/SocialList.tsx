'use client'
import { SocialLists } from '@/lib/SOCIAL_ICONS'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from 'react'
import { useMenuState } from '@/hooks/useMenuState'
import {useBuilderSocial } from '@/hooks/useBuilderSocial'
import SocialsForm from './SocialsForm'

interface Social {
  type: string;
  icon: JSX.Element;
}
const SocialList = () => {
  const {activeForm} = useMenuState((state) => state)
  const [selectedSocial, setSelectedSocial] = useState<Social>(SocialLists[0])
  const {socials} = useBuilderSocial((state) => state) 
  
  return (
    <section className={`${activeForm === 'socials' ? 'block' : 'hidden'} mt-6`}>
      <Dialog>
        <DialogTrigger asChild>
          <ul className="flex gap-3 flex-wrap text-lg justify-center mb-3">
          {SocialLists.map((socList, i) => {
            const isSocialInArray = socials.some((social) => social.name === socList.type);

            return (
                <li key={i}
                  onClick={() => setSelectedSocial(socList)}
                  className={`bg-gray-200 p-2 rounded-lg hover:cursor-pointer ${isSocialInArray ? 'bg-green-500 text-white' : ''}`}
                >
                  {socList.icon}
                </li>
            );
          })}
          </ul>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedSocial?.type}</DialogTitle>
          </DialogHeader>
          <SocialsForm selectedSocial={selectedSocial}/>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default SocialList