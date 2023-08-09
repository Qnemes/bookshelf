<div>
  <h1 align="center"><a href="https://epicreact.dev/app">The project was built from 🚀 EpicReact.Dev</a></h1>
  <strong>
    Building a full React application
  </strong>
  <p>
    The React and JavaScript ecosystem is full of tools and libraries to help
    us build applications. The project covers everything about building frontend React
    applications, from the absolute basics to the tricky parts you'll run into
    building real world React apps and how to create great abstractions.
  </p>

</div>

<hr />

## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `>=16`
- [npm][npm] v8.16.0 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

## Demo

Hosted on [epicbookshelf.netlify.app](https://epicbookshelf.netlify.app/)

## Setup

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```
git clone https://github.com/Qnemes/bookshelf.git
cd bookshelf
```

If you can't get the setup script to work, then just make sure you have the
right versions of the requirements listed above, and run the following commands:

```shell
npm install
npm run validate
```

It's recommended you run everything locally in the same environment you work in
every day, but if you're having issues getting things set up, you can also set
this up using [GitHub Codespaces](https://github.com/features/codespaces)

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

You can also open the production deployment:
[epicbookshelf.netlify.app](https://epicbookshelf.netlify.app/).

## Running the tests

```shell
npm test
```

This will start [Jest](https://jestjs.io/) in watch mode.

### App Data Model

- User

  - id: string
  - username: string

- List Item

  - id: string
  - bookId: string
  - ownerId: string
  - rating: number (-1 is no rating, otherwise it's 1-5)
  - notes: string
  - startDate: number (`Date.now()`)
  - finishDate: number (`Date.now()`)

If your "database" gets out of whack, you can purge it via:

```javascript
window.__bookshelf.purgeUsers()
window.__bookshelf.purgeListItems()
```

- Book

  - id: string
  - title: string
  - author: string
  - coverImageUrl: string
  - pageCount: number
  - publisher: string
  - synopsis: string
