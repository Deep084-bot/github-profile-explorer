# GitHub Profile Explorer

A simple web application built using **Node.js, Express.js, Axios, and EJS** that allows users to search for a GitHub username and view their profile information along with their public repositories.

## Features

* Search for any GitHub user
* View profile avatar and bio
* Display followers, following, and public repositories count
* List all repositories with direct links to GitHub

## Tech Stack

* Node.js
* Express.js
* Axios
* EJS
* GitHub REST API

## Project Setup

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Deep084-bot/github-profile-explorer.git
cd github-profile-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node index.js
```

Or if you are using nodemon:

```bash
nodemon index.js
```

### 4. Open the Application

Open your browser and go to:

```
http://localhost:3000
```

Enter a GitHub username to explore the profile and repositories.

## Project Structure

```
project-root
│
├── routes
│   └── github.js
│
├── views
│   ├── index.ejs
│   ├── profile.ejs
│   └── error.ejs
│
├── public
│   └── styles.css
│
├── index.js
├── package.json
└── .gitignore
```

## API Used

GitHub REST API

Example endpoint used:

```
https://api.github.com/users/{username}
```

## Author

Deep Mehta
