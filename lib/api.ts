import type { Post } from "./types"

// Mock data for development
const MOCK_DATA: Post[] = [
  {
    id: "post1",
    userId: "user1",
    userName: "John Doe",
    content: "This is my first post about social media analytics!",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    comments: [
      {
        id: "comment1",
        postId: "post1",
        userId: "user2",
        userName: "Jane Smith",
        content: "Great insights! Looking forward to more content.",
        timestamp: new Date(Date.now() - 1800000).toISOString(),
      },
      {
        id: "comment2",
        postId: "post1",
        userId: "user3",
        userName: "Bob Johnson",
        content: "I've been looking for analytics like this.",
        timestamp: new Date(Date.now() - 900000).toISOString(),
      },
      {
        id: "comment3",
        postId: "post1",
        userId: "user4",
        userName: "Alice Williams",
        content: "This is exactly what our team needed!",
        timestamp: new Date(Date.now() - 600000).toISOString(),
      },
    ],
  },
  {
    id: "post2",
    userId: "user2",
    userName: "Jane Smith",
    content: "Just published a new report on user engagement metrics.",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    comments: [
      {
        id: "comment4",
        postId: "post2",
        userId: "user1",
        userName: "John Doe",
        content: "This is really helpful for my current project.",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
      },
    ],
  },
  {
    id: "post3",
    userId: "user3",
    userName: "Bob Johnson",
    content: "Looking for recommendations on social media monitoring tools. Any suggestions?",
    timestamp: new Date(Date.now() - 10800000).toISOString(),
    comments: [
      {
        id: "comment5",
        postId: "post3",
        userId: "user4",
        userName: "Alice Williams",
        content: "We've been using Brand24 with great results.",
        timestamp: new Date(Date.now() - 9000000).toISOString(),
      },
      {
        id: "comment6",
        postId: "post3",
        userId: "user5",
        userName: "Charlie Brown",
        content: "Hootsuite has worked well for our team.",
        timestamp: new Date(Date.now() - 7200000).toISOString(),
      },
      {
        id: "comment7",
        postId: "post3",
        userId: "user1",
        userName: "John Doe",
        content: "I recommend trying Sprout Social.",
        timestamp: new Date(Date.now() - 5400000).toISOString(),
      },
    ],
  },
  {
    id: "post4",
    userId: "user1",
    userName: "John Doe",
    content: "Just released our Q2 social media performance report. Engagement up by 24%!",
    timestamp: new Date(Date.now() - 14400000).toISOString(),
    comments: [
      {
        id: "comment8",
        postId: "post4",
        userId: "user2",
        userName: "Jane Smith",
        content: "Impressive results! What strategies worked best?",
        timestamp: new Date(Date.now() - 12600000).toISOString(),
      },
      {
        id: "comment9",
        postId: "post4",
        userId: "user5",
        userName: "Charlie Brown",
        content: "Would love to hear more about your approach.",
        timestamp: new Date(Date.now() - 10800000).toISOString(),
      },
    ],
  },
  {
    id: "post5",
    userId: "user4",
    userName: "Alice Williams",
    content: "Hosting a webinar next week on social media ROI measurement. Link in bio to register!",
    timestamp: new Date(Date.now() - 18000000).toISOString(),
    comments: [
      {
        id: "comment10",
        postId: "post5",
        userId: "user3",
        userName: "Bob Johnson",
        content: "Just registered! Looking forward to it.",
        timestamp: new Date(Date.now() - 14400000).toISOString(),
      },
    ],
  },
  {
    id: "post6",
    userId: "user5",
    userName: "Charlie Brown",
    content: "New case study: How we increased client engagement by 45% using targeted content strategy.",
    timestamp: new Date(Date.now() - 21600000).toISOString(),
    comments: [],
  },
  {
    id: "post7",
    userId: "user2",
    userName: "Jane Smith",
    content: "What metrics do you find most valuable for measuring social media success?",
    timestamp: new Date(Date.now() - 25200000).toISOString(),
    comments: [
      {
        id: "comment11",
        postId: "post7",
        userId: "user1",
        userName: "John Doe",
        content: "Engagement rate and conversion tracking are key for us.",
        timestamp: new Date(Date.now() - 21600000).toISOString(),
      },
      {
        id: "comment12",
        postId: "post7",
        userId: "user4",
        userName: "Alice Williams",
        content: "We focus on reach, engagement, and sentiment analysis.",
        timestamp: new Date(Date.now() - 18000000).toISOString(),
      },
      {
        id: "comment13",
        postId: "post7",
        userId: "user3",
        userName: "Bob Johnson",
        content: "ROI and customer acquisition cost are our primary metrics.",
        timestamp: new Date(Date.now() - 14400000).toISOString(),
      },
    ],
  },
  {
    id: "post8",
    userId: "user3",
    userName: "Bob Johnson",
    content: "Just hit 10k followers on our company page! Thanks to everyone for the support.",
    timestamp: new Date(Date.now() - 28800000).toISOString(),
    comments: [
      {
        id: "comment14",
        postId: "post8",
        userId: "user5",
        userName: "Charlie Brown",
        content: "Congratulations! Well deserved.",
        timestamp: new Date(Date.now() - 25200000).toISOString(),
      },
    ],
  },
  {
    id: "post9",
    userId: "user1",
    userName: "John Doe",
    content: "Analyzing the impact of Instagram's algorithm changes on brand visibility.",
    timestamp: new Date(Date.now() - 32400000).toISOString(),
    comments: [
      {
        id: "comment15",
        postId: "post9",
        userId: "user2",
        userName: "Jane Smith",
        content: "We've seen a 15% drop in organic reach since the update.",
        timestamp: new Date(Date.now() - 28800000).toISOString(),
      },
      {
        id: "comment16",
        postId: "post9",
        userId: "user4",
        userName: "Alice Williams",
        content: "Video content seems to be performing better than static posts now.",
        timestamp: new Date(Date.now() - 25200000).toISOString(),
      },
    ],
  },
  {
    id: "post10",
    userId: "user5",
    userName: "Charlie Brown",
    content: "Excited to announce our new social media analytics dashboard is now live!",
    timestamp: new Date(Date.now() - 36000000).toISOString(),
    comments: [
      {
        id: "comment17",
        postId: "post10",
        userId: "user1",
        userName: "John Doe",
        content: "This looks amazing! Can't wait to try it out.",
        timestamp: new Date(Date.now() - 32400000).toISOString(),
      },
      {
        id: "comment18",
        postId: "post10",
        userId: "user2",
        userName: "Jane Smith",
        content: "Great timing! We were just looking for a new analytics solution.",
        timestamp: new Date(Date.now() - 28800000).toISOString(),
      },
      {
        id: "comment19",
        postId: "post10",
        userId: "user3",
        userName: "Bob Johnson",
        content: "Does it support Instagram and TikTok analytics?",
        timestamp: new Date(Date.now() - 25200000).toISOString(),
      },
    ],
  },
]

// In a real application, this would call the actual API
export async function fetchPosts(): Promise<Post[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // For development, return mock data
  // In production, this would be replaced with an actual API call
  return [...MOCK_DATA]
}

// Function to add a new post (not implemented in this demo)
export async function addPost(content: string, userId: string, userName: string): Promise<Post> {
  // In a real app, this would call the API to create a new post
  const newPost: Post = {
    id: `post${Date.now()}`,
    userId,
    userName,
    content,
    timestamp: new Date().toISOString(),
    comments: [],
  }

  // For demo purposes, we'd add it to our mock data
  // In production, this would be an API call
  return newPost
}

