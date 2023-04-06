import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/tailwind.css'
// import '@/styles/tailwind.css'


// const inter = Inter({ subsets: ['latin'] })
import HeroAndNav from '@/components/HeroAndNav.jsx'
import FeaturedCoffees from '@/components/FeaturedCoffees'
import CoffeeDetails from '@/components/CoffeeDetails.jsx'
export default function GroundCoffees() {
  return (
    <>
     
  
       <FeaturedCoffees/>
       <CoffeeDetails/>

    </>
  )
}
