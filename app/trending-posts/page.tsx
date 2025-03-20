"use client"

import { useEffect, useState } from "react"
import type { Post } from "@/lib/types"
import { fetchPosts } from "@/lib/api"
import PostCard from "@/components/post-card"
import LoadingSpinner from "@/components/loading-spinner"

export default function TrendingPostsPage() {
  const [trendingPosts, setTrendingPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getTrendingPosts = async () => {
      try {
        setLoading(true)
        const posts = await fetchPosts()

        // Find maximum comment count
        let maxComments = 0
        posts.forEach((post) => {
          if (post.comments.length > maxComments) {
            maxComments = post.comments.length
          }
        })

        // Filter posts with maximum comment count
        const trending = posts.filter((post) => post.comments.length === maxComments)

        setTrendingPosts(trending)
        setError(null)
      } catch (err) {
        setError("Failed to load trending posts. Please try again.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getTrendingPosts()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Trending Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingPosts.map((post) => (
          <PostCard key={post.id} post={post} highlight />
        ))}
      </div>

      {trendingPosts.length === 0 && <p className="text-center py-10 text-gray-500">No trending posts available.</p>}
    </div>
  )
}

