# Introduction to Typescript

Some examples of using Typescript, for a Scottish Tech Army talk 'Introduction to Typescript'

Initial setup:

1. Make sure you have [NodeJS installed](https://nodejs.dev/en/learn/how-to-install-nodejs/) on your computer -- try `node -v` to check
2. Make sure you have [npm installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on your computer -- try `npm -v` to check
3. Clone this repo to your computer
4. Go to into the repo directory e.g. `cd intro-to-typescript`
5. Run `npm install`

Then each time you use it:

1. You need two terminal windows open -- in both make sure you're in the repo directory e.g. `cd intro-to-typescript`
2. In your first window, run `npm run build -- --watch`  This starts a compiler that will generate Javascript files from the Typescript files, automatically updating them as soon as you save any changes to the Typescript.

  > If there are any errors in your Typescript code you will see them in this window.  These must be fixed before you can run the compiled Javascript code in the step below (the Typescript code will only be compiled into Javascript if it's completely free of errors).

3. In your second window, if you want to you can run the code in individual compiled Javascript files -- bear in mind you'll only see anything appear here if you've added console logging.  To run a file compiled into Javascript from Typescript (most of the examples in this project), run the command `node lib/filename.js` and replace `filename` with the particular file name you want to use e.g. `node lib/1-typescript-strict.js`  A couple of files in the `src` directory are just written in Javascript already, you can run those by doing e.g. `node src/1-javascript-freedom.js`

  > Make sure to use a `.js` ending as here we're running the compiled Javascript files, not the Typescript source (which is `.ts`)
  > How we're doing this here isn't generally how you'd run your code in practice, it's just to give us a simple way to try out different things as part of this demo.
