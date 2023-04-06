import Image from 'next/image'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { Popover, Transition, Menu, } from '@headlessui/react'
import clsx from 'clsx'
import { Dialog, Disclosure } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react'
import {
  Bars3Icon,
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {Logo}  from './Logo'
import {Signature} from './Logo'
import { Container } from '@/components/Container'
// import avatarImage from '@/images/Alexis-Page-headshot.jpeg'

import signature from '@/images/Sojourner-Type-Only-Periwinkle.svg'
import  SocialMediaHandles  from './SocialMediaHandles'

function MobileNavigationHeader ({}){
  return    <div id="mobile-navigation-header" className="flex flex-row-reverse items-center justify-between">
  <Popover.Button aria-label="Close menu" className="-m-1 p-1">
  <XMarkIcon className='h-6 w-6 bg-indigo-100 rounded-full px-1 py-1 text-indigo-400 -mt-4' aria-hidden='true' />
  </Popover.Button>
  <div className='flex lg:flex-1'>
   </div>
  <div className="mt-1 inline-flex text-sm font-medium text-zinc-600 dark:text-zinc-400">
  <Logo/>   
  <div>
    <div id="signature" draggable="false" className="flex ml-16">
      <Image src={signature.src}  alt='Signature image svg' height={12} width={126}/>
    </div>
  </div>

  </div>
</div>
}
function BigScreenNavigation() {  
   const MenuRef = useRef(null)
   let router = useRouter()
  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Ground Coffees', href: '/groundcoffees' },
    { name: 'Menu', href:'/menu'},
  ];
 
  return  <div id="Big-Screen-Navigation" className='hidden lg:flex lg:gap-x-12'>
  {router.pathname !=='/' &&  
      <Link
            
              href='/'
              className='text-sm font-semibold leading-6 text-white'
            >
              Home
            </Link>
            }
    {navigation.map((item) => (
    <>
    {
      item.href && 
      <Link
        key={item.name} 
        href={item.href}
      
    
        className='text-sm font-semibold leading-6 text-white'
      >
        {item.name}
      </Link>}
    {item.ref && 
      <button
        key={item.name} href={item.href}
        ref={item.ref}
      
        className='text-sm font-semibold leading-6 text-white'
      >
        {item.name}
      </button >
    }
</> 
    ))}
</div>
}

function MobileNavigationBody ({}){  const MenuRef = useRef(null)
  const navigation = [

  { name: 'Ground Coffees', href: '/groundcoffees' },
    { name: 'About', href: '/about' },
     { name: 'Menu', href:'/menu' },
  // { name: 'Ground Coffee', ref: FeaturedRef },
 
];
let router = useRouter()
  return  <> {router.pathname !=='/' &&    <MobileNavItem  key='home'  href='/'>Home</MobileNavItem> }{navigation.map((item) => (
    <>
    { item.href &&  <MobileNavItem  key={item.name}  href={item.href}>{item.name}</MobileNavItem> }
    {item.ref &&   <button class="block py-2" data-headlessui-state="open" key={item.name} ref={item.ref}>{item.name}</button>}
   
      </> 
      ))}</>
}
function MobileNavItem({ href, children }) {  
  let isActive = useRouter().pathname === href
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}




function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}


export function Header(props) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const FeaturedRef = useRef(null)
  let router = useRouter()
  console.log("ROUTER:", router.pathname)



  let isHomePage = useRouter().pathname === '/'


  return (
    <>
        <header className='absolute inset-x-0 top-0 z-50'>
           <Popover {...props}><nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Sojourner </span>
              <Logo/>
            </a>
          </div>
          <div className='flex lg:hidden '>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Popover.Button className="group flex items-center rounded-full  px-4 py-2 ">
              <Bars3Icon className={clsx(router.pathname !=='/' ?  'text-white h-6 w-6 ' : 'h-6 w-6')} aria-hidden='true'  onClick={() => setMobileMenuOpen(true)}/>
                {/* <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" /> */}
              </Popover.Button>
            </button>
          </div>
         <BigScreenNavigation/>
          <div id="lg-login" className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a href='#' className='text-sm font-semibold leading-6 text-white'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>
     
   
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-1 top-2 z-50 origin-top rounded-xl bg-white  ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div id="mobile-navigation-wrapper" className="p-3  min-h-[400px]" >
           <MobileNavigationHeader/>
            <nav className="mt-6">
    
                <div className='fixed mt-64 z-50' />
                
                <div className='fixed inset-y-20 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>          
                 <div className='mt-6 flow-root'>
                    <div className='-my-6 divide-y divide-gray-500/10'>
                  <> 
                  <div className='space-y-2 py-6'>
                  <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                 
                        <MobileNavigationBody/>
                      </ul>
                  </div>
                      </>
                      <div className='py-6'>
                        <a
                          href='#'
                          className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                        >
                          Log in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div id="footer" className="rounded-b-lg px-4 flex inline-flex  w-full">
              <div className="mb-4 rounded-b-lg rounded-b bg-gray-100 px-4 py-4 flex w-full ">
                  <span className="flex items-center mt-4 md:mt-8">
                    <h2 className="text-sm font-medium text-slate-500 z-50 pr-4 pt-4 ">
                      Social Media Handles
                    </h2>
                  </span>
          
                <SocialMediaHandles/>
              </div>
            </div>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>

   
      </header>

    </>
  )
}
