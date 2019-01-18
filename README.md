# &lt;/salt&gt;

## Fetch data  

In this lab you will create a simple dashboard linking to articles on [Hacker News](https://news.ycombinator.com/) using their search API.

This is an example of how to use the API `https://hn.algolia.com/api/v1/search?query=salt`, but you are free to search for anything you want. 
A minimal implementation could look something like this:

| ![simple dashboard](example.png) |
| :---: |
| A simple dashboard displaying the results for the query 'salt' |

### Requirements
The app should contain _at least_ two components - a `Board` and a `Card`. 
The Board fetches data from Hacker News and renders a Card for each search hit.
You should make this call from the method `componentDidMount` in Board.
It is ok to hard code the query.

Since the API call will take a few milliseconds you should indicate to the user that it is loading.
A simple way to do that is to render `Loading...` and then replace that when the result from the HTTP request arrives.

### Enhancements
If you finish early you are free to enhance this simple application. Some examples of enhancements are:
- Add a spinner instead of just outputting "Loading..."
- Add a search field so that the user can choose what to search for.

#### Eslint
Use this `.eslintrc.json`
```json
{
  "extends": "airbnb",
  "env": {
    "es6": true,
    "jest": true,
    "browser": true
  },
  "plugins": [
    "jest"
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "padded-blocks": 0
  }
}
```
and this `.eslintignore`
```
src/serviceWorker.js
```
Source code for loading icon: http://tobiasahlin.com/spinkit/
Source code for LoadingSpinner Component: https://blog.stvmlbrn.com/2017/10/14/display-loading-indicator-in-react-during-ajax-requests.html
Source for Date formatter: https://stackoverflow.com/questions/25159330/convert-iso-date-to-date-format-yyyy-mm-dd-format-in-javascript
