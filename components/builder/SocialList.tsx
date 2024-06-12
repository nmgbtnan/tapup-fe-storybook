'use client'
import { SocialLists } from '@/lib/SOCIAL_ICONS'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react'
import { useMenuState } from '@/hooks/useMenuState'

const SocialList = () => {
  const {activeForm} = useMenuState((state) => state)
  const [selectedSocial, setSelectedSocial] = useState('')
  return (
    <section className={`${activeForm === 'socials' ? 'block' : 'hidden'} mt-6`}>
      

      <Dialog>
        <DialogTrigger asChild>
          <ul className="flex gap-3 flex-wrap text-lg justify-center mb-3">
            {SocialLists.map((social, i) => (
                <li key={i}
                  onClick={() => setSelectedSocial(social.type)}
                  className="bg-gray-200 p-2 rounded-lg hover:cursor-pointer hover:bg-green-500 hover:text-white"
                >
                  {social.icon}
                </li>
            ))}
          </ul>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedSocial}</DialogTitle>
          </DialogHeader>
            <div className="flex items-center gap-3 mt-3">
              <Label>Link</Label>
              <Input className="w-full" 
                type='url'
                placeholder='https://example.com'
              />
            </div>
            <div className="flex items-center gap-3">
              <div className='w-1/2'>
                <Label>Color</Label>
                <Input className="w-full p-0" 
                  type='color'
                />
              </div>
              <div className='w-1/2 '>
                <Label>Bg Color</Label>
                <Input className="w-full p-0" 
                  type='color'
                />
              </div>
            </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default SocialList