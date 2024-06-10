import { IoIosArrowRoundBack } from "react-icons/io"
import { Button } from "../ui/button"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { capitalize } from "@/lib/capitalize"
import { changeOverlayOpen } from "@/redux/features/menuSlice"
import ProfileForm from "./ProfileForm"
import SocialList from "./SocialList"


const MenuOverlay = () => {
  const { activeForm, overlayOpen } = useSelector((state: RootState) => state.menu)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div
      className={`absolute top-0 w-full min-h-full bg-white ${overlayOpen ? 'block' : 'hidden'}`}
    >
      <div className="bg-stone-300 flex items-center py-2">
        <Button 
          variant={'ghost'} 
          onClick={()=>dispatch(changeOverlayOpen(false))}
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