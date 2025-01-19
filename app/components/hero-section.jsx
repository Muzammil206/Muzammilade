'use client'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">
              HELLO, MY NAME IS
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Your Next Frontend Developer
            </p>
          </div>
          
          <p className="max-w-[600px] text-muted-foreground">
            As a passionate frontend developer, I specialize in turning visionary concepts into stunning, 
            user-friendly web applications. Let's collaborate to bring your ideas to life and create 
            solutions that make a difference in the world.
          </p>

          <div className="flex items-center space-x-4">
            <Link href="https://github.com/muzammil206" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" className= "text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:ismailmuzammil206@email.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex-referse">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-muted">
            <Image
              src="/placeholder.svg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

