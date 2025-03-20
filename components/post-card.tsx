import Image from "next/image"
import type { Post } from "@/lib/types"
import { MessageCircle, Heart, Share2 } from "lucide-react"

interface PostCardProps {
  post: Post
  highlight?: boolean
}

export default function PostCard({ post, highlight = false }: PostCardProps) {
  // Generate a random image for the post
  const imageId = Math.floor(Math.random() * 1000)
  const imageUrl = `/placeholder.svg?height=400&width=600&text=Post+${post.id}`

  // Format date
  const formattedDate = new Date(post.timestamp).toLocaleString()

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${
        highlight ? "ring-2 ring-blue-500" : ""
      }`}
    >
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 mr-3">
            <Image
              src={`/placeholder.svg?height=40&width=40&text=${post.userName.charAt(0)}`}
              alt={post.userName}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{post.userName}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{formattedDate}</p>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>

        <div className="relative h-48 mb-4 bg-gray-100 dark:bg-gray-700 rounded">
          <Image src={imageUrl || "/placeholder.svg"} alt="Post image" fill className="object-cover rounded" />
        </div>

        <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm">
          <div className="flex items-center">
            <Heart className="w-4 h-4 mr-1" />
            <span>{Math.floor(Math.random() * 100)}</span>
          </div>

          <div className="flex items-center">
            <MessageCircle className="w-4 h-4 mr-1" />
            <span>{post.comments.length} comments</span>
          </div>

          <div className="flex items-center">
            <Share2 className="w-4 h-4 mr-1" />
            <span>{Math.floor(Math.random() * 20)}</span>
          </div>
        </div>
      </div>

      {post.comments.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Top Comment</h4>
          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200 mr-2">
              <Image
                src={`/placeholder.svg?height=32&width=32&text=${post.comments[0].userName.charAt(0)}`}
                alt={post.comments[0].userName}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div>
              <h5 className="text-xs font-medium text-gray-900 dark:text-white">{post.comments[0].userName}</h5>
              <p className="text-xs text-gray-700 dark:text-gray-300">{post.comments[0].content}</p>
            </div>
          </div>

          {post.comments.length > 1 && (
            <p className="text-xs text-blue-500 mt-2 cursor-pointer hover:underline">
              View all {post.comments.length} comments
            </p>
          )}
        </div>
      )}

      {highlight && (
        <div className="bg-blue-50 dark:bg-blue-900/20 p-2 text-center">
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
            Trending Post • {post.comments.length} Comments
          </span>
        </div>
      )}
    </div>
  )
}

