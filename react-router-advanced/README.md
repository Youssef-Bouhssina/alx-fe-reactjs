# React Router Advanced Project

This project demonstrates advanced routing techniques in a React application using React Router v6. It showcases nested routes, protected routes with authentication, and dynamic routing.

## Features

- Nested routes for Profile management
- Protected routes requiring authentication
- Dynamic routing for blog posts
- Basic authentication simulation

## Project Structure
```
react-router-advanced/
├── src/
│   ├── components/
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── ProfileDetails.jsx
│   │   ├── ProfileSettings.jsx
│   │   └── BlogPost.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-router-advanced
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## Routes

- `/` - Home page
- `/login` - Login page
- `/profile` - Protected profile page
    - `/profile/details` - Nested profile details
    - `/profile/settings` - Nested profile settings
- `/blog/:postId` - Dynamic blog post pages

## Technologies Used

- React
- React Router DOM
- Vite

## Getting Started

After starting the development server, you can:
1. Visit the home page
2. Try accessing the profile (will redirect to login)
3. Log in using the login button
4. Navigate through profile sections
5. Visit dynamic blog posts

## Authentication

This project uses a simple localStorage-based authentication simulation. In a production environment, you would want to implement proper authentication.
```