import Image from "next/image";
import nocontent from '@/images/noContent.webp'
import clsx from "clsx";
export default function NoContent({message}) {
  return  <div id="nocontent-main-WRAPPER" className={clsx(message.theme ?? "relative marigold")}>

  <div className="flexmt-64 justify-center text-center items-center pt-64 sm:pt-44 pb-36 sm:pb-0">
     <h1 className="nocontent-code ">{message.code}</h1>
   <h2  className="nocontent-text-h1" >{message.text}</h2></div> 
   <div className="nocontent-image"><Image src={nocontent} alt="No Content" height={400} width={500} /></div> 
   </div>

}