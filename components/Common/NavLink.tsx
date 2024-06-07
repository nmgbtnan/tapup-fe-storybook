'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  link: string;
}
const NavLink = ({href, link } : Props) => {
  const pathname = usePathname();
  const isActive = pathname === href
  function isActiveChecker() {
    
    return isActive
      ? 'py-2  hover:text-custom-green transition-all duration-150 border-b border-custom-black hover:border-custom-green'
      : 'py-2 hover:text-custom-green transition-all duration-150 border-b border-transparent';
  }
  return (
    <Link 
      href={href}
      className={isActiveChecker()}>
      {link}
    </Link>
  )
}

export default NavLink