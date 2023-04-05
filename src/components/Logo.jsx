import styles from './components.module.css'
import logo from '@/images/Badge-03-Periwinkle.svg'
// import signature from '@/images/sojourner-type-only-lavender.svg'
import signature from '@/images/Sojourner-Type-Only-Periwinkle.svg'
import Image from 'next/image'
export const Logo = () => {
    return (
      // <div className="tile-icon">
      <div>
        <div id="logo" draggable="false" className="logo">
        <Image src={logo.src}       alt='logo image svg' height={48} width={48}/>

        </div>
      </div>
    )
  }
  
  export const Signature = () => {
    return (
   
      <div>
        <div id="signature" draggable="false" className="signature">
          <Image src={signature.src}  alt='Signature image svg' height={32} width={116}/>
        </div>
        </div>
    
    )
  }
  