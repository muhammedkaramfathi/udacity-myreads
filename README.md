# MyReads Project

this is my graduation project from udacity cross skilling track.



## TL;DR

To start the project you should:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- open browser in http://localhost:3000 to see the app.

## What You're Getting

you get the node modules folder and puplic folder and src folder.
in the comps folder you will find the project components which you can modify on its styles and code.

````



## Backend Server

i used an API link from Udacity to get the data and post it in tha app.
you can find its file in [`BooksAPI.js`](src/BooksAPI.js)
which has methods like:
- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
````

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## packages

i used packages as:

- react router => to handle the routing
- react router dom => to handle the routing


## Hooks

i used hooks as :

- useState
- useEffect

