export interface Comment {
  id: string
  postId: string
  userId: string
  userName: string
  content: string
  timestamp: string
}

export interface Post {
  id: string
  userId: string
  userName: string
  content: string
  timestamp: string
  comments: Comment[]
}

export interface User {
  id: string
  name: string
  postCount: number
  avatarUrl: string
}

