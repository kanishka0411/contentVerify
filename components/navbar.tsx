"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Shield, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Shield className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">ContentVerify.AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/verify" className="text-foreground/60 hover:text-foreground">
              Verify Content
            </Link>
            <Link href="/dashboard" className="text-foreground/60 hover:text-foreground">
              Dashboard
            </Link>
            <Link href="/pricing" className="text-foreground/60 hover:text-foreground">
              Pricing
            </Link>
            <ModeToggle />
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-foreground/60"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/verify"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/60 hover:text-foreground"
            >
              Verify Content
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/60 hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/60 hover:text-foreground"
            >
              Pricing
            </Link>
            <div className="px-3 py-2">
              <ModeToggle />
            </div>
            <div className="px-3 py-2">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}