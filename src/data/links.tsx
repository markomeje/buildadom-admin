import { RxCaretDown } from 'react-icons/rx';

export const links = [
   {
      name: 'Home',
      icon: '',
      path: '/',
      isDropdown: false,
   },
   {
      name: 'Marketplace',
      icon: '',
      path: '/marketplace',
      isDropdown: false,
   },
   {
      name: 'Stores',
      icon: '',
      path: '/stores',
      isDropdown: false,
      dropdownLinks: [],
   },
   {
      name: 'Categories',
      icon: <RxCaretDown />,
      path: '/categories',
      isDropdown: false,
      dropdownLinks: [],
   },
   {
      name: 'Explore',
      icon: '',
      path: '/explore',
      isDropdown: false,
      dropdownLinks: [],
   },
   {
      name: 'Services',
      icon: '',
      path: '/services',
      isDropdown: false,
      dropdownLinks: [],
   },
   {
      name: 'Track Order',
      icon: '',
      path: '/track-order',
      isDropdown: false,
      dropdownLinks: [],
   },
   {
      name: 'Signup',
      icon: '',
      path: '/signup',
      isDropdown: false,
      dropdownLinks: [],
   },
];