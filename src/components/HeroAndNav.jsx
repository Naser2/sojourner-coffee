

import image1 from "@/images/sojourner-coffee-served.jpeg"
import image2 from "@/images/sojourner-coffee-served-2.jpeg"
import featured1 from "@/images/featured-1.jpg"
import featured2 from "@/images/featured-2.jpg"
import Review1 from "@/images/review1.png"
import Review2 from "@/images/review2.png"
import Review3 from "@/images/review3.png"
import Travis from "@/images/travis.png"
import soujourneyGif from '@/images/ezgif-2-4809eda2a1.gif'
import TestimonialImage from '@/images/testimonial.png'
import AboutSojourney from '@/images/about-sojourney.jpg'
import { Fragment, useEffect, useRef } from 'react'
import signature from '@/images/Sojourner-Type-Only-Periwinkle.svg'
import  Location from './Location'
import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import soujournerBg from '../images/soujourner-bg-2.png'
import {Logo}  from './Logo'
import {Signature} from './Logo'
import menuImage1 from '../images/menuImage-1.png'
import menuImage2 from '../images/menuImage-2.png'
import {Coffees} from './Cofees';
import {CoffeesSM} from './Cofees';
import breakfast from '@/images/breakfast.png'
import Image from 'next/image';
import Link from 'next/link';
import { StarRated } from './StarRated';
import Arnold from '@/images/arnold.png';
import Emily from '@/images/emily.png';
import Alex from '@/images/alex.png';

const Reviews = () => {
return <div className="[mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]">
<div class="not-prose relative rounded-xl overflow-hidden dark:bg-slate-800/25">
      <div class="absolute inset-0  [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div><div class="relative rounded-xl overflow-auto">
    <div class="max-w-md sm:max-w-3xl mx-auto bg-transparent shadow-xl min-w-0 dark:highlight-white/5">     
     <div class="overflow-x-auto flex">
      {reviewsJson .map((review) => {
    return (
        <div key={review.id} class="flex-none  sm:py-6 pl-3 pr-3 sm:first:pl-6 sm:last:pr-6">
           <div class="flex"  >
            <Image class="w-14 h-14 rounded-full" src={review.image} alt={review.author} height={16} width={16}/>

            <div id="review-details" className='flex-block pl-4'>
              <p class="text-slate-200 text-sm font-medium dark:text-slate-200 italic text-left max-[600px]:hidden">{review.description}</p>
               <strong class="-mt-2 text-slate-100 text-sm font-medium dark:text-slate-200 italic">   
                <div className="flex items-center">
                  <strong class="pr-2 text-slate-300 text-sm font-medium dark:text-slate-200">Rated:</strong>
                    <StarRated
                      count={5}
                      rating={review.average}
                      key={review.average}
                      className={
                        (review.average > review.average
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        'h-2 w-2 flex-shrink-0 ')
                      }
                      aria-hidden="true"
                    />
                  </div></strong>
                  <div class=" -mt-1 flex" id="author-lg" ><strong class="-pt-5 text-slate-200 text-sm font-medium dark:text-slate-200 sr-only sm:not-sr-only sm:text-left">{review.author}</strong></div>   
               <div class="-mt-2" id="author-small" ><strong class=" text-slate-200 text-sm font-medium dark:text-slate-200 sm:sr-only">{review.author}</strong></div>
             </div>

          </div>
        </div>
    )
  })}
     </div>   </div>
    </div>
  </div><div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
</div>
}
   {/* <Image
                    src={review.image.src}
                    width={70}
                    height={70}
                    className="img modules-lib__doorway-tile__image"
                    alt="A hairdresser smiles while she uses a laptop on a small table in the salon."
                  /> */}
