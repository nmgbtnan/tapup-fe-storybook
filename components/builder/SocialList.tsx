import { SocialLists } from '@/lib/SOCIAL_ICONS'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SocialList = () => {
  const {activeForm} = useSelector((state:RootState) => state.menu)
  return (
    <section className={`${activeForm === 'socials' ? 'block' : 'hidden'} mt-6`}>
      

      <Dialog>
        <DialogTrigger asChild>
          <ul className="flex gap-3 flex-wrap text-lg justify-center mb-3">
            {SocialLists.map((social, i) => (
                <li key={i}
                  className="bg-gray-200 p-2 rounded-lg hover:cursor-pointer hover:bg-green-500 hover:text-white"
                >
                  {social.icon}
                </li>
            ))}
          </ul>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Socials</DialogTitle>
          </DialogHeader>
            <div className="flex items-center gap-3">
              <Label>Link</Label>
              <Input className="w-full" 
                type='url'
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