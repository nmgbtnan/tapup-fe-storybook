import { Badge } from '@/components/ui/badge';
import { Calendar, Edit2, LogOut, MessageSquare, User } from 'lucide-react';
import profile from '../public/profile.svg';
import { FaRegAddressCard } from 'react-icons/fa';

export const cards = [
  {
    key: 'taps',
    label: 'Taps',
    calendar: <Calendar className="w-4 md:w-6" />,
    count: '2,000',
    badge: (
      <Badge className="flex justify-center bg-custom-badge-greenbg p-1.5 text-[10px] text-green-700 hover:bg-green-300 sm:text-xs">
        + 10% last month
      </Badge>
    ),
  },

  {
    key: 'leads',
    label: 'Leads',
    calendar: <Calendar className="w-4 md:w-6" />,
    count: '2,255',
    badge: (
      <Badge className="flex justify-center bg-custom-badge-redbg p-1.5 text-[10px] text-red-500 hover:bg-red-300 sm:text-xs">
        + 10% last month
      </Badge>
    ),
  },
];

export const tableData = [
  {
    date: 'March 01, 2023',
    action: 'John Doe Rated a service or product',
    location: 'Novaliches, Quezon City',
  },
  {
    date: 'March 01, 2023',
    action: 'John Doe Invited someone to collaborate',
    location: 'Novaliches, Quezon City',
  },
  {
    date: 'March 01, 2023',
    action: 'Jane Doe Activated her Account',
    location: 'Novaliches, Quezon City',
  },
  {
    date: 'March 01, 2023',
    action: 'John Doe Accepted a collaboration invite',
    location: 'Novaliches, Quezon City',
  },
  {
    date: 'March 01, 2023',
    action: 'Jane Doe Collaborated on a project.',
    location: 'Novaliches, Quezon City',
  },
  {
    date: 'March 01, 2023',
    action: 'Jane Doe Checked into an event',
    location: 'Novaliches, Quezon City',
  },
  {
    date: 'March 01, 2023',
    action: 'John Updated his bio',
    location: 'Novaliches, Quezon City',
  },
  {
    date: 'March 01, 2023',
    action: 'John Updated his bio',
    location: 'Novaliches, Quezon City',
  },
  {
    date: 'March 01, 2023',
    action: 'John Updated his bio',
    location: 'Novaliches, Quezon City',
  },
];

export const recentTaps = [
  {
    profile: profile,
    name: 'Evelyn Rose Garcia',
    email: 'garcia.evelynrose@email.com',
    income: '+$1,999.00',
  },
  {
    profile: profile,
    name: 'Evelyn Rose Garcia',
    email: 'garcia.evelynrose@email.com',
    income: '+$1,999.00',
  },
  {
    profile: profile,
    name: 'Evelyn Rose Garcia',
    email: 'garcia.evelynrose@email.com',
    income: '+$1,999.00',
  },
  {
    profile: profile,
    name: 'Evelyn Rose Garcia',
    email: 'garcia.evelynrose@email.com',
    income: '+$1,999.00',
  },
  {
    profile: profile,
    name: 'Evelyn Rose Garcia',
    email: 'garcia.evelynrose@email.com',
    income: '+$1,999.00',
  },
  {
    profile: profile,
    name: 'Evelyn Rose Garcia',
    email: 'garcia.evelynrose@email.com',
    income: '+$1,999.00',
  },
  {
    profile: profile,
    name: 'Evelyn Rose Garcia',
    email: 'garcia.evelynrose@email.com',
    income: '+$1,999.00',
  },
  {
    profile: profile,
    name: 'Evelyn Rose Garcia',
    email: 'garcia.evelynrose@email.com',
    income: '+$1,999.00',
  },
  {
    profile: profile,
    name: 'Evelyn Rose Garcia',
    email: 'garcia.evelynrose@email.com',
    income: '+$1,999.00',
  },
  {
    profile: profile,
    name: 'Evelyn Rose Garcia',
    email: 'garcia.evelynrose@email.com',
    income: '+$1,999.00',
  },
  {
    profile: profile,
    name: 'Evelyn Rose Garcia',
    email: 'garcia.evelynrose@email.com',
    income: '+$1,999.00',
  },
];

export const menuLinks = [
  {
    label: 'Activate Account',
    icon: <User size={18} />,
    path: '/activate',
  },
  {
    label: 'Edit Profile',
    icon: <Edit2 size={18} />,
    path: '/edit-profile',
  },
  {
    label: 'Membership Profile',
    icon: <FaRegAddressCard size={18} />,
    path: '/membership',
  },
  {
    label: 'Chat Now',
    icon: <MessageSquare size={18} />,
    path: '/chat-now',
  },
  {
    label: 'Sign out',
    icon: <LogOut size={18} />,
    path: '/',
  },
];
