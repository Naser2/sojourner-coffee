import Link from 'next/link';
import {Container} from './Container';
import {   InstagramIcon,
    TwitterIcon,
    LinkedInIcon,
  } from './SocialIcons'
  
function SocialLink({ icon: Icon, ...props }) {
    return (
      <Link className="group -m-1 p-1" {...props}>
        <Icon className="h-6 w-6 fill-indigo-300/70 transition group-hover:fill-sky-600 dark:fill-sky-400 dark:group-hover:fill-sky-600" />
      </Link>
    )
  }
 const SocialMediaHandles = () => {
   return <Container className="mt-4 md:mt-8">
         <div className="max-w-2xl">
        <div className="mt-6 flex gap-6 ">
          <SocialLink
            href="https://twitter.com"
            aria-label="Follow on Twitter"
            icon={TwitterIcon}
          />
          <SocialLink
            href="https://instagram.com"
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
          <SocialLink
            href="https://linkedin.com"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </Container>
}

export default  SocialMediaHandles 