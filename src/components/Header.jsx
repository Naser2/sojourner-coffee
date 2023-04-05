import Image from 'next/image'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Dialog, Disclosure } from '@headlessui/react';
import { useState } from 'react';
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

import { Fragment, useEffect, useRef } from 'react'





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


export function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const MenuRef = useRef(null)
  const FeaturedRef = useRef(null)
let router = useRouter()
  console.log("ROUTER:", router.pathname)
  
  const navigation = [
    { name: 'About', href: '/about' },
    // { name: 'Ground Coffees', href: '/groundcoffees' },
    // { name: 'Ground Coffee', ref: FeaturedRef },
    { name: 'Menu', ref: MenuRef },
  ];
  let isHomePage = useRouter().pathname === '/'


  return (
    <>
        <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Logo/>
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className={clsx(router.pathname !=='/' ?  'text-white h-6 w-6 ' : 'h-6 w-6')} aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
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
          {/* <div id="lg-login" className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a href='#' className='text-sm font-semibold leading-6 text-white'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <Logo/>
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
               <div className='-my-6 divide-y divide-gray-500/10'>
            <> 
             <div className='space-y-2 py-6'>
             {router.pathname !=='/' &&  
              <Link
                    
                      href='/'
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
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
                        
                         className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                       >
                         {item.name}
                       </Link>}
                     {item.ref && 
                       <button
                         key={item.name} href={item.href}
                         ref={item.ref}
                        
                         className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                       >
                         {item.name}
                       </button >
                     }
                  </> 
                   
                  ))}
                </div></>
                {/* <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

    </>
  )
}
