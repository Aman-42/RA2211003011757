# 📊 Social Media Analytics Frontend Web Application

A responsive React-based web application that provides real-time analytics from a social media platform's API. The app displays insights such as top users, trending posts, and a live feed of user activity.

## 🚀 Features

- **Pre-authorized Access:** No login or registration required.
- **Three Dedicated Pages:**
  - **Top Users:** Shows the top five users with the highest number of posts.
  - **Trending Posts:** Displays post(s) with the maximum number of comments.
  - **Feed:** Real-time, dynamically updating feed showing the newest posts at the top.
- **Randomized Images:** Each user and post is assigned a random image.
- **Efficient Data Handling:** Designed to handle unsorted and potentially large datasets.
- **Responsive UI:** Focus on user experience with a responsive, performant design.
- **API Exclusive:** Only utilizes the provided test server API for all data fetching.

## 🌐 Live Environment

The application runs exclusively on:  
`http://localhost:3000`

## 🛠 Tech Stack

- **Frontend:** React
- **Styling:** Material UI / Tailwind CSS / Bootstrap (choose based on your preference)
- **API:** Provided Social Media Analytics Test Server API (No third-party APIs used)

## 📄 Pages Breakdown

### 1. Top Users
- Displays the top 5 users with the most posts.
- Efficient storage and sorting of post counts.

### 2. Trending Posts
- Identifies and displays post(s) with the maximum number of comments.
- Handles ties by showing all top-commented posts.

### 3. Feed
- Continuously updated feed showing real-time posts.
- Dynamically fetches and displays the newest posts without page refresh.

## 💡 Notes

- API calls incur a cost. Optimize requests to minimize server load.
- App focuses on business stakeholders monitoring platform users.
- Prioritize performance and user experience.

## 📦 Getting Started

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm start`.
4. Open `http://localhost:3000` in your browser.

## ✨ Best Practices
- Optimize API calls to reduce costs.
- Ensure efficient rendering of lists and dynamic data.
- Prioritize UX by highlighting key analytical elements.
- Use caching or memoization where applicable.

---

👨‍💻 Happy Coding!
