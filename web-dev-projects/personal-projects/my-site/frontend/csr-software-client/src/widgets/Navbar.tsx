import Image from "next/image"
import Link from "next/link"
import { Button } from "./../components/ui/button"

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-background shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="relative w-8 h-8">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Arrow pointing to logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-12 h-12 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xs">Logo</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/docs" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Docs
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/settings" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Settings
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}