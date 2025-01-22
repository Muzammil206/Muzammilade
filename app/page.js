'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { About}  from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/project' 
import { Footer } from '@/components/footer'
import { Github, Linkedin, Twitter, Mail, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/#about' },
  { label: 'SKILLS', href: '/#skils' },
  { label: 'PROJECT', href: '/#projects' },
  { label: 'CONTACT', href: '/#contact' },
]

function NavLinks({ activePath, handleNavClick }) {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm tracking-wide transition-all duration-300 hover:text-blue-600 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ${
            activePath === item.href 
              ? "text-blue-600 after:w-full" 
              : "text-gray-600 after:w-0"
          } hover:after:w-full`}
          onClick={() => handleNavClick(item.href)}
        >
          {item.label}
        </Link>
      ))}
    </>
  )
}

export default function Home() {
  const [activePath, setActivePath] = useState('/')

  const handleNavClick = (href) => {
    setActivePath(href)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 w-full py-6 px-4 md:px-6 flex items-center justify-between bg-white/80 backdrop-blur-sm z-50">
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-lg font-medium group"
          onClick={() => handleNavClick('/')}
        >
          <span className="text-blue-600 font-mono">/ML</span>
          <span className="group-hover:text-blue-600 transition-colors">MuzammilAde</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks activePath={activePath} handleNavClick={handleNavClick} />
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden p-2 hover:bg-gray-100 rounded-md">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[280px]">
            <nav className="flex flex-col space-y-4 mt-6">
              <NavLinks activePath={activePath} handleNavClick={handleNavClick} />
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      
      <section className=" pt-12  lg:pt-24 min-h-screen flex items-center">
        <div className="container w-full px-[10%] lg:px-[10%] flex md:flex-row flex-col-reverse md:flex-row items-center justify-between">
          <div className="flex-1 space-y-8 md:pr-12 pt-6">
            <div className="space-y-4">
              <div className="relative inline-block">
                <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
                  HELLO, MY NAME IS
                </p>
                <div className="absolute bottom-[-4px] left-0 w-1/3 h-[2px] bg-blue-600" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Ismail Muzammil
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Software / Gis Developer
              </p>
            </div>
            
            <p className="max-w-[600px] text-gray-600 leading-relaxed">
            I am a passionate  software and geospatial developer with expertise in GIS, remote sensing,
             and web-based geospatial solutions. With a BSc in Geoinformatics and
            over three years of experience in software development, I specialize in creating
             innovative geospatial applications
             using tools like PostgreSQL, PostGIS, QGIS, Mapbox, and the ArcGIS JavaScript API etc...
            </p>

            <div className="flex items-center space-x-6">
              <Link 
                href="https://github.com/muzammil206" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/in/ismail-muzammil-50543323a" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="https://twitter.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link 
                href="mailto:ismailmuzammil206@gmail.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="flex-1 mt-[-4] md:mt-0">
            <div className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden bg-gray-100">
              <Image
                src="/ade.jpg"
                alt="Profile picture"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>
       <About/>
       <Skills/>
       <Projects/>
       <Footer/>

    </main>
  )
}

