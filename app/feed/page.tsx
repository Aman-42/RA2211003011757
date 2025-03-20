"use client"

import { useEffect, useState } from "react"
import PostCard from "@/components/post-card"
import type { Post } from "@/lib/types"
import { fetchPosts } from "@/lib/api"
import LoadingSpinner from "@/components/loading-spinner"

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true)
        const data = await fetchPosts()
        // Sort by newest first
        const sortedPosts = [...data].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        setPosts(sortedPosts)
        setError(null)
      } catch (err) {
        setError("Failed to load posts. Please try again.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()

    // Set up polling for real-time updates
    const intervalId = setInterval(loadPosts, 30000) // Poll every 30 seconds

    return () => clearInterval(intervalId)
  }, [])

  if (loading && posts.length === 0) {
    return <LoadingSpinner />
  }

  if (error && posts.length === 0) {
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
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Latest Posts</h1>
        {loading && <span className="text-sm text-gray-500">Refreshing...</span>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {posts.length === 0 && !loading && <p className="text-center py-10 text-gray-500">No posts available.</p>}
    </div>
  )
}

