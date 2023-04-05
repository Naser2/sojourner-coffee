import Link from 'next/link'
import {Logo}  from './Logo'
import {Signature} from './Logo'
import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

const footerNavigation = {
  Menu: [
    ,
    { name: 'Coffee', href: '#' },
    { name: 'Ground Cooffee', href: '#' },
  ],
  About: [
    { name: 'About Us', href: '/about' },
    { name: 'Fairtrade', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  Location: [
    { name: '137 W 116th St, NY, NY', href: 'https://www.google.com/maps/uv?pb=!1s0x89c2f7832df2e2b3%3A0x5fc1b216d9289a8e!3m1!7e115!4s%2Fmaps%2Fplace%2Fsojourner%2Bcoffee%2Baddress%2F%4040.8027283%2C-73.9513302%2C3a%2C75y%2C31.64h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sjffgC2FynBBP-uq-xjffLg*212e0*214m2*213m1*211s0x89c2f7832df2e2b3%3A0x5fc1b216d9289a8e%3Fsa%3DX!5ssojourner%20coffee%20address%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sjffgC2FynBBP-uq-xjffLg&hl=en&sa=X&ved=2ahUKEwiMwryk5pH-AhXHkYkEHbEmDZcQpx96BQi4ARAN' },
  ],
  Contact: [
    { name: 'Jobs', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Return Policy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};
export function Footer() {
  return (
    <footer
    className=' bg-black '
    aria-labelledby='footer-heading'
  >
    <h2 id='footer-heading' className='sr-only'>
      Footer
    </h2>
    <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32'>
      <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
         <div className="inline-flex"><Logo/>    <Signature/></div> 
     
        {/* <Image
          className='h-7'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
          alt='Company name'
        /> */}
        <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
          <div className='md:grid md:grid-cols-2 md:gap-8'>
            <div>
              <h3 className='text-sm font-semibold leading-6 text-white'>
                Menu
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {footerNavigation.Menu.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-sm leading-6 text-gray-300 hover:text-white'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-10 md:mt-0'>
              <h3 className='text-sm font-semibold leading-6 text-white'>
                About 
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {footerNavigation.About.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-sm leading-6 text-gray-300 hover:text-white'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='md:grid md:grid-cols-2 md:gap-8'>
            <div>
              <h3 className='text-sm font-semibold leading-6 text-white'>
                Location
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {footerNavigation.Location.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-sm leading-6 text-gray-300 hover:text-white'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-10 md:mt-0'>
              <h3 className='text-sm font-semibold leading-6 text-white'>
                Legal
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-sm leading-6 text-gray-300 hover:text-white'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div id="footer-signature" className='sm:flex justify-center block mt-20 sm:mt-56 '>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Sojourner Coffee. All rights
            reserved.
          </p>
          <h4 className="text-xs text-zinc-600 dark:text-zinc-500 px-4">
            Build by NasDesign
          </h4>    </div>
      </div>
      
    </div>
  </footer>
  )
}
