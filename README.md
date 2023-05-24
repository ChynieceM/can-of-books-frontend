# Start your own "Can of Books" App

This repository has starter code to begin work on creating your own online bookshelf.

## What can books do?

Books are life-changing. They have the power to enlighten, educate, entertain, heal, and help us grow. Build out this code base to create an web app to track what books have impacted you, and what's recommended to read next.

## Use this template

Clone this repo to your own account with the green "Use this template" button. Then, add any collaborators. Now you are ready to start adding features! Deploy your site to let the world know which books have had the greatest impact on you, and what's recommended. Enjoy!

# Project Name

**Author**: Chyniece Matthews
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
This application is built with React. It leverages hooks (useState, useEffect) for state management and side effects handling, as well as third-party libraries like axios for making HTTP requests and react-bootstrap for pre-styled components.

The purpose of building such an application can go beyond a class assignment. It's a great way to practice modern React development, as well as application design and development more broadly. This could also be a useful addition to a portfolio for a budding web developer.

## Getting Started
-Install Node.js and npm
-Install Create React App
-Install Required Libraries
- Navigate to this link to start creating your project: https://trello.com/home

## Architecture
In terms of structure, this application is simple. It consists of a single component that fetches and displays a list of books. The data fetching occurs in the fetchBooks function, which is invoked when the component mounts (via the useEffect hook). The books data is then stored in the component's state (via the useState hook), and rendered in a carousel format.

It's important to note that this component expects a backend server running at 'http://localhost:3001/books' that provides the required books data. If the backend server isn't available, the application won't be able to fetch or display any books.

Finally, error handling is included in the data fetching function to catch and log any errors that occur during the data fetching process.

## Change Log

## Estimates

## Credit and Collaborations
https://trello.com/home

Name of feature: I'd like to view the list of books, so that whenever I visit the page, I can see the a full list of best books.

Estimate of time needed to complete: 2

Start time: 7pm

Finish time: 9pm

Actual time needed to complete: 3hours