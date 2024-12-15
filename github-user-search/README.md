# GitHub User Search

A React-based application that allows users to search for GitHub profiles and view detailed information about them.

# Project Structure
```
github-user-search/
│
├── src/
│   ├── components/
│   │   └── Search.jsx
│   ├── services/
│   │   └── githubService.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vercel.json
```

## Features

The GitHub User Search application provides the following features:

1. **User Search**: Users can search for GitHub profiles by entering a username.
2. **Advanced Filtering**: Users can filter search results by location and minimum repository count.
3. **User Profile Display**: The application displays detailed information about the searched user, including their avatar, name, bio, number of repositories, and number of followers.
4. **GitHub Profile Link**: Each searched user's profile includes a link to their GitHub page.
5. **Error Handling and Loading States**: The application handles errors gracefully and displays appropriate loading states.

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast and modern development build tool for web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Axios**: A popular HTTP client for making API requests.

## Getting Started

To run the GitHub User Search application locally, follow these steps:

1. Clone the repository:
```
git clone https://github.com/your-username/github-user-search.git
```

2. Navigate to the project directory:
```
cd github-user-search
```

3. Install dependencies:
```
npm install
```

4. Create a `.env` file in the project root directory and add your GitHub Personal Access Token:
```
VITE_GITHUB_API_KEY=your_github_personal_access_token_here
```

5. Start the development server:
```
npm run dev
```

The application will be available at `http://localhost:3000`.

## Deployment

The GitHub User Search application is deployed to Vercel and can be accessed at the following URL:

[https://github-user-search-example.vercel.app/](https://github-user-search-example.vercel.app/)

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository.

## License

This project is licensed under the [MIT License](LICENSE).
