import React from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [activelink, setActiveLink] = React.useState('#home')

    const navItem = [
        { href: '#home', label:'Home' },
        { href: '#about', label:'About Us' },
        { href: '#services', label:'Our services' },
        { href: '#testimonials', label:'Testimonials' },
        
    ]

  return (
    <nav className= "fixed top-0 left-0 right-0  bg-white-/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="w-full container mx-auto flex justify-between items-center px-4 lg:px-8 sm:px-6  h-20">
              {/* Logo Section */}
            <div className='flex items-center gap-1 cursor-pointer'>
                <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                <div className="w-4 h-4 -ml-2 bg-red-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Mobile menu buton */}
            <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className ='lg:hidden md:hidden p-2'>
                {
                    isMenuOpen ? <HiX className ='size-6'></HiX> : <HiMenu></HiMenu>
                }
            </button>
            {/* deskto nav items */}
            <div className="hidden md:flex items-center gap-4">

                {
                    navItem.map((item,index) =>(
                        <a key={index} href={item.href} onClick={()=>setActiveLink(item.href)} className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activelink == item.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>{item.label}</a>
                    ))
                }
            </div>
            {/* get in touch */}
            <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                <a className="after:absolute after:left-0 after:bottom-0 after:bg-green-400" href="#newsletter">Get in Touch</a>
            </button>

            {/* Mobile menu */}

          
        </div>
        {/* Mobile Menu item */}
        {
            isMenuOpen &&(
                <div className='md:hidden lg:hidden bg-white border-t border-gray-100 py-4'>
                    <div className='container mx-auto px-4 space-y-2'>
                        {navItem.map((item,index)=>(
                            <a onClick={()=>{
                                setActiveLink(item.href)
                                setIsMenuOpen(false)
                            }} className='block text-sm font-medium py-2' key={index}>{item.label}</a>
                        ))}
                        <button className="md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                            <a className="after:absolute after:left-0 after:bottom-0 after:bg-green-400" href="#newsletter">Get in Touch</a>
                        </button>
                    </div>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar