import { IoIosArrowRoundBack } from "react-icons/io"
import { Button } from "../ui/button"
import { capitalize } from "@/lib/capitalize"
import ProfileForm from "./ProfileForm"
import SocialList from "./SocialList"
import { useMenuState } from "@/hooks/useMenuState"


const MenuOverlay = () => {
  const {activeForm, overlayOpen} = useMenuState((state) => state)
  const {changeOverlayOpen} = useMenuState((state) => state)
  return (
    <div
      className={`absolute top-0 w-full min-h-full bg-white ${overlayOpen ? 'block' : 'hidden'}`}
    >
      <div className="bg-stone-300 flex items-center py-2">
        <Button 
          variant={'ghost'} 
          onClick={()=>changeOverlayOpen(false)}
          className="hover:bg-transparent"
        >
          <IoIosArrowRoundBack size={40}/>
          <span className="text-xl">{capitalize(activeForm)}</span>
        </Button>
      </div>
      <div className="p-5">
        <ProfileForm />
        <SocialList />
      </div>
    </div>
  )
}

export default MenuOverlay