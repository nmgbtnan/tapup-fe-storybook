import {
  FolderDown,
  LayoutDashboard,
  LucideGitGraph,
  Settings,
  UserCircle,
} from 'lucide-react';
export type SidebarLink = {
  key: string;
  label: string;
  path: string;
  icon: JSX.Element;
  subLinks?: {
    key: string;
    label: string;
    path: string;
    icon?: JSX.Element;
  }[];
};

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <LayoutDashboard />,
    subLinks: [
      {
        key: 'analytics',
        label: 'Analytics',
        path: '/dashboard/analytics',
        icon: <LucideGitGraph />,
      },
    ],
  },
  {
    key: 'profile',
    label: 'Profile',
    path: '/dashboard/profile',
    icon: <UserCircle />,
    subLinks: [
      {
        key: 'profileBuilder',
        label: 'Profile Builder',
        path: '/dashboard/profile/builder',
        icon: <LucideGitGraph />,
      },
    ],
  },
  {
    key: 'integrations',
    label: 'Integrations',
    path: '/dashboard/integrations',
    icon: <FolderDown />,
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '/dashboard/settings',
    icon: <Settings />,
  },
];

export const MOBILE_MENU = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <LayoutDashboard size={20} />,
  },
  {
    key: 'profile',
    label: 'Profile',
    path: '/dashboard/profile',
    icon: <UserCircle size={20} />,
  },
  {
    key: 'services',
    label: 'Services',
    path: '/dashboard',
    icon: <LayoutDashboard size={20} />,
  },
  {
    key: 'integrations',
    label: 'Integrations',
    path: '/dashboard/integrations',
    icon: <FolderDown size={20} />,
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '/dashboard/settings',
    icon: <Settings size={20} />,
  },
];
