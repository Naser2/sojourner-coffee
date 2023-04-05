import Image from "next/image";
import soujourneyGif from '@/images/ezgif-2-6f2ce03eea.gif'
import Link from "next/link";

export default function  About(){
    return    <div className='relative isolate py-32 bg-white px-6 sm:py-44 lg:px-8 periwinkle'>
    <div
      className='absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl'
      aria-hidden='true'
    >
     
    </div>
    <div className='mx-auto max-w-4xl text-center lg:max-w-6xl'>

    <p className='mt-2 text-4xl  text-indigo-100 font-bold tracking-tight  sm:text-7xl lg:pb-20 '>
       About <span className='leading-7 text-white italic'>Sojourner Coffee</span>
      </p>
     
      <div
    id="soujpourner-giff"
    className=" mt-10 max-w-7xl sm:mt-20 lg:px-2 "
  >
    <div className="mx-auto max-w-2xl sm:pl-6 lg:mx-0 max-w-none">
    
      <div className="mt-6 flex flex-col gap-y-20 gap-x-8 lg:flex-row">
        <div className="lg:w-full lg:max-w-2xl lg:flex-auto lg:-mt-20 lg:pr-10 ">
          <p className="hidden lg:flex text-xl  text-left leading-8 text-gray-600 dark:text-slate-300">
          I worked in the coffee industry for years , and shared a deep passion for coffee. I loved the way it brought people together and the sense of community it fostered. I  dreamed of opening my own coffee shop, a place where people could gather and connect over their shared love of coffee...  
            <br />
            <br />
           Life had other plans, and I found found myself facing one challenge after another.  I struggled to save up enough money to start my business, and even when I  did, they faced setbacks and obstacles at every turn. It seemed like My dream would never come to fruition.
            <br/>
            Me and my  then-girlfriend refused refused to give up. We knew that our vision for a coffee shop was more than just a business idea - it was a way to bring joy and happiness to their community. We worked tirelessly, day and night, to make their dream a reality.
            <br/> <br/>
    Finally, after months of hard work and perseverance, we opened our coffee shop and we named it “Sojourner. Coffee”. 
<br/><br/><br/>We were nervous and uncertain about how it would be received, but to our  surprise, it quickly became a beloved gathering place for the West  harlem community. 
People from all walks of life came together over a cup of coffee, sharing stories, laughter, and love.
Today, our coffee shop is a thriving business, but more importantly, it&apos;s a testament to the power of hard work, perseverance, and the belief that anything is possible if you&apos;re willing to chase your dreams.

          </p>
          
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
              <Image src={soujourneyGif} alt="video-of-sojourney"  style={{ minWidth: 560, height: '700px' }}/>
          </div>

          <h4 className="mt-2 text-base  tracking-tight text-gray-500 dark:text-slate-200 sm:hidden sm:text-2xl">
            {/* Watch More videos on the Videos page{' '} */}
           
          </h4>
        </div>
        <div
          id="mobile-video"
          className="player-wrapper -mt-20 rounded-md sm:hidden"
        >
        <Image src={soujourneyGif} alt="video-of-sojourney"  style={{ minWidth: 340, height: '460px' }}/>
          {/* <video
            className="player-wrapper mr-4 rounded-md"
            controls
            src={'/public/IMG_6300.MOV'}
            style={{ minWidth: '320px', height: '330px' }}
          /> */}
         
        </div>
      </div>
    </div>
  </div>
    </div>
    <p className="lg:hidden text-left mt-10 leading-8 text-gray-600 dark:text-slate-300">
  
          I worked in the coffee industry for years , and shared a deep passion for coffee. I loved the way it brought people together and the sense of community it fostered. I  dreamed of opening my own coffee shop, a place where people could gather and connect over their shared love of coffee...  
            <br />
            <br />
           Life had other plans, and I found found myself facing one challenge after another.  I struggled to save up enough money to start my business, and even when I  did, they faced setbacks and obstacles at every turn. It seemed like My dream would never come to fruition.
            <br/>
            Me and my  then-girlfriend refused refused to give up. We knew that our vision for a coffee shop was more than just a business idea - it was a way to bring joy and happiness to their community. We worked tirelessly, day and night, to make their dream a reality.
            <br/> <br/>
    Finally, after months of hard work and perseverance, we opened our coffee shop and we named it “Sojourner. Coffee”. 
<br/><br/>We were nervous and uncertain about how it would be received, but to our  surprise, it quickly became a beloved gathering place for the West  harlem community. 
People from all walks of life came together over a cup of coffee, sharing stories, laughter, and love.
Today, our coffee shop is a thriving business, but more importantly, it&apos;s a testament to the power of hard work, perseverance, and the belief that anything is possible if you&apos;re willing to chase your dreams.

   
       </p>    

<h4 className="pt-10 px-4 sm:text-center">- The Sojourner Coffee</h4>
  </div>
}