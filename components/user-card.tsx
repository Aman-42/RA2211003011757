import Image from "next/image"
import type { User } from "@/lib/types"
import { FileText } from "lucide-react"

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200 mr-4">
            <Image
              src={user.avatarUrl || "/placeholder.svg"}
              alt={user.name}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{user.name}</h3>
            <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400">
              <FileText className="w-4 h-4 mr-1" />
              <span>{user.postCount} posts</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="relative pt-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                  Activity Score
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                  {Math.min(100, user.postCount * 10)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mt-1 text-xs flex rounded bg-blue-200 dark:bg-blue-900/30">
              <div
                style={{ width: `${Math.min(100, user.postCount * 10)}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 text-center">
          <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">Engagement</span>
            <span className="block text-lg font-semibold text-gray-900 dark:text-white">
              {Math.floor(Math.random() * 100)}%
            </span>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">Influence</span>
            <span className="block text-lg font-semibold text-gray-900 dark:text-white">
              {Math.floor(Math.random() * 1000)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

