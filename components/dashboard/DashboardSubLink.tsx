'use client'

import { Dot } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  link: string;
}
const DashboardSubLink = ({href, link } : Props) => {
  const pathname = usePathname();
  const isActive = pathname === href
  function isActiveChecker() {
    
    return isActive
      ? 'text-custom-green'
      : '';
  }
  return (
    <Link 
      href={href}
      className={`${isActiveChecker()} i  mt-2 flex items-center rounded-md pl-4 text-sm  hover:bg-custom-green/80 hover:text-white`}>
      <Dot size={45} />
        <span className="text-white">{link}</span>
    </Link>
  )
}

export default DashboardSubLink