# Hackjam Preact - React - Inferno
## Getting Started
```bash
git clone https://github.com/hackages/hackjam-react-like
cd react-bookstore
yarn
yarn start
```

## The React Bookstore

### Fixing the errors
Steve, one of the interns at Hackages made some mistakes in the code, fix them and make sure the app renders in your browser.

### Breaking the app into components
Steve didn't really know about components.
**src/App.js** is one big component, break it into smaller components.

### Openining and closing the sidebar filters
Looks like the sidebar filters can't be opened, fix that. Make sure you can close them afterward.

### Categories
You can see a bunch of categories at the top of your App just below the header, implement the filtering functionnality

### Search
In the sidebar filters there's an input field, change it so that when a user inputs some text, it updates the list of books according to its search term.

## Inferno & Preact
Pick one of those and implement the same app using the framework you choose.

To install the inferno cli:
```bash
npm install -g create-inferno-app
create-inferno-app inferno-bookstore
```

To install the preact cli:
```bash
npm install -g preact-cli
preact-cli simple preact-bookstore
```

## MEASURE ALL THE THINGS
Analyze and compare the bundle sizes of your different apps using *source-map-explorer*
```bash
npm install -g source-map-explorer
``` 

Compare the performances/PWA scores of the apps using the Audits tool in chrome
