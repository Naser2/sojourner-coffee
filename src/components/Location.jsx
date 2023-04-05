

import LocationImage from '@/images/location-Image.png';
import LocationImageSm from '@/images/location-Image-Small.png';
import Image from 'next/image';
import Link  from 'next/link';
export default function Location() {
        return (
          <div className="bg-black  border-b border-b-indigo-200">
            <div className="mx-auto max-w-7xl py-24">
             
             <div id="location-detail-wrappeer" className="w-full  sm:px-6 sm:pt-12  sm:pb-12 lg:px-8 periwinkle\">
             {/* <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Address
                    </h2> */}
               <div className="relative isolate overflow-hidden periwinkle px-0 pt-10 shadow-2xl sm:px-0 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg
                  viewBox="0 0 1024 1024"
                  className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]
                   sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                  aria-hidden="true"
                >
                  <circle cx={512} cy={512} r={512} fill="url(#8EA3C5)" fillOpacity="0.7" />
                  <defs>
                    <radialGradient id="8EA3C5">
                      <stop stopColor="#8EA3C5" />
                      <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                  </defs>
                </svg>
         
                <div className="text-left
                mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left pb-6 ">  
                     <h2 class="text-3xl font-bold tracking-tight sm:text-4xl   sm:px-6 lg:px-8 font-semibold leading-7 text-indigo-50">Sojourner Coffee</h2>  
                 <h2 className="text-base font-semibold leading-7 text-indigo-200 sm:px-6 lg:px-8 px-4 ">
                    #harlemsojourner
                    </h2>
                    <br />
                   <h2 class="text-3xl font-bold tracking-tight sm:text-4xl   sm:px-6 lg:px-8 font-semibold leading-7 text-indigo-50">Our Location:</h2>
                 
                  
                    <Link className="text-2xl font-bold tracking-tight text-white sm:text-4xl sm:px-6 lg:px-8 px-4"  href={locationHref}>
                  137 West 116th Street New York NY
                    </Link>    <br />   
                    <div className="flex mt-6">
                      <Link className=" text-md leading-8 text-gray-300 px-4  sm:px-6 lg:px-8" href={locationHref}>
                          (Located on 116th Street Between Adam Clayton Powell && Lenox)  
                      </Link>
                      <div href="#" className="text-sm font-semibold leading-6 text-white -ml-4 sm:-ml-0 px-4 ">
                        <span aria-hidden="true">→</span>
                      </div>
                    </div>  
                </div>
                <div className="relative mt-0 h-80 lg:mt-0">
                  <Image 
                    className="max-[600px]:hidden  absolute left-0 top-0 w-[57rem] max-w-none rounded-l- rounded-l-md bg-white/5 ring-1 ring-white/10"
                    src={LocationImage.src}
                    alt="desktop-map"
                    width={1824}
                    height={2180}
                  />
                     <Image
                    className="min-[600px]:hidden absolute left-0 top-0 w-[45rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                    src={LocationImageSm.src}
                    alt="mobile-map"
                    width={1624}
                    height={2480}
                  />
                </div>
              </div>

             </div>
             

            </div>
          </div>
        )
      }


      const locationHref = "https://www.google.com/maps/place/Freeland+Liquors,+Inc./@40.8029604,-73.9507201,17.63z/data=!4m14!1m7!3m6!1s0x89c2f7832df2e2b3:0x5fc1b216d9289a8e!2sSojourner+Coffee!8m2!3d40.8029381!4d-73.9511595!16s%2Fg%2F11q3lwm5cv!3m5!1s0x89c2f7e9f8f2872d:0x7b02a074a2859e96!8m2!3d40.8035704!4d-73.9481517!16s%2Fg%2F11fhqj1t94"