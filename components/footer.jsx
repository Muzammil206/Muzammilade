'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { useToast } from "@/hooks/use-toast"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      })
      const [isSubmitting, setIsSubmitting] = useState(false)
      const { toast } = useToast()
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
    
        
        await new Promise((resolve) => setTimeout(resolve, 1000))
    
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
    
        setFormData({ name: "", email: "", message: "" })
        setIsSubmitting(false)
      }
    
  return (
    <footer id="contact" className="bg-gray-100 py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>Send me a message and I'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full min-h-[100px]"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <p className="text-gray-600 mb-4">Feel free to reach out for collaborations or just a friendly hello!</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/muzammil206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ismail-muzammil-50543323a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="mailto:ismailmuzammil206@email.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Abuja</h3>
              <p className="text-gray-600">FCT , Nigeria</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} ismail muzammil. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

