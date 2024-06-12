
interface Props {
  icon: JSX.Element
  isActive: boolean
}
const Menutab = ({icon, isActive}: Props) => {
  return (
    <div className={`text-xl bg-white p-3 mb-5 text-gray-400 hover:bg-green-500 hover:text-white hover:cursor-pointer rounded-md ${isActive && '!bg-green-500 text-white'}`}>
     {icon}
    </div>
  )
}

export default Menutab