let reviewsJson = [
{ image: Review1.src,
  author:'Frank Aloe',
  href: '/',
  date: '2023-01-02',
  description: "They also offer pastries, fizzy drinks, and ground coffee",
  themeColor: '-pink-800',
 average:5 
},
{ image:Review2.src,
  author: 'Luna Martínez',
  href: '/',
  status_: 'new',
  date: '2022-09-02',
  description:"I ordered an iced latte.",

  average:4
},
  {

    image: Arnold.src,
    author:'Peter Baraník',

    href: '/',
    date: '2023-01-02',
    description: "The coffee here is perfectly balanced brew.",
    themeColor: '-pink-800',
   average:5 
  },
  {
    image:Review3.src,
    author:'Joana Garcia',
    href: '/',
    date: '2023-01-02',
    description:"Service was also good and pastries were tasty.",
    themeColor: '-pink-800',
  
    readTime: 8,
   average:5 
  },
  {
    author: 'Brandon Lee',
    href: '/',
    status_: 'new',
    category: 'Environment-technology',
    date: '2022-09-02',
    description:"The coffee here is exceptional, rich flavors and a perfectly balanced brew.",

    image: Alex.src,
    average:4
  },
  {
    image: Travis.src,
    author:'Travis W',
    href: '/',
    date: '2023-01-02',
    description:"I've been coming to this coffee shop for months and love everything...",
    themeColor: '-pink-800',
  
    readTime: 8,
   average:5 
  },
{
  image: Emily.src,
  author:'Emily Woodworth',
  href: '/',
  date: '2023-01-02',
  description:"One of thge best coffee in harlem.",
  themeColor: '-pink-800',

  readTime: 8,
 average:5 
},
]

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Powerful API.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    icon: ServerIcon,
  },
];
const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$18.50',
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
    ],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$23',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
];
const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HeroAndNav() {
  const MenuRef = useRef(null)
  const FeaturedRef = useRef(null)

  return (
    <div className='bg-white'>
      {/* Header */}
   

      <main>
        {/* Hero section */}
        <div className='relative isolate overflow-hidden  pb-14 pt-14 sm:pb-20'>
          <Image
            src={soujournerBg.src}
            alt=''
            className='absolute inset-0 -z-10 h-full w-full object-cover'
            width={2000}
            height={2000}
          />
          <div
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#8EA3C5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className='mx-auto max-w-xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
           
              <div className='text-center px-4 rounded-md periwinkle-bg-1 py-4'>
                <h1 className='text-4xl font-bold tracking-tight text-indigo-100 sm:text-7xl justify-center'>
                <div>
              <div id="signature" draggable="false" className="justify-content-center flex justify-center text-center justify-center bg-transparent-more rounded-t rounded-t-lg ">
                <Image src={signature.src} className=" object-center 
                object-cover "
                width={400} height={100}
                />
              </div>
             </div>
    
                 {/* Sojourner Coffee */}
                </h1>
                <div className='smmt-10 flex items-center justify-center gap-x-6'> 
                <p className='text-lg leading-8 text-on-periwinkle-transparent periwinkle-transparent justify-center px-4 rounded-md'>
                  Amazing coffee in harlem. We also have ground coffee.
                </p></div>
               
                
              </div>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                  <a
                    href='#'
                    className='rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
                  >
                   Menu
                  </a>
                  <a
                    href='#'
                    className='text-sm font-semibold leading-6 text-black pr-2 '
                  >
                   Coffees<span aria-hidden='true'><span className='px-2'>→</span></span>
                  </a>
                </div>
              </div>

          
          </div>
          <div
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        {/* Feature section */}

        <div id="caoursell"  className='mt-0 sm:mt-0 periwinkle'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8 pb-4 sm:pb-8'>
            <div className='mx-auto max-w-2xl  sm:max-w-6xl sm:text-center'>
            
              <p className=" pt-2  pb4 sm:py-4 sm:pt-4  pb-2  text-2xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              Reviews
              </p>
              <p className='mt-0 text-lg leading-8 text-gray-100'>
              <Reviews/>
            
              </p>
            </div>
          </div>

          <section ref={MenuRef} id="menu" className='mt-0 sm:mt-0 bg-black pb-10 sm:pb-44'>
          <div className='pt-6 mx-auto max-w-7xl px-6 lg:px-8'>
            <div className=' mx-auto max-w-2xl sm:text-center'>
            
              <p className='mt-0  sm:pt-10  text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>
            Menu
              </p>
              <p className='mt-2 text-lg leading-8 text-gray-100'>
               Prices are subject to change.
            
              </p>
            </div>
          </div>
          <div id="menu-images" className='sm:grid sm:grid-cols-2 px-3 sm:px-20'>

        <div className='relative overflow-hidden pt-16'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <Image
                src={menuImage1.src}
                alt='App screenshot'
                className='mb-[-12%] rounded-md sm:rounded-xl shadow-2xl ring-1 ring-gray-900/10'
                width={2032}
                height={1242}
              />
              <div className='relative' aria-hidden='true'>
                <div className='absolute -inset-x-20 bottom-0 sm:bg-gradient-to-t sm:from-white lg:pt-[4%]' />
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden pt-16'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <Image
                src={menuImage2.src}
                alt='App screenshot'
                className='mb-[-12%] rounded-md sm:rounded-xl  shadow-2xl ring-1 ring-gray-900/10'
                width={1932}
                height={1242}
              />
              <div className='relative' aria-hidden='true'>
                <div className='absolute top-20 -inset-x-20 bottom-0 bg-gradient-to-t from-marigold pt-[7%]' />
              </div>
            </div>
          </div>
          </div>
        </section>
        <div class="lg:flex lg:items-center rounded-md h-100 w-100 justify-center text-center pt-8 ">
          <a class="mt-0 pt-4 sm:pt-6 text-3xl font-bold tracking-tight  sm:text-7xl text-white ">Breakfast</a></div>
        <div id="gallery" className='sm:grid sm:grid-cols-2 px-3 sm:px-20 sm:pt-20  pb-8'>
        <div class="hidden lg:hidden flex lg:items-center bg-black rounded-md h-100 w-100 my-4">   <div className="cols-3">
          <div className='mx-auto max-w-7xl px-6 lg:px-8 '>
                <Image
                  src={breakfast.src}
                  alt='App screenshot'
                  className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'
                  width={1532}
                  height={1042}
                />
              </div>
          </div>
        </div>
      
          <div className="cols-1">    
            <div id="gallery-lg" className="sr-only sm:not-sr-only "><Coffees/></div>
            <div id="gallery-sm " className="sm:hidden"><CoffeesSM/>  </div>
        </div>
            <div className="cols-2">
              <div className='mx-auto max-w-7xl px-6 lg:px-8 pb-4'>
                    <Image
                      src={image2.src}
                      alt='App screenshot'
                      className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'
                      width={1932}
                      height={1242}
                    />
                 
                  </div>
                  <div id="last-breafast-image-price" className="mt-12 sm:mt-24 mx-20 sm:px-20">
                        <h3 class="mt-6 mb-2 text-xl text-gray-100">Baggle + Coffee</h3>
                  <p className=' -mt-4 sm:-mt-0 text-lg font-medium text-gray-100/90'>
                $9
              </p>
                  </div>
            
              </div>
             
              <div className="cols-3 hidden">
              <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <Image
                      src={breakfast.src}
                      alt='App screenshot'
                      className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'
                      width={1932}
                      height={1242}
                    />
                 
                  </div>
               
              </div>
          </div>
     
        </div>


        <section id="featured" ref={FeaturedRef} className='mt-0 sm:mt-0 linen'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
            <div class="justify-center text-center pt-10  flex lg:items-center">
            <a className='mt-0 pt-4 sm:pt-10   text-3xl font-bold tracking-tight text-slate-700 sm:text-7xl'>
               Featured Coffees
              </a>
              <div className='ml-2 sm:ml-4 mt-6 sm:mt-4 lg:mt-14   rounded-full bg-sky-500 px-2  text-xs   periwinkle text-white h-6 '>new</div></div>
             <div className='inline-flex  justify-center justify-itens-center text-center'>
              
           
              </div>

              <p className='-mt-4 sm:-mt-0  text-lg leading-8text-gray-100 text-slate-600 text-center '>
               Some of our newly arrived fair trade coffes. 
            
              </p>
            </div>
          </div>
          <div id="featured-coffees-images" className='sm:grid sm:grid-cols-2 px-3 pb-20 sm:pb-44 sm:px-20'>
            <div className='relative overflow-hidden pt-16'>
                  <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <Image
                      src={featured1.src}
                      alt='App screenshot'
                      className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'
                      width={2032}
                      height={1242}
                    />
                    <div className='relative' aria-hidden='true'>
                      {/* <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-marigold  pt-[7%]' /> */}
                    </div>
                  </div>
                </div>
                <div className='relative overflow-hidden pt-16'>
                  <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <Image
                      src={featured2.src}
                      alt='App screenshot'
                      className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'
                      width={1932}
                      height={1242}
                    />
                    
                    <div className='relative' aria-hidden='true'>
                      <div className='absolute top-20 -inset-x-20 bottom-0 bg-gradient-to-t from-marigold pt-[7%]' />
                    </div>
                  </div>
                </div>
                </div>
        </section>

        {/* Testimonial section */}
        <div className='relative z-10 sm:mt-32 bg-gray-900 pb-20 sm:mt-0.5 sm:pb-24 xl:pb-0 periwinkle '>
          <div className='absolute inset-0 overflow-hidden' aria-hidden='true'>
            <div className='absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl'>
              <div
                className='aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25'
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
          {/* TESTIMONIAL */}
          <div className='mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch '>
            <div className='-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none'>
              <div className='relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto'>
                <Image
                  className='absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl'
                  src={TestimonialImage}
                  alt=''
                  height={1000}
                  width={1000}
                />
              </div>
              
            </div>
            <div className='w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24'>
              <figure className='relative isolate pt-6 sm:pt-12'>
            
                <blockquote className='text-xl font-semibold leading-8 text-slate-100 sm:text-2xl sm:leading-9'>
                  <p>
                  I&apos;ve been coming to <em className="text-white text-xl">Sojourner</em> coffee shop for 2 years, and the quality of the coffee and service has never wavered. The baristas are always friendly and knowledgeable, and the atmosphere is perfect for getting work done or catching up with friends
                  </p>
                </blockquote>
                <figcaption className='mt-8 text-base'>
                  <div className='font-semibold text-white'>Judith Samake</div>
                  <div className='-mt-1 text-gray-300/80'>Harlem Resident</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div id="about" className='relative isolate mt-12 bg-white px-6 sm:mt-56 lg:px-8 pb-20 '>
          <div
            className='absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl'
            aria-hidden='true'
          >
           
          </div>
          <div className='mx-auto max-w-4xl text-center lg:max-w-6xl'>

            <h2 className='text-base font-semibold leading-7 text-indigo-600'>
             About Sojourner Coffee
            </h2>
            <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:pb-20 '>
              The right place for you, whoever you are.
            </p>
            <div
          id="soujpourner-giff"
          className=" mt-10 max-w-7xl sm:mt-20 lg:px-2 "
        >
          <div className="mx-auto max-w-2xl sm:pl-6 lg:mx-0 max-w-none">
          
            <div className="mt-6 flex flex-col gap-y-20 gap-x-8 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto lg:-mt-20 lg:pr-10 ">
                <p className="hidden lg:flex text-xl  text-left leading-8 text-gray-600 dark:text-slate-300">
               Soujpourney is a small coffe shop that was establishe in 2019 by ... It initially was called &quot;wiioop &quot;then later .I worked in the coffee industry for years , and shared a deep passion for coffee. I loved the way it brought people together and the sense of community it fostered. I  dreamed of opening my own coffee shop, a place where people could gather and connect over their shared love of coffee.

But life had other plans, and I found found my....

             
                  <br />
               
                </p>  <Link id="about-LG-btn"
                    className="hidden lg:inline-flex justify-left place-content-start group mx-2 mt-4  h-9 perinwinkle-text
                    items-center whitespace-nowrap rounded-full 
                   px-3 text-sm font-semibold text-white 
                    hover:bg-slate-200 hover:text-indigo-300 
                    :outline-none focus:ring-2
                     focus:ring-indigo-500 periwinkle"
                    href="/about"
                  >
                  Read More

                    <svg
                      className="overflow-visible ml-3 text-indigo-100/80 group-hover:text-indigo-400  dark:group-hover:text-slate-400"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </Link>
                <div id="watch-more" className="min-[700px]:hidden"></div>
              </div>
              <div className="m:max-w-2xl -mt-20 hidden  sm:flex">
                <div className="player-wrapper  rounded-md">
                  {/* <video
                    className="player-wrapper mr-4 rounded-md"
                    controls
                    src={'/amazing_kids_profile__alexis_page-540p.mp4'}
                    style={{ minWidth: 560, height: '400px' }}
                  /> */}
                    <Image src={AboutSojourney} alt="video of sojourney"  style={{ minWidth: 360, height: '700px' }}/>
                </div>

                <h4 id="about-btn-hidden-at-Large" className="mt-2 text-base  tracking-tight text-gray-500 dark:text-slate-200 sm:hidden sm:text-2xl ">
          
                  <Link
                    class="group mx-2 mt-4 inline-flex h-9 items-center
                     whitespace-nowrap rounded-full px-3 text-sm font-semibold 
                    text-white hover:bg-slate-400 hover:text-indigo-700 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-600
                     dark:hover:text-white dark:focus:ring-slate-500 periwinkle"
                    href="/videos"
                  >
                Read More
           
                    <svg
                      class="ml-3 overflow-visible text-white group-hover:text-white"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </Link>
                </h4>
              </div>
              <div
                id="mobile-video"
                className="player-wrapper -mt-20 rounded-md sm:hidden"
              >
              <Image src={AboutSojourney} alt="video ofsojourney-mobile"  style={{ minWidth: 340, height: '400px' }}/>
                {/* <video
                  className="player-wrapper mr-4 rounded-md"
                  controls
                  src={'/public/IMG_6300.MOV'}
                  style={{ minWidth: '320px', height: '330px' }}
                /> */}
                <h4 className="text-basetracking-tight mt-2 hidden  text-gray-500 dark:text-slate-200 sm:text-2xl">
                  Watch More videos on the Videos page{' '}
                  <Link
                    class="group mx-2 mt-4 inline-flex h-9 items-center whitespace-nowrap rounded-full bg-black px-3 text-sm font-semibold text-white hover:bg-slate-400 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 xl:bg-transparent"
                    href="/videos"
                  >
                    See Videos
                    <span class="sr-only">Visit the videos page</span>
                    <svg
                      class="ml-3 overflow-visible text-white group-hover:text-white dark:text-black dark:group-hover:text-slate-400"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
          </div>
          <p className="lg:hidden text-left leading-8 text-gray-600 dark:text-slate-300 pt-10 ">
          Soujpourney is a small coffe shop that was establishe in 2019 by ... It initially was called &apos;wiioop&apos; then later ....  . I loved the way it brought people together and the sense of community it fostered. I  dreamed of opening my own coffee shop, a place where people could gather and connect over their shared love of coffee...  
                  <br />
             </p>    

           <h4 id="last-btn" className="text-basetracking-tight mt-2 text-gray-500  sm:text-2xl lg:hidden">
              
                  <Link
                    className=" justify-left 
                    group mx-2 mt-4 inline-flex h-9  perinwinkle-text
                    items-center whitespace-nowrap rounded-full 
                    bg-black px-3 text-sm font-semibold text-white 
                    hover:bg-slate-400 hover:text-indigo-700 
                    :outline-none focus:ring-2
                     focus:ring-indigo-500 periwinkle"
                    href="/about"
                  >
                  Read More

                    <svg
                      class="ml-3 overflow-visible perinwinkle-text group-hover:text-black dark:text-black dark:group-hover:text-slate-400"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </Link>
                </h4>
          

          <h4 className="pt-10 px-4 sm:text-center">- James at the Sojourner</h4>
        </div>
<Location/>
      
      </main>

    </div>
  );
}
