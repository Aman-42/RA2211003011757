"use client"

import { useEffect, useState } from "react"
import type { User } from "@/lib/types"
import { fetchPosts } from "@/lib/api"
import UserCard from "@/components/user-card"
import LoadingSpinner from "@/components/loading-spinner"

export default function TopUsersPage() {
  const [topUsers, setTopUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getTopUsers = async () => {
      try {
        setLoading(true)
        const posts = await fetchPosts()

        // Count posts by user
        const userPostCounts = posts.reduce((acc: Record<string, any>, post) => {
          const userId = post.userId

          if (!acc[userId]) {
            acc[userId] = {
              id: userId,
              name: post.userName,
              postCount: 0,
              avatarUrl: `/placeholder.svg?height=100&width=100&text=${post.userName.charAt(0)}`,
            }
          }

          acc[userId].postCount += 1
          return acc
        }, {})

        // Convert to array and sort by post count
        const sortedUsers = Object.values(userPostCounts)
          .sort((a: any, b: any) => b.postCount - a.postCount)
          .slice(0, 5) // Get top 5

        setTopUsers(sortedUsers as User[])
        setError(null)
      } catch (err) {
        setError("Failed to load top users. Please try again.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getTopUsers()
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
      <h1 className="text-3xl font-bold">Top Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {topUsers.length === 0 && <p className="text-center py-10 text-gray-500">No user data available.</p>}
    </div>
  )
}

