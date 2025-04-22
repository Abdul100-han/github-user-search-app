# GitHub User Search Application

A simple React application that allows users to search for GitHub profiles using the GitHub API.

## 🔗 Live Demo
View the deployed app on Vercel: https://github-user-search-app-sage.vercel.app

## Features

- Search for GitHub users by username
- Display user profile information including:
  - Avatar
  - Name
  - Bio
  - Public repositories count
  - Followers count
  - Link to GitHub profile
- Responsive design for both desktop and mobile
- Loading states during API calls
- Error handling for invalid usernames
- Debounced search to prevent excessive API calls

## Technologies Used

- React with TypeScript
- Styled Components for styling
- Axios for API calls
- GitHub API (https://api.github.com/users/{username})

## Setup Instructions

1. Clone the repository or download the ZIP file
2. Install dependencies:
   ```bash
   npm install