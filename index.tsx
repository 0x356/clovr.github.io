'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Leaf, ArrowRight, Camera, Star, Megaphone, LineChart, Instagram, Mail, BarChart, Users, DollarSign, Quote } from "lucide-react"
import Link from "next/link"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 ${inter.className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="header-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(10)">
              <path d="M0 0L20 10L0 20Z" fill="rgba(99, 102, 241, 0.05)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#header-pattern)" />
        </svg>
      </div>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-indigo-600" />
              <span className="text-2xl font-bold text-indigo-600">Clovr</span>
            </Link>
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              Apply Now
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 relative">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                  Elevate Your Clothing Brand
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
                  Clovr Marketing propels clothing brands to new heights with cutting-edge strategies and data-driven solutions.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Our Services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { icon: Camera, title: "Professional Photoshoots", description: "High-quality visuals to showcase your products." },
                { icon: Star, title: "Influencer Marketing", description: "Collaborate with key influencers to boost brand awareness." },
                { icon: Megaphone, title: "Paid Advertising", description: "Strategic ad campaigns to drive traffic and sales." },
                { icon: LineChart, title: "Growth Strategy", description: "Comprehensive plans for sustainable business growth." },
                { icon: Instagram, title: "Social Media Marketing", description: "Engaging content and community management across platforms." },
                { icon: Mail, title: "Email Marketing Campaigns", description: "Targeted email strategies to nurture leads and boost sales." }
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-100 to-purple-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Our Results
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                { icon: BarChart, stat: "300%", description: "Average growth in sales" },
                { icon: Users, stat: "1M+", description: "New customers reached" },
                { icon: DollarSign, stat: "$50M+", description: "Revenue generated for clients" }
              ].map((result, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <result.icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">{result.stat}</h3>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Our Clients
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="w-32 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold">
                    Logo {i}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-100 to-purple-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              What Our Clients Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                {
                  quote: "Clovr Marketing transformed our brand. Our sales have skyrocketed since working with them.",
                  author: "Jane Doe",
                  company: "FashionFwd"
                },
                {
                  quote: "The team at Clovr truly understands the clothing industry. Their strategies are unmatched.",
                  author: "John Smith",
                  company: "UrbanThreads"
                },
                {
                  quote: "We've seen incredible growth thanks to Clovr's data-driven approach. Highly recommended!",
                  author: "Emily Johnson",
                  company: "EcoWear"
                },
                {
                  quote: "Clovr's email marketing campaigns have significantly boosted our customer engagement and sales.",
                  author: "Michael Brown",
                  company: "StreetStyle Co."
                },
                {
                  quote: "The professional photoshoots organized by Clovr have elevated our brand image tremendously.",
                  author: "Sarah Lee",
                  company: "Chic Boutique"
                },
                {
                  quote: "Their influencer marketing strategy helped us reach new audiences we never thought possible.",
                  author: "David Wilson",
                  company: "TrendSetters"
                },
                {
                  quote: "Clovr's paid advertising campaigns have delivered an exceptional ROI for our brand.",
                  author: "Lisa Chen",
                  company: "ModernWear"
                }
              ].map((testimonial, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <Quote className="h-8 w-8 text-indigo-600 mb-4" />
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  question: "What makes Clovr Marketing different from other agencies?",
                  answer: "Clovr Marketing specializes in the clothing industry, offering tailored strategies and data-driven solutions specifically designed for fashion brands. Our deep understanding of the market, combined with our innovative approach, sets us apart."
                },
                {
                  question: "How long does it typically take to see results?",
                  answer: "While results can vary depending on the specific goals and market conditions, most of our clients start seeing significant improvements within 3-6 months. We provide regular updates and analytics to track progress throughout our engagement."
                },
                {
                  question: "Do you work with startups or only established brands?",
                  answer: "We work with clothing brands at all stages, from startups to established companies. Our strategies are tailored to each client's unique needs and growth stage, ensuring we provide value regardless of the brand's size or market position."
                },
                {
                  question: "What kind of ROI can I expect?",
                  answer: "ROI varies based on multiple factors, but on average, our clients see a 3x return on their marketing investment within the first year. We work closely with each brand to set realistic goals and maximize their return."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left hover:text-indigo-600 transition-colors">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-100 to-purple-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                  Ready to Scale Your Brand?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Join the growing list of clothing brands that have transformed their business with Clovr Marketing.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 border-indigo-600 focus:ring-indigo-600"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors" type="submit">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-600">© 2024 Clovr Marketing. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:text-indigo-600 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:text-indigo-600 transition-colors" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
