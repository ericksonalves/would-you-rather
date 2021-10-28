# Would You Rather Project

In the "Would You Rather?" Project, you'll find a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In the app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## How to run

To get started, please:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Project Structure

```bash
├── README.md - # This file.
├── package.json # npm package manager file.
├── public # Public folder.
│   ├── favicon.ico
│   └── index.html
└── src
    ├── components
    │   ├── Book.js
    │   ├── Bookshelf.js
    │   └── BookshelfChanger.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── models
    │   ├── Book.js
    ├── repositories
    │   ├── BookRepository.js
    ├── services
    │   ├── BooksAPI.js
    ├── utils
    │   ├── BookUtils.js
    │   ├── StringUtils.js
    ├── views
    │   ├── Home.js
    │   ├── Search.js
    └── index.js # It is used for DOM rendering only.
```
