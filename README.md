# React Blog List
A simple single-page blog listing app built with React, featuring real-time search functionality and styled to match a provided layout.

## Features
- Display a list of blog posts- Each post shows:  - Blog image (fetched from Travel Triangle Blog)  - Title  - Short description- Real-time search functionality (case-insensitive)

## Tech Stack
- React (Functional Components)- Hooks: `useState`, `useEffect`- No backend – using a fake REST API- Styling with CSS or inline styles (no frameworks)

## Layout Design
Refer to the provided design layout. The blog page includes:- A "Blog" heading at the top- A search input field- A vertical list of blog cards
Each blog card includes:- An image- A blog title- A short description

## API Details
- Blog Posts:    `GET https://jsonplaceholder.typicode.com/posts?_limit=10`    → Used `h2` and `p` for displaying blog title and description.
- Blog Images:    Use random blog images from the **TravelTriangle blog** or similar travel-related image URLs.

## Project Structure
src/
├── Components/
│   ├── BlogCard.js
│   └── BlogCard.css
│
├── Pages/
│   ├── BlogList.js
│   ├── BlogList.css
│   ├── BlogDetail.js
│   └── BlogDetail.css
│
├── App.js
├── index.js
└── index.css