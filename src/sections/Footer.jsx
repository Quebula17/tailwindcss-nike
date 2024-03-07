import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className='max-container'>  
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} alt="footer-logo" height={46} width={150}/>
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>

          <div className='flex mt-8 items-center gap-5'>
            {socialMedia.map((item) => (

              <div key={item.alt} className='flex justify-center items-center w-12 h-12 rounded-full bg-white'>
                <img src={item.src} alt={item.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            {footerLinks.map((item) => (
              <div key={item}>
                <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                  {item.title}
                </h4>
                  <ul>
                    {item.links.map((link) => (
                      <li key={link.name} className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray'>
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
              </div>
            ))}
        </div>
      </div>

      <div className='mt-24 flex justify-between text-white-400 mt-400 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center font-montserrat cursor-pointer gap-2'>
          <img src={copyrightSign} alt="aopyright" width={20} height={20} className='rounded-full m-0'/>
          <p>
            Copyright. All rights reserved.
          </p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms and Conditions</p>
      </div>
    </footer>
  )
}

export default Footer