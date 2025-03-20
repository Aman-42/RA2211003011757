"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, Users, Activity } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Feed",
      href: "/feed",
      icon: Activity,
    },
    {
      name: "Top Users",
      href: "/top-users",
      icon: Users,
    },
    {
      name: "Trending Posts",
      href: "/trending-posts",
      icon: BarChart,
    },
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Social Analytics</h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-3 text-xs">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center py-3 ${
                  isActive ? "text-blue-500" : "text-gray-600 dark:text-gray-400"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="mt-1">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